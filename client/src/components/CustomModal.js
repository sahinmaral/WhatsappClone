import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../redux/reducers/chatSlice";
import { MODAL_STATES } from "../constants";

function CustomModal({ children }) {
  const dispatch = useDispatch();
  const { modalState } = useSelector((state) => state.chat);

  const handleCloseModal = () => {
    dispatch(
      setModalState({
        id: MODAL_STATES.NONE,
        header: "",
        isOpened: false,
      })
    );
  };

  const handleClick = (event) => {
    if (event.target.id === modalState.id) {
      handleCloseModal();
    }
  };

  return (
    <>
      <div
        id={modalState.id}
        onClick={(event) => handleClick(event)}
        className={`${
          !modalState.isOpened ? "hidden" : "block"
        } overflow-x-hidden overflow-y-auto fixed md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center`}
      >
        <div className="mx-auto mt-[300px] relative w-full max-w-lg px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
            <div className="flex items-start justify-between px-5 pt-5 rounded-t dark:border-gray-600">
              <h3 className="text-[#3B4A54] text-[20px] font-normal">
                {modalState.header}
              </h3>
            </div>
            <div className="px-6 pt-6 pb-3 space-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomModal;
