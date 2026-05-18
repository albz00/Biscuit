import { writable } from 'svelte/store';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage } from './firebase.js';

/** @type {import('svelte/store').Writable<import('firebase/auth').User | null>} */
export const user = writable(null);

/** @type {import('svelte/store').Writable<boolean>} */
export const authReady = writable(false);

onAuthStateChanged(auth, (firebaseUser) => {
  user.set(firebaseUser);
  authReady.set(true);
});

/**
 * @param {string} email
 * @param {string} password
 */
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email.trim(), password);
}

export function signOut() {
  return firebaseSignOut(auth);
}

/**
 * @param {string} email
 */
export function sendPasswordReset(email) {
  return sendPasswordResetEmail(auth, email.trim());
}

/**
 * @param {{ displayName?: string; photoURL?: string }} profile
 */
export async function updateUserProfile(profile) {
  const current = auth.currentUser;
  if (!current) throw new Error('Not signed in');
  await updateProfile(current, profile);
  user.set(auth.currentUser);
}

/**
 * @param {File} file
 * @param {string} uid
 */
export async function uploadProfilePhoto(file, uid) {
  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const safeExt = ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext) ? ext : 'jpg';
  const path = `profiles/${uid}/avatar-${Date.now()}.${safeExt}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, { contentType: file.type });
  return getDownloadURL(storageRef);
}
