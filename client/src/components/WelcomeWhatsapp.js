import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/authSlice";

function WelcomeWhatsapp() {
  const { savedTheme } = useSelector(selectUser);

  return (
    <div className="flex flex-col items-center mt-[280px]">
      <WhatsappIcons
        type={savedTheme === "light" ? "welcome" : "welcome-dark"}
        style={`mx-2 mt-2 ${
          savedTheme === "light" ? "text-[#54656F]" : "text-[#AEBAC1]"
        }`}
        width="360px"
      />

      <h1
        className={`text-[32px] font-light mt-[30px] ${
          savedTheme === "light" ? "text-[#41525D]" : "text-[#E9EDEFE0]"
        }`}
      >
        Whatsapp Web
      </h1>
      <div
        className={`mt-[20px] text-center text-[14px] ${
          savedTheme === "light" ? "text-[#41525D]" : "text-[#8696a0]"
        }`}
      >
        Send and receive messages without keeping your phone online.
        <br />
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </div>
    </div>
  );
}

export default WelcomeWhatsapp;
