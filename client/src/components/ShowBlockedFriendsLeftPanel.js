import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { LEFT_PANEL_STATES } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import BlockedFriendCard from "./BlockedFriendCard";

function ShowBlockedFriendsLeftPanel() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-whatsapp-green-dark h-full">
      <div className="flex pr-[5px] pl-[20px] py-[35.5px] bg-whatsapp-green-panel dark:bg-whatsapp-green-dark-2">
        <div
          onClick={() => dispatch(setLeftPanelState(LEFT_PANEL_STATES.DEFAULT))}
        >
          <WhatsappIcons
            type="left-arrow"
            style={`mx-2 mt-2  text-white`}
            width="24"
            height="24"
          />
        </div>
        <span className="mt-[5px] font-bold ml-5 text-[19px] text-white">
          Blocked Friends
        </span>
      </div>

      <ul className="blocked-friends mt-5">
        {user.blockedFriends.map((blockedFriend) => {
          return (
            <li
              className="pt-5 pb-3 pl-[20px] hover:bg-gray-200 hover:cursor-pointer border-b-2"
              key={blockedFriend.email}
            >
              <BlockedFriendCard blockedFriend={blockedFriend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowBlockedFriendsLeftPanel;
