import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom"; 
import { signUp } from "./Signup";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between Login and Signup modes
  const [userId, setUserId] = useState<string | null>(null); // To store user ID

  // Initialize Google Provider
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate(); 
  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Update userId state with UID of logged-in user
        console.log("Logged-in User ID:", user.uid);
      } else {
        setUserId(null); // Clear userId if logged out
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    try {
      if (isLoginMode) {
        // Login logic
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
        setUserId(userCredential.user.uid); 
        navigate("/newsfeed"); 
      
      
      } else {
        // Signup logic
        await signUp(email, password);
        alert("Signed up successfully!");
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Logged in with Google successfully!");
      setUserId(result.user.uid); 
      navigate("/newsfeed",{ state: { userId } }); 
    } catch (error: any) {
      alert(`Error logging in with Google: ${error.message}`);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {isLoginMode ? "Sign in to ConnectLY" : "Sign up for ConnectLY"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete={isLoginMode ? "current-password" : "new-password"}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoginMode ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google logo"
                className="h-5 w-5 mr-2"
              />
              Login with Google
            </button>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {isLoginMode ? "Not a member?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {isLoginMode ? "Register" : "Login"}
            </button>
          </p>

          {/* Display Logged-in User ID */}
          {/* {userId && (
            <p className="mt-4 text-center text-sm/6 text-green-500">
              Logged-in User ID: <span className="font-bold">{userId}</span>
            </p>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Login;
