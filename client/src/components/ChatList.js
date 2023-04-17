import React from "react";
import ChatCard from "./ChatCard";

function ChatList() {
  const items = [...Array(0)];

  return (
    <div className="chat-list">
      {items.map((x, i) => {
        return <ChatCard key={i} />;
      })}
    </div>
  );
}

export default ChatList;
