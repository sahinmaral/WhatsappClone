import React from "react";
import { handleFriendRequest } from "../services/firebase-auth";
import { FRIEND_REQUEST_STATES } from "../constants";

function FriendRequestCard({ friendRequest }) {
  return (
    <>
      <div className="flex mb-4">
        <img
          className="profile-photo"
          alt="requested-user"
          src="https://pps.whatsapp.net/v/t61.24694-24/328164465_148972904732828_500285319027745444_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTw3igtl-klhImjPUoBj0zOsjFx963YLUD-VWyCCyy8qA&oe=64477340"
        />
        <p className="pt-[6px] text-gray-600 dark:text-gray-400 text-[0.9em] font-normal">
          {friendRequest.user.email}
        </p>
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={() => {
            handleFriendRequest(FRIEND_REQUEST_STATES.ACCEPTED, friendRequest);
          }}
          className="py-[5px] focus:outline-none text-white dark:text-whatsapp-green-dark bg-green-700 hover:bg-green-800 font-medium rounded-lg text-xs px-3 mr-2 mb-2"
        >
          Accept
        </button>
        <button
          type="button"
          className="focus:outline-none text-white dark:text-whatsapp-green-dark bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-xs px-3 mr-2 mb-2 "
          onClick={() => {
            handleFriendRequest(FRIEND_REQUEST_STATES.DECLINED, friendRequest);
          }}
        >
          Decline
        </button>
        <button
          type="button"
          className="focus:outline-none text-white dark:text-whatsapp-green-dark bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 mr-2 mb-2"
          onClick={() => {
            handleFriendRequest(FRIEND_REQUEST_STATES.BLOCKED, friendRequest);
          }}
        >
          Block
        </button>
      </div>
    </>
  );
}

export default FriendRequestCard;
