import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../Firebase/firebase";
import { GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Google sign-in handler
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // Email/password sign-in handler
  const emailSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // You can handle the user after successful login here
        console.log("Signed in as:", userCredential.user.email);
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
      });
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in to chat with your fellow React Developers.</p>
      
      {/* Email Sign-In Form */}
      <form onSubmit={emailSignIn}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-in">
          Sign In with Email
        </button>
      </form>

      {/* Google Sign-In Button */}
      <button className="sign-in" onClick={googleSignIn}>
        <img
          src={GoogleSignin}
          alt="sign in with google"
          width={200}
          height={50}
        />
      </button>
    </main>
  );
};

export default Welcome;