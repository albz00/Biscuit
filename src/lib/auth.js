import { writable } from 'svelte/store';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { auth } from './firebase.js';

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
