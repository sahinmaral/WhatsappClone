import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";

function WelcomeWhatsapp() {
  return (
    <div className="flex flex-col items-center mt-[280px]">
      <WhatsappIcons
        type="welcome"
        style={`mx-2 mt-2 text-[#54656F]`}
        width="360px"
      />
      <h1 className="text-[32px] font-light mt-[30px] text-[#41525D]">
        Whatsapp Web
      </h1>
      <div className="mt-[20px] text-center text-[14px] text-[#667781]">
        Send and receive messages without keeping your phone online.
        <br />
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </div>
    </div>
  );
}

export default WelcomeWhatsapp;
