import React, { useState } from "react";
import { auth, db } from "../Firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    // Check if the message is empty
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }

    // Check if the user is logged in
    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert("You must be logged in to send a message");
      return;
    }

    // Get displayName (use email if no displayName is set)
    const { uid, displayName, email } = currentUser;
    const userName = displayName || email;  // Fallback to email if no display name

    try {
      // Add the message to the Firestore collection
      await addDoc(collection(db, "messages"), {
        text: message,
        name: userName,  // Use user's name or email
        createdAt: serverTimestamp(),
        uid,
      });

      // Clear the message input field
      setMessage("");

      // Scroll to the bottom of the messages (if scroll ref is provided)
      if (scroll.current) {
        scroll.current.scrollIntoView({ behavior: "smooth" });
      }

    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <form onSubmit={sendMessage} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;