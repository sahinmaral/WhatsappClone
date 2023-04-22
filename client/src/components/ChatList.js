import React from "react";
import ChatCard from "./ChatCard";
import { useSelector } from "react-redux";

function ChatList() {
  const { friends } = useSelector((state) => state.auth);

  return (
    <div className="chat-list">
      {friends.map((friend) => {
        return <ChatCard key={friend.email} friend={friend} />;
      })}
    </div>
  );
}

export default ChatList;
