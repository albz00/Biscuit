import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase.js';
import { slugify, isValidSlug } from './slug.js';

const POSTS = 'posts';

/**
 * @typedef {Object} BlogPost
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} body
 * @property {string} [coverImageUrl]
 * @property {boolean} published
 * @property {import('firebase/firestore').Timestamp | null} [createdAt]
 * @property {import('firebase/firestore').Timestamp | null} [updatedAt]
 * @property {string} [authorEmail]
 * @property {string} [authorName]
 */

/**
 * @param {unknown} value
 * @returns {import('firebase/firestore').Timestamp | null}
 */
function asTimestamp(value) {
  if (value instanceof Timestamp) return value;
  return null;
}

/**
 * @param {string} id
 * @param {import('firebase/firestore').DocumentData} data
 * @returns {BlogPost}
 */
function fromDoc(id, data) {
  return {
    slug: id,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    body: data.body ?? '',
    coverImageUrl: data.coverImageUrl ?? '',
    published: Boolean(data.published),
    createdAt: asTimestamp(data.createdAt),
    updatedAt: asTimestamp(data.updatedAt),
    authorEmail: data.authorEmail ?? '',
    authorName: data.authorName ?? ''
  };
}

/**
 * @param {string} baseSlug
 * @param {string} [excludeSlug] Slug to treat as available (when editing same post)
 */
export async function ensureUniqueSlug(baseSlug, excludeSlug) {
  let candidate = baseSlug || 'post';
  if (!isValidSlug(candidate)) candidate = 'post';

  let suffix = 2;
  while (true) {
    const snap = await getDoc(doc(db, POSTS, candidate));
    if (!snap.exists()) return candidate;
    if (excludeSlug && candidate === excludeSlug) return candidate;
    candidate = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}

/**
 * @param {string} title
 * @param {string} [excludeSlug]
 */
export async function slugFromTitle(title, excludeSlug) {
  const base = slugify(title) || 'post';
  return ensureUniqueSlug(base, excludeSlug);
}

/**
 * @param {boolean} [includeDrafts]
 * @returns {Promise<BlogPost[]>}
 */
export async function listPosts(includeDrafts = false) {
  const postsRef = collection(db, POSTS);
  const q = includeDrafts
    ? query(postsRef, orderBy('createdAt', 'desc'))
    : query(postsRef, where('published', '==', true), orderBy('createdAt', 'desc'));

  try {
    const snap = await getDocs(q);
    return snap.docs.map((d) => fromDoc(d.id, d.data()));
  } catch {
    const snap = await getDocs(postsRef);
    const posts = snap.docs.map((d) => fromDoc(d.id, d.data()));
    return posts
      .filter((p) => includeDrafts || p.published)
      .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
  }
}

/**
 * @param {string} slug
 * @returns {Promise<BlogPost | null>}
 */
export async function getPost(slug) {
  const snap = await getDoc(doc(db, POSTS, slug));
  if (!snap.exists()) return null;
  return fromDoc(snap.id, snap.data());
}

/**
 * @param {Omit<BlogPost, 'createdAt' | 'updatedAt'> & { createdAt?: unknown; updatedAt?: unknown }} post
 * @param {string} [previousSlug] When renaming, delete old doc
 */
export async function savePost(post, previousSlug) {
  const slug = post.slug;
  if (!isValidSlug(slug)) throw new Error('Invalid slug');

  const existing = previousSlug ? await getDoc(doc(db, POSTS, previousSlug)) : null;
  const createdAt = existing?.exists() ? existing.data().createdAt : serverTimestamp();

  await setDoc(doc(db, POSTS, slug), {
    title: post.title.trim(),
    excerpt: post.excerpt.trim(),
    body: post.body.trim(),
    coverImageUrl: post.coverImageUrl?.trim() || '',
    published: Boolean(post.published),
    authorEmail: post.authorEmail || '',
    authorName: post.authorName || '',
    createdAt,
    updatedAt: serverTimestamp()
  });

  if (previousSlug && previousSlug !== slug) {
    await deleteDoc(doc(db, POSTS, previousSlug));
  }
}

/**
 * @param {string} slug
 */
export async function deletePost(slug) {
  await deleteDoc(doc(db, POSTS, slug));
}

/**
 * @param {File} file
 * @param {string} slug
 */
export async function uploadCoverImage(file, slug) {
  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const safeExt = ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext) ? ext : 'jpg';
  const path = `blog/${slug}/cover-${Date.now()}.${safeExt}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, { contentType: file.type });
  return getDownloadURL(storageRef);
}

/**
 * @param {import('firebase/firestore').Timestamp | null} ts
 */
export function formatPostDate(ts) {
  if (!ts) return '';
  return ts.toDate().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * @param {BlogPost} post
 */
export function formatAuthorName(post) {
  if (post.authorName?.trim()) return post.authorName.trim();
  if (post.authorEmail) {
    const local = post.authorEmail.split('@')[0] || '';
    return local
      .replace(/[._-]+/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim();
  }
  return 'Elevation Aviation';
}

/**
 * @param {BlogPost} post
 */
export function formatPostByline(post) {
  const author = formatAuthorName(post);
  const date = formatPostDate(post.createdAt);
  if (author && date) return `By ${author} · ${date}`;
  if (author) return `By ${author}`;
  return date;
}

/**
 * @param {BlogPost | null | undefined} post
 * @param {import('firebase/auth').User | null | undefined} firebaseUser
 */
export function canManagePost(post, firebaseUser) {
  if (!post || !firebaseUser?.email) return false;
  if (!post.authorEmail) return true;
  return post.authorEmail.toLowerCase() === firebaseUser.email.toLowerCase();
}
