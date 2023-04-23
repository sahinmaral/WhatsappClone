import React from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useDispatch, useSelector } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import { checkProfilePhoto, LEFT_PANEL_STATES } from "../constants";
import UpdateProfileForm from "./UpdateProfileForm";
import ProfilePhotoOptionsMenu from "./ProfilePhotoOptionsMenu";

function UpdateProfile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  return (
    <div className="dark:bg-whatsapp-green-dark bg-[#F0F2F5] h-full">
      <div className="flex pr-[5px] pl-[20px] py-[23.5px] bg-whatsapp-green-panel dark:bg-whatsapp-green-dark-2">
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
          Profile
        </span>
      </div>

      <div className="update-profile-panel">
        <div className="flex justify-center py-7">
          <img
            className="profile-photo"
            alt="update-profile-thumbnail"
            src={checkProfilePhoto(user.photoURL)}
          />

          <ProfilePhotoOptionsMenu />
        </div>

        <UpdateProfileForm />
      </div>
    </div>
  );
}

export default UpdateProfile;
