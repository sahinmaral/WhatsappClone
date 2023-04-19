import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useDispatch } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import {LeftPanelStates} from "../constants/componentStates";
import UpdateProfileForm from "./UpdateProfileForm";

function UpdateProfile() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex pr-[5px] pl-[20px] py-[35.5px] bg-whatsapp-green-panel">
        <div
          onClick={() => dispatch(setLeftPanelState(LeftPanelStates.DEFAULT))}
        >
          <WhatsappIcons
            type="left-arrow"
            style={`mx-2 mt-2  text-white`}
            width="24"
            height="24"
          />
        </div>
        <span className="mt-[5px] font-bold ml-5 text-[19px] text-white">
          Profile
        </span>
      </div>

      <div className="update-profile-panel">
        <div className="flex justify-center py-7">
          <img
            className="profile-photo"
            src="https://pps.whatsapp.net/v/t61.24694-24/328164465_148972904732828_500285319027745444_n.jpg?ccb=11-4&oh=01_AdRURBt8RuChEmMmUUyj1-EdPNo9LjNiXT259qfAnckVPA&oe=644ABF00"
          />
        </div>

        <UpdateProfileForm />
      </div>
    </>
  );
}

export default UpdateProfile;
