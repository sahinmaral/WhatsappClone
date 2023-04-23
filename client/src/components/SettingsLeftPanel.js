import React from "react";
import { LEFT_PANEL_STATES, MODAL_STATES } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import WhatsappIcons from "../icons/WhatsappIcons";
import { setLeftPanelState, setModalState } from "../redux/reducers/chatSlice";
import { selectUser } from "../redux/reducers/authSlice";

function SettingsLeftPanel() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { modalState } = useSelector((state) => state.chat);

  const handleChangeModal = () => {
    dispatch(
      setModalState({
        id: MODAL_STATES.THEME_MODAL,
        isOpened: !modalState.isOpened,
        header: "Theme",
      })
    );
  };

  const handleChangeLeftState = () => {
    dispatch(setLeftPanelState(LEFT_PANEL_STATES.CHAT_WALLPAPER));
  };

  return (
    <div className="bg-white dark:bg-whatsapp-green-dark h-full">
      <div className="flex pr-[5px] pl-[20px] py-[23.5px] bg-whatsapp-green-panel dark:bg-whatsapp-green-dark-2">
        <div
          onClick={() => dispatch(setLeftPanelState(LEFT_PANEL_STATES.DEFAULT))}
        >
          <WhatsappIcons
            type="left-arrow"
            style={`mx-2 mt-2 text-white`}
            width="24"
            height="24"
          />
        </div>
        <span className="mt-[5px] font-bold ml-5 text-[19px] text-white">
          Settings
        </span>
      </div>

      <div
        className="settings-panel flex mt-5 pl-5 py-5 hover:bg-gray-200 hover:dark:bg-whatsapp-green-dark-2 hover:cursor-pointer"
        onClick={() => {
          dispatch(setLeftPanelState(LEFT_PANEL_STATES.UPDATE_PROFILE));
        }}
      >
        <img
          className="profile-photo"
          src={user.photoURL}
          alt="settings-user-thumbnail"
        />
        <div className="ml-5 mt-2">
          <p className="text-[19px] mb-1 dark:text-white">{user.username}</p>
          <p className="text-[15px] text-gray-500">{user.about}</p>
        </div>
      </div>

      <ul>
        <li
          className="flex pt-5 pl-[20px] hover:bg-gray-200 hover:cursor-pointer dark:text-white hover:dark:text-black"
          onClick={handleChangeModal}
        >
          <WhatsappIcons
            type="theme"
            width="25"
            height="25"
            style={`text-fill-whatsapp-gray-icon  dark:text-[#AEBAC1]`}
          />
          <p className="ml-5 pb-3 text-[17px] border-b-2 border-gray-400 lg:w-[80%] w-[70%]">
            Theme
          </p>
        </li>
        <li
          className="flex pt-5 pl-[20px] hover:bg-gray-200 hover:cursor-pointer dark:text-white hover:dark:text-black"
          onClick={() => {
            handleChangeLeftState();
          }}
        >
          <WhatsappIcons
            type="wallpaper"
            width="25"
            height="25"
            style={`text-fill-whatsapp-gray-icon dark:text-[#AEBAC1]`}
          />
          <p className="ml-5 pb-3 text-[17px] border-b-2 border-gray-400 lg:w-[80%] w-[70%]">
            Chat Wallpaper
          </p>
        </li>
        <li className="flex pt-5 pl-[20px] hover:bg-gray-200 hover:cursor-pointer dark:text-white hover:dark:text-black">
          <WhatsappIcons
            type="localization"
            width="25"
            height="25"
            style={`text-fill-whatsapp-gray-icon  dark:text-[#AEBAC1]`}
          />
          <p className="ml-5 pb-3 text-[17px] border-gray-400 border-b-2 lg:w-[80%] w-[70%]">
            Language
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SettingsLeftPanel;
