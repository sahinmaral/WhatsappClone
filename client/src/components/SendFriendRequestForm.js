import React, { useRef } from "react";
import WhatsappIcons from "../icons/WhatsappIcons";
import { sendFriendRequest } from "../services/firebase-auth";
import { toast } from "react-toastify";

function SendFriendRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const receiverEmailAddress = emailInputRef.current.value;
    if (receiverEmailAddress.length > 0) {
      emailInputRef.current.value = "";
      sendFriendRequest(receiverEmailAddress)
        .then(() => {
          toast.success(`Friend request sent to ${receiverEmailAddress}`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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

  const emailInputRef = useRef();

  return (
    <div className="flex mt-5 pl-5 py-5">
      <form className="w-full mr-5" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <WhatsappIcons
              type="search"
              width="24"
              height="24"
              style={`text-gray-500 dark:text-gray-400`}
            />
          </div>
          <input
            type="email"
            ref={emailInputRef}
            className="block w-full text-[12px] p-4 pl-10 text-sm h-[20px] text-gray-900 rounded-lg bg-white focus:outline-none"
            placeholder="E-mail address"
          />
        </div>

        <button
          type="submit"
          className="w-full focus:outline-none text-white bg-whatsapp-green-panel hover:bg-green-800 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 mt-4"
        >
          Add friend
        </button>
      </form>
    </div>
  );
}

export default SendFriendRequestForm;
