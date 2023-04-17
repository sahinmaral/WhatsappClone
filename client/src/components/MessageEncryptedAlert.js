import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";

function MessageEncryptedAlert() {
  return (
    <div className="absolute bottom-[70px] flex justify-center ml-[10%] md:ml-[10%] md:w-[80%] lg:ml-[5%] lg:w-[85%] xl:w-full xl:ml-[-3%]">
      <div className="flex bg-[#FFEECD] text-[#54656F] rounded-md px-5 py-2 text-[11.5px] text-center">
        <WhatsappIcons type="lock" width="30" heigh="30" />
        <span className="ml-2">
          Messages are end-to-end encrypted. No one outside of this chat, not
          even WhatsApp, can read or listen to them. Click to learn more.
        </span>
      </div>
    </div>
  );
}

export default MessageEncryptedAlert;
