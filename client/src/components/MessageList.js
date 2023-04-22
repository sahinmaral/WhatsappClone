import React, { useEffect, useRef } from "react";
import MessageCard from "./MessageCard";
import { useSelector } from "react-redux";

function MessageList() {
  const { messages, clickedChat } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="message-list" ref={divRef}>
      {messages
        .filter(
          (messageItem) =>
            (messageItem.sender.username === clickedChat.username &&
              messageItem.receiver.username === user.username) ||
            (messageItem.receiver.username === clickedChat.username &&
              messageItem.sender.username === user.username)
        )
        .map((messageItem, key) => {
          return (
            <MessageCard
              message={messageItem.message}
              createdAt={messageItem.createdAt}
              fromWho={
                messageItem.sender.username === user.username
                  ? "fromMe"
                  : "fromOther"
              }
              key={key}
            />
          );
        })}
    </div>
  );
}

export default MessageList;
