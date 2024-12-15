import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebaseConfig';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // User is logged in
      } else {
        setCurrentUser(null); // User is logged out
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return currentUser;
};

export default useAuth;
