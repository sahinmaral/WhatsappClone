import React from "react";
import { LeftPanelStates, ModalStates } from "../constants/componentStates";
import { useDispatch, useSelector } from "react-redux";
import WhatsappIcons from "../icons/WhatsappIcons";
import { setLeftPanelState, setModalState } from "../redux/reducers/chatSlice";
import ThemeModalContent from "./ThemeModalContent";

function SettingsLeftPanel() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { modalState } = useSelector((state) => state.chat);

  const handleChangeModal = () => {
    dispatch(
      setModalState({
        id: ModalStates.THEME_MODAL,
        isOpened: !modalState.isOpened,
        header: "Theme",
      })
    );
  };

  const handleChangeLeftState = () => {
    dispatch(setLeftPanelState(LeftPanelStates.CHAT_WALLPAPER))
  }

  return (
    <>
      <div className="flex pr-[5px] pl-[20px] py-[35.5px] bg-whatsapp-green-panel">
        <div
          onClick={() => dispatch(setLeftPanelState(LeftPanelStates.DEFAULT))}
        >
          <WhatsappIcons
            type="left-arrow"
            style={`mx-2 mt-2  text-white`}
            width="24"
            height="24"
          />
        </div>
        <span className="mt-[5px] font-bold ml-5 text-[19px] text-white">
          Settings
        </span>
      </div>

      <div
        className="settings-panel flex mt-5 pl-5 py-5 hover:bg-gray-200 hover:cursor-pointer"
        onClick={() => {
          dispatch(setLeftPanelState(LeftPanelStates.UPDATE_PROFILE));
        }}
      >
        <img
          className="profile-photo"
          src="https://pps.whatsapp.net/v/t61.24694-24/328164465_148972904732828_500285319027745444_n.jpg?ccb=11-4&oh=01_AdRURBt8RuChEmMmUUyj1-EdPNo9LjNiXT259qfAnckVPA&oe=644ABF00"
        />
        <div className="ml-5 mt-2">
          <p className="text-[19px] mb-1">{user.username}</p>
          <p className="text-[15px] text-gray-500">{user.about}</p>
        </div>
      </div>

      <ul>
        <li
          className="flex pt-5 pl-[20px] hover:bg-gray-200 hover:cursor-pointer"
          onClick={handleChangeModal}
        >
          <WhatsappIcons
            type="theme"
            width="25"
            height="25"
            style={`text-whatsapp-gray-icon`}
          />
          <p className="ml-5 pb-3 text-[17px] border-b-2 w-full">Theme</p>
        </li>
        <li
          className="flex pt-5 pl-[20px] hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => {
            handleChangeLeftState();
          }}
        >
          <WhatsappIcons
            type="wallpaper"
            width="25"
            height="25"
            style={`text-whatsapp-gray-icon`}
          />
          <p className="ml-5 pb-3 text-[17px] border-b-2 w-full">
            Chat Wallpaper
          </p>
        </li>
        <li className="flex pt-5 pl-[20px] hover:bg-gray-200 hover:cursor-pointer">
          <WhatsappIcons
            type="localization"
            width="25"
            height="25"
            style={`fill-whatsapp-gray-icon`}
          />
          <p className="ml-5 pb-3 text-[17px] border-b-2 w-full">Language</p>
        </li>
      </ul>
    </>
  );
}

export default SettingsLeftPanel;
