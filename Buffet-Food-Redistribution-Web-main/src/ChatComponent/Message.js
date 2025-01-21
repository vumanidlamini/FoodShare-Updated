import React from "react";
import { auth } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  // If user is not authenticated, return a placeholder or nothing (based on design preference)
  if (!user) {
    return null;
  }

  // Get the user's displayName or fallback to email if not available
  const displayName = message.name || (user.displayName || user.email);

  return (
    <div
      className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}
    >
      <img
        className="chat-bubble__left"
        src={message.avatar || "/default-avatar.png"} // Use a default avatar if none exists
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{displayName}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;