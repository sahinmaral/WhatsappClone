import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import { LeftPanelStates } from "../constants/componentStates";
import { logOutUser } from "../services/firebase";
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
          <WhatsappIcons type="three-dot" style={`mx-2 mt-2 text-[#54656F]`} />
        </span>
        <ul
          className={`bg-white whatsapp-shadow w-[150px] absolute ml-[-120px] mt-2 pt-1 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li
            onClick={() => {
              dispatch(setLeftPanelState(LeftPanelStates.SETTINGS));
            }}
          >
            <span className="cursor-pointer rounded-t bg-white hover:bg-gray-200 py-4 pl-5 block whitespace-no-wrap">
              Settings
            </span>
          </li>
          <li>
            <span
              className="rounded-t cursor-pointer bg-white hover:bg-gray-200 py-4 pl-5 block whitespace-no-wrap"
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
