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
              className="pt-5 pb-3 pl-[20px] hover:bg-gray-200 hover:cursor-pointer border-b-2"
              key={friendRequest.id}
            >
              <SentFriendRequestCard friendRequest={friendRequest} />
            </li>
          );
        })}
      </ul>

      <h1 className="my-4 font-bold pl-[35px] text-[19px] text-whatsapp-green-panel">
        Friend Requests
      </h1>
      <ul className="friend-requests">
        {friendRequests.map((friendRequest) => {
          return (
            <li
              className="pt-5 pb-3 pl-[20px] hover:bg-gray-200 hover:cursor-pointer border-b-2"
              key={friendRequest.id}
            >
              <FriendRequestCard friendRequest={friendRequest} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendRequestList;
