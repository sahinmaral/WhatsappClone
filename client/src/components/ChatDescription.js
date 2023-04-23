import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useSelector } from "react-redux";
import { checkProfilePhoto } from "../constants";
import { selectUser } from "../redux/reducers/authSlice";

function ChatDescription() {
  const { clickedChat } = useSelector((state) => state.chat);
  const { savedTheme } = useSelector(selectUser);

  return (
    <div
      className={`flex justify-between pb-3 pt-3 pl-3 ${
        savedTheme === "light" ? "bg-[#e5e7eb]" : "bg-whatsapp-green-dark-2"
      }`}
    >
      <div className="flex">
        <img
          className="chat-thumbnail"
          alt="chat-thumbnail"
          src={checkProfilePhoto(clickedChat.photoURL)}
        />

        <div className="flex flex-col sm:w-[200px] md:w-[300px] lg:w-[500px] xl:w-[700px] 2xl:w-[1000px]">
          <span
            className={`text-normal font-normal ${
              savedTheme === "light" ? "text-slate-900" : "text-[#E9EDEF]"
            }`}
          >
            {clickedChat.username}
          </span>
          <span
            className={`text-slate-500 text-[0.8em] font-normal h-[20px] text-ellipsis overflow-y-hidden overflow-x-hidden whitespace-nowrap`}
          >
            {clickedChat.about}
          </span>
        </div>
      </div>

      <div className="flex">
        <WhatsappIcons
          type="search"
          style={`mx-2 mt-3 ${
            savedTheme === "light" ? "text-[#54656F]" : "text-[#AEBAC1]"
          }`}
        />
        <WhatsappIcons
          type="three-dot"
          style={`mx-2 mt-3 ${
            savedTheme === "light" ? "text-[#54656F]" : "text-[#AEBAC1]"
          }`}
        />
      </div>
    </div>
  );
}

export default ChatDescription;
