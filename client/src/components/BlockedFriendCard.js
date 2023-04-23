import React from "react";
import { unblockUserFromBlockedFriends } from "../services/firebase-auth";
import { toast } from "react-toastify";

function BlockedFriendCard({ blockedFriend }) {
  const unblockUser = () => {
    unblockUserFromBlockedFriends(blockedFriend.email).catch((err) => {
      toast.error(err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <>
      <div className="flex mb-4">
        <img
          className="profile-photo"
          alt="requested-user"
          src="https://pps.whatsapp.net/v/t61.24694-24/328164465_148972904732828_500285319027745444_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTw3igtl-klhImjPUoBj0zOsjFx963YLUD-VWyCCyy8qA&oe=64477340"
        />
        <p className="pt-[6px] text-gray-600 dark:text-gray-400 text-[0.9em] font-normal">
          {blockedFriend.email}
        </p>
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={unblockUser}
          className="w-full focus:outline-none text-white dark:text-whatsapp-green-dark bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm py-2.5 mr-2 mb-2"
        >
          Unblock
        </button>
      </div>
    </>
  );
}

export default BlockedFriendCard;
