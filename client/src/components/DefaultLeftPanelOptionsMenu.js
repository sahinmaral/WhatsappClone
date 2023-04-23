import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import { LEFT_PANEL_STATES } from "../constants";
import { logOutUser } from "../services/firebase-auth";
import { useNavigate } from "react-router-dom";

function DefaultLeftPanelOptionsMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="inline-block relative">
        <span onClick={handleDropDown}>
          <WhatsappIcons
            type="three-dot"
            style={`mx-2 mt-2 text-[#54656F] dark:text-[#AEBAC1]`}
          />
        </span>
        <ul
          className={`bg-white dark:bg-whatsapp-green-dark-2 whatsapp-shadow w-[150px] absolute ml-[-120px] mt-2 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li
            onClick={() => {
              dispatch(setLeftPanelState(LEFT_PANEL_STATES.SETTINGS));
            }}
          >
            <span className="cursor-pointer rounded-t text-black dark:text-white bg-white dark:bg-whatsapp-green-dark-2 hover:bg-gray-200 hover:dark:bg-whatsapp-green-dark py-4 pl-5 block whitespace-no-wrap">
              Settings
            </span>
          </li>
          <li>
            <span
              className="rounded-t cursor-pointer text-black dark:text-white bg-white dark:bg-whatsapp-green-dark-2 hover:bg-gray-200 hover:dark:bg-whatsapp-green-dark py-4 pl-5 block whitespace-no-wrap"
              onClick={() => {
                logOutUser();
                navigate("/auth/login");
              }}
            >
              Log out
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DefaultLeftPanelOptionsMenu;
