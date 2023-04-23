import React from "react";

function SentFriendRequestCard({ friendRequest }) {
  return (
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
  );
}

export default SentFriendRequestCard;
