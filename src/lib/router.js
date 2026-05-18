import { tick } from 'svelte';
import { writable } from 'svelte/store';

function normalizePath(path) {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

function currentBrowserPath() {
  if (typeof window === 'undefined') return '/';
  return normalizePath(window.location.pathname);
}

export const currentPath = writable(currentBrowserPath());

/** @type {import('svelte/store').Writable<Record<string, string>>} */
export const routeParams = writable({});

/**
 * @param {string} path
 * @returns {{ type: 'static'; path: string } | { type: 'blog-list' } | { type: 'blog-profile' } | { type: 'blog-post'; slug: string } | { type: 'blog-editor'; mode: 'new' | 'edit'; slug?: string }}
 */
export function parseRoute(path) {
  const p = normalizePath(path);

  if (p === '/blog') return { type: 'blog-list' };
  if (p === '/blog/profile') return { type: 'blog-profile' };
  if (p === '/blog/new') return { type: 'blog-editor', mode: 'new' };

  const editMatch = p.match(/^\/blog\/edit\/([^/]+)$/);
  if (editMatch) {
    return { type: 'blog-editor', mode: 'edit', slug: decodeURIComponent(editMatch[1]) };
  }

  const postMatch = p.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    return { type: 'blog-post', slug: decodeURIComponent(postMatch[1]) };
  }

  return { type: 'static', path: p };
}

function syncRouteParams(path) {
  const route = parseRoute(path);
  if (route.type === 'blog-post') routeParams.set({ slug: route.slug });
  else if (route.type === 'blog-editor' && route.mode === 'edit' && route.slug) {
    routeParams.set({ slug: route.slug, mode: 'edit' });
  } else if (route.type === 'blog-editor') routeParams.set({ mode: 'new' });
  else routeParams.set({});
}

/** @type {string | undefined} */
let pendingHash;

if (typeof window !== 'undefined') {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  syncRouteParams(currentBrowserPath());

  currentPath.subscribe(() => {
    const hash = pendingHash !== undefined ? pendingHash : window.location.hash;
    pendingHash = undefined;
    scheduleScrollAfterRouteChange(hash);
  });

  window.addEventListener('popstate', () => {
    const path = currentBrowserPath();
    currentPath.set(path);
    syncRouteParams(path);
  });
}

export function setCurrentPath(path) {
  const normalized = normalizePath(path);
  currentPath.set(normalized);
  syncRouteParams(normalized);
}

function scrollAfterRouteChange(hash) {
  if (typeof window === 'undefined') return;

  const apply = () => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(apply);
  });
}

function scheduleScrollAfterRouteChange(hash) {
  tick().then(() => scrollAfterRouteChange(hash));
}

export function navigate(href, options = {}) {
  if (typeof window === 'undefined') return;

  const url = new URL(href, window.location.origin);
  const path = normalizePath(url.pathname);
  const next = `${path}${url.search}${url.hash}`;
  const current = `${normalizePath(window.location.pathname)}${window.location.search}${window.location.hash}`;

  if (next === current) return;

  pendingHash = url.hash || '';
  window.history[options.replace ? 'replaceState' : 'pushState']({}, '', next);
  setCurrentPath(path);
}

export function link(node, opts = {}) {
  let options = typeof opts === 'string' ? { href: opts } : opts;

  function onClick(event) {
    const href = options.href || node.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (node.target && node.target !== '_self') return;

    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return;

    event.preventDefault();
    navigate(`${url.pathname}${url.search}${url.hash}`, options);
  }

  node.addEventListener('click', onClick);

  return {
    update(next = {}) {
      options = typeof next === 'string' ? { href: next } : next;
    },
    destroy() {
      node.removeEventListener('click', onClick);
    }
  };
}

export function active(node, opts = {}) {
  let options = opts;
  let appliedClasses = [];

  function setClasses(isActive) {
    const className = options.className || 'active';
    const classes = className.split(/\s+/).filter(Boolean);

    if (isActive) {
      node.classList.add(...classes);
      appliedClasses = classes;
    } else if (appliedClasses.length) {
      node.classList.remove(...appliedClasses);
      appliedClasses = [];
    }
  }

  const unsubscribe = currentPath.subscribe((path) => {
    const href = options.href || node.getAttribute('href') || '/';
    const target = normalizePath(new URL(href, window.location.origin).pathname);
    setClasses(path === target);
  });

  return {
    update(next = {}) {
      options = next;
    },
    destroy() {
      unsubscribe();
      if (appliedClasses.length) node.classList.remove(...appliedClasses);
    }
  };
}
