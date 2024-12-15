import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};
export default signUp