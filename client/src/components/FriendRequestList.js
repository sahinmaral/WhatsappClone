import React from "react";
import FriendRequestCard from "./FriendRequestCard";
import { useSelector } from "react-redux";
import SentFriendRequestCard from "./SentFriendRequestCard";

function FriendRequestList() {
  const { friendRequests, sentFriendRequests } = useSelector(
    (state) => state.chat
  );

  return (
    <div className="overflow-y-auto overflow-x-hidden mb-[200px] h-[calc(100vh-100%)] max-[1440px]:min-h-[calc(100vh-110px)] min-h-[calc(100vh-140px)]">
      <h1 className="mb-4 font-bold pl-[35px] text-[19px] text-whatsapp-green-panel">
        Sent Friend Requests
      </h1>
      <ul className="friend-requests">
        {sentFriendRequests.map((friendRequest) => {
          return (
            <li
              className="pt-5 pb-3 pl-[20px] ml-[35px] hover:bg-gray-200 hover:cursor-pointer border-b-2"
              key={friendRequest.id}
            >
              <SentFriendRequestCard friendRequest={friendRequest} />
            </li>
          );
        })}
        {sentFriendRequests.length === 0 && (
          <div className="pl-[35px] dark:text-gray-400">
            No sending invitations
          </div>
        )}
      </ul>

      <h1 className="mb-4 mt-12 font-bold pl-[35px] text-[19px] text-whatsapp-green-panel">
        Friend Requests
      </h1>
      <ul className="friend-requests">
        {friendRequests.map((friendRequest) => {
          return (
            <li
              className="pt-5 pl-[20px] pb-3 ml-[35px] hover:bg-gray-200 hover:cursor-pointer border-b-2"
              key={friendRequest.id}
            >
              <FriendRequestCard friendRequest={friendRequest} />
            </li>
          );
        })}
        {friendRequests.length === 0 && (
          <div className="pl-[35px] dark:text-gray-400">
            No pending invitations
          </div>
        )}
      </ul>
    </div>
  );
}

export default FriendRequestList;
