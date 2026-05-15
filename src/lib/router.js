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

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    currentPath.set(currentBrowserPath());
  });
}

function scrollAfterNavigation(hash) {
  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return;
  }

  window.requestAnimationFrame(() => {
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ block: 'start' });
  });
}

export function navigate(href, options = {}) {
  if (typeof window === 'undefined') return;

  const url = new URL(href, window.location.origin);
  const path = normalizePath(url.pathname);
  const next = `${path}${url.search}${url.hash}`;
  const current = `${normalizePath(window.location.pathname)}${window.location.search}${window.location.hash}`;

  if (next === current) return;

  window.history[options.replace ? 'replaceState' : 'pushState']({}, '', next);
  currentPath.set(path);
  scrollAfterNavigation(url.hash);
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
