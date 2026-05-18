import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAug5upg7kCWGge8uFToKvvc2Ghg8UF7cU',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'elevation-aviation.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'elevation-aviation',
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'elevation-aviation.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '917564559726',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:917564559726:web:052abf0ef67f60b27ff17f'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
