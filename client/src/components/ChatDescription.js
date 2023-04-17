import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";


function ChatDescription() {

  return (
    <div className="flex justify-between border-b-[1px] border-slate-200 pb-3 pt-3 pl-3 bg-[#e5e7eb]">
      <div className="flex">
        <img
          className="chat-thumbnail"
          alt="chat-thumbnail"
          src="https://pps.whatsapp.net/v/t61.24694-24/328164465_148972904732828_500285319027745444_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTw3igtl-klhImjPUoBj0zOsjFx963YLUD-VWyCCyy8qA&oe=64477340"
        />

        <div className="flex flex-col sm:w-[200px] md:w-[300px] lg:w-[500px] xl:w-[700px] 2xl:w-[1000px]">
          <span className="text-slate-900 text-normal font-normal">
            Andrew Alfred
          </span>
          <span className="text-slate-500 text-[0.8em] font-normal h-[20px] text-ellipsis overflow-y-hidden overflow-x-hidden whitespace-nowrap">
            Consectetur magna sunt sint fugiat commodo enim qui. Culpa laborum
            ea ex aliquip magna ut ut in tempor. Minim eiusmod mollit amet sit
            eu excepteur. Dolore fugiat nostrud velit fugiat deserunt amet anim
            excepteur consequat consequat nisi mollit. Fugiat dolor qui proident
            Lorem. Est est quis occaecat est enim. Qui voluptate irure eu
            pariatur.
          </span>
        </div>
      </div>

      <div className="flex">
        <WhatsappIcons type="search" style={`mx-2 mt-3 text-[#54656F]`} />
        <WhatsappIcons type="three-dot" style={`mx-2 mt-3 text-[#54656F]`} />
      </div>
    </div>
  );
}

export default ChatDescription;
