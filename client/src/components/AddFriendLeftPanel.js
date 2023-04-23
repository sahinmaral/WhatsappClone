import React from "react";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import { LEFT_PANEL_STATES } from "../constants";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useDispatch } from "react-redux";
import FriendRequestList from "./FriendRequestList";
import SendFriendRequestForm from "./SendFriendRequestForm";

function AddFriendLeftPanel() {
  const dispatch = useDispatch();

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
          Add Friend
        </span>
      </div>

      <SendFriendRequestForm />

      <FriendRequestList />
    </div>
  );
}

export default AddFriendLeftPanel;
