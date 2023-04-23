import React, { useState } from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { sendMessage } from "../services/firebase-auth";
import { toast } from "react-toastify";

function MessageTypePanel({ clickedChat }) {
  const handleSubmitMessage = (event) => {
    if (message.length !== 0) {
      if (event.keyCode === 13) {
        sendMessage(clickedChat.email, message)
          .then(() => {
            setMessage("");
          })
          .catch((error) => {
            toast.error(error.code, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      }
    }
  };

  const [message, setMessage] = useState("");

  return (
    <div className="flex items-center bottom-4 pl-4 pt-4 pb-4 mt-0 bg-[#F0F2F5] dark:bg-whatsapp-green-dark-2">
      <WhatsappIcons
        type="emoji"
        style={`mt-2 text-[#54656F] dark:text-[#AEBAC1]`}
        width="35"
      />
      <WhatsappIcons
        type="attachment"
        style={`mt-2 ml-3 text-[#54656F] dark:text-[#AEBAC1]`}
        width="35"
      />
      <div className="w-full ml-2 mr-4">
        <input
          type="search"
          autoComplete="off"
          id="default-search"
          className="block w-full text-[12px] p-5 text-sm h-[30px] text-gray-900 rounded-lg bg-white focus:outline-none"
          placeholder="Type a message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyDown={handleSubmitMessage}
        />
      </div>
      <WhatsappIcons
        type="voice-record"
        style={`ml-0 mr-3 mt-2 text-[#54656F] dark:text-[#AEBAC1]`}
      />
    </div>
  );
}

export default MessageTypePanel;
