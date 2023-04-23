import React from "react";
import { useDispatch} from "react-redux";
import { setClickedChat } from "../redux/reducers/chatSlice";
import { NO_LAST_MESSAGE, checkProfilePhoto } from "../constants";

function ChatCard({ friend }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setClickedChat(friend));
  };

  return (
    <div
      className="chat-card hover:bg-[#F5F6F6] hover:dark:bg-whatsapp-green-dark-2"
      onClick={handleClick}
    >
      <img
        className="w-10 h-10 rounded-full"
        alt="chat-card-thumbnail"
        src={checkProfilePhoto(friend.photoURL)}
      />
      <div className="flex flex-col w-full mr-[30px]">
        <div className="flex justify-between">
          <p className="text-[0.8em] font-normal text-slate-900 dark:text-white">
            {friend.username}
          </p>
          {/* <p className="text-slate-500 text-[0.7em] font-normal">
            {}
          </p> */}
        </div>
        <p className="pr-[100px] lg:pr-10 text-slate-500 text-[0.8em] font-normal text-ellipsis overflow-hidden whitespace-nowrap">
          {friend.lastMessage !== NO_LAST_MESSAGE
            ? friend.lastMessage.message
            : NO_LAST_MESSAGE}
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
