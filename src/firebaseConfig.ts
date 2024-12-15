import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhGsHwMVPHsFV1G7YNWO_o1AZkpWcr9Iw",
    authDomain: "raftlabs-ef4cc.firebaseapp.com",
    projectId: "raftlabs-ef4cc",
    storageBucket: "raftlabs-ef4cc.firebasestorage.app",
    messagingSenderId: "290790714465",
    appId: "1:290790714465:web:4a2e9bc13361a9cb554e20",
    measurementId: "G-BJHN7ZDP0X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication object
export const auth = getAuth(app);
