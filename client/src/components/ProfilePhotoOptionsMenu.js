import React, { useRef, useState } from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import {
  removeProfilePhoto,
  updateProfilePhoto,
} from "../services/firebase-auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function ProfilePhotoOptionsMenu() {
  const [isOpen, setOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const profilePhotoInputRef = useRef();

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const handleUpload = (event) => {
    if (event.target.files[0]) {
      updateProfilePhoto(event.target.files[0])
        .then(() => {
          setOpen(false);
        })
        .catch((err) => {
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
    }
  };

  const handleRemove = () => {
    removeProfilePhoto()
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
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
      <div className="inline-block relative">
        <span onClick={handleDropDown}>
          <WhatsappIcons type="three-dot" style={`mx-2 mt-2 text-[#54656F]`} />
        </span>
        <ul
          className={`bg-white whatsapp-shadow w-[150px] absolute ml-[-120px] mt-2 pt-1 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <span
              className="cursor-pointer rounded-t bg-white hover:bg-gray-200 py-4 pl-5 block whitespace-no-wrap"
              onClick={() => {
                profilePhotoInputRef.current.click();
              }}
            >
              Upload Photo
            </span>
            <input
              type="file"
              id="profile-photo-input"
              onChange={handleUpload}
              ref={profilePhotoInputRef}
              className="hidden"
            />
          </li>
          <li className={`${user.photoURL ? "block" : "hidden"}`}>
            <span
              className="rounded-t cursor-pointer bg-white hover:bg-gray-200 py-4 pl-5 block whitespace-no-wrap"
              onClick={handleRemove}
            >
              Remove Photo
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfilePhotoOptionsMenu;
