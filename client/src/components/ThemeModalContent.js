import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalState, setTheme } from "../redux/reducers/chatSlice";
import { MODAL_STATES } from "../constants";

function ThemeModalContent() {
  const { theme } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setTheme(selectedTheme));
  };

  const handleCloseModal = () => {
    dispatch(
      setModalState({
        id: MODAL_STATES.NONE,
        header: "",
        isOpened: false,
      })
    );
  };

  const [selectedTheme, setSelectedTheme] = useState(theme);

  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="light"
          type="radio"
          value="light"
          name="light"
          checked={selectedTheme === "light"}
          onChange={() => {
            setSelectedTheme("light");
          }}
          className="w-[21px] h-[21px] accent-whatsapp-green-panel focus:whatsapp-green-panel"
        />
        <label
          htmlFor="light"
          className="ml-2 text-[14px] font-normal text-gray-900 dark:text-gray-300"
        >
          Light
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="dark"
          type="radio"
          value="dark"
          name="dark"
          onChange={() => {
            setSelectedTheme("dark");
          }}
          checked={selectedTheme === "dark"}
          className="w-[21px] h-[21px] accent-whatsapp-green-panel focus:whatsapp-green-panel"
        />
        <label
          htmlFor="dark"
          className="ml-2 text-[14px] font-normal text-gray-900 dark:text-gray-300"
        >
          Dark
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="system-default"
          type="radio"
          value="system-default"
          name="system-default"
          onChange={() => {
            setSelectedTheme("system-default");
          }}
          checked={selectedTheme === "system-default"}
          className="w-[21px] h-[21px] accent-whatsapp-green-panel focus:whatsapp-green-panel"
        />
        <label
          htmlFor="system-default"
          className="ml-2 text-[14px] font-normal text-gray-900 dark:text-gray-300"
        >
          System Default
        </label>
      </div>
      <div className="button-group float-right">
        <button
          type="button"
          onClick={() => {
            handleCloseModal(false);
          }}
          className="text-whatsapp-green-panel bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            handleSubmit();
            handleCloseModal(false);
          }}
          className="focus:outline-none text-white bg-whatsapp-green-panel hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          OK
        </button>
      </div>
      <div className="clear-both"></div>
    </>
  );
}

export default ThemeModalContent;
