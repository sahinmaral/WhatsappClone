import React, { useEffect, useMemo, useRef } from "react";
import MessageCard from "./MessageCard";
import { useSelector } from "react-redux";

function MessageList() {
  const { messages, clickedChat } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  }, [messages]);

  const sortedMessages = useMemo(() => {
    return [...messages]
      .sort(function (a, b) {
        return (
          new Date(Date.parse(b.createdAt)) - new Date(Date.parse(a.createdAt))
        );
      })
      .filter(
        (messageItem) =>
          (messageItem.sender.username === clickedChat.username &&
            messageItem.receiver.username === user.username) ||
          (messageItem.receiver.username === clickedChat.username &&
            messageItem.sender.username === user.username)
      );
  }, [messages, clickedChat.username, user.username]);

  return (
    <div className="message-list" ref={divRef}>
      {sortedMessages.map((messageItem, key) => {
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
