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
          <WhatsappIcons
            type="three-dot"
            style={`mx-2 mt-2 text-fill-whatsapp-gray-icon  dark:text-[#AEBAC1]`}
          />
        </span>
        <ul
          className={`bg-white dark:bg-whatsapp-green-dark-2 whatsapp-shadow w-[150px] absolute ml-[-120px] mt-2 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <span
              className="cursor-pointer rounded-t text-black dark:text-white bg-white dark:bg-whatsapp-green-dark-2 hover:bg-gray-200 hover:dark:bg-whatsapp-green-dark py-4 pl-5 block whitespace-no-wrap"
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
              className="rounded-t cursor-pointer text-black dark:text-white bg-white dark:bg-whatsapp-green-dark-2 hover:bg-gray-200 hover:dark:bg-whatsapp-green-dark py-4 pl-5 block whitespace-no-wrap"
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
