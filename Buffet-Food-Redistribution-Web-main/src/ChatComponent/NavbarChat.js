import React, { useState } from "react";
import { auth } from "../Firebase/firebase"; // Assuming auth is initialized here
import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

const NavBarChat = () => {
  const [user] = useAuthState(auth); // This hook listens for user authentication state
  const [email, setEmail] = useState(""); // State to handle email input
  const [password, setPassword] = useState(""); // State to handle password input
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign up and sign in

  // Handle login with email/password
  const handleEmailSignIn = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        // If we're in sign-up mode, create a new user
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // If we're in sign-in mode, sign in with the existing user
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Error signing in or creating user: ", error.message);
    }
  };

  // Handle logout
  const signOut = () => {
    firebaseSignOut(auth);
  };

  return (
    <nav className="nav-bar">
      <h1>FoodShare Network Chat</h1>
      {user ? (
        <div>
          <span>Welcome, {user.email}</span>
          <button onClick={signOut} className="sign-out" type="button">
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleEmailSignIn} className="sign-in-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
          </form>
          <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-sign-up">
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBarChat;