import React from "react";
import { useDispatch } from "react-redux";
import { setClickedChat } from "../redux/reducers/chatSlice";

function ChatCard({ friend }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setClickedChat(friend));
  };

  return (
    <div className="chat-card" onClick={handleClick}>
      <img
        className="w-10 h-10 rounded-full"
        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      />
      <div className="flex flex-col w-[370px] mr-[30px]">
        <div className="flex justify-between">
          <p className="text-slate-900 text-[0.8em] font-normal">
            {friend.username}
          </p>
          <p className="text-slate-500 text-[0.7em] font-normal">
            {/* Son mesaj atma tarihi */}
          </p>
        </div>
        <p className="text-slate-500 text-[0.8em] font-normal text-ellipsis overflow-hidden whitespace-nowrap">
          {/* Son mesaj */}
          Bana yardim eder misin sayin arkadasim Sahin Bana yardim eder misin
          sayin arkadasim Sahin
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
