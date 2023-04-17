import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";

function MessageTypePanel() {
  return (
    <div className="flex items-center bottom-4 bg-[#F0F2F5] pl-4 pt-2 pb-2">
      <WhatsappIcons type="emoji" style={`mt-2 text-[#54656F]`} width="35" />
      <WhatsappIcons
        type="attachment"
        style={`mt-2 ml-3 text-[#54656F]`}
        width="35"
      />
      <form className="w-full ml-2 mr-4">
        <input
          type="search"
          id="default-search"
          className="block w-full text-[12px] p-5 text-sm h-[30px] text-gray-900 rounded-lg bg-white focus:outline-none"
          placeholder="Type a message"
          required
        />
      </form>
      <WhatsappIcons
        type="voice-record"
        style={`ml-0 mr-3 mt-2 text-[#54656F]`}
      />
    </div>
  );
}

export default MessageTypePanel;
