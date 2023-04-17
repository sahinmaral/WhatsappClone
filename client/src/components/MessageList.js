import React from "react";
import MessageCard from "./MessageCard";

function MessageList() {
  return (
    <div className="message-list">
      {[...Array(55)].map((value, key) => {
        return <MessageCard message={`Enim ipsum nulla sit proident. Irure laboris exercitation occaecat labore Enim ipsum nulla sit proident. Irure laboris exercitation occaecat labore Enim ipsum nulla sit proident. Irure laboris exercitation occaecat labore Enim ipsum nulla sit proident. Irure laboris exercitation occaecat labore Lorem qui elit velit. Sit ipsum eiusmod esse consequat ullamco esse. Incididunt do dolore aliqua amet ea enim consequat aliquip mollit magna adipisicing velit cillum irure. Excepteur incididunt est irure consequat mollit do fugiat anim aliqua excepteur. Ut do duis ut aliqua est culpa labore veniam qui mollit consectetur nostrud dolor. ${key}`} key={key} index={key}/>;
      })}
    </div>
  );
}

export default MessageList;
