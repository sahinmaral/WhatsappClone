import { useFormik } from "formik";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import WhatsappIcons from "../icons/WhatsappIcons";
import { useState } from "react";
import { updateUserAbout, updateUsername } from "../services/firebase-auth";
import { toast } from "react-toastify";

function UpdateProfileForm() {
  const { user } = useSelector((state) => state.auth);

  const [formStates, setFormStates] = useState({
    nameStateEnabled: true,
    aboutStateEnabled: false,
  });

  const aboutInputRef = useRef();

  const nameFormik = useFormik({
    initialValues: {
      username: user.username,
    },
    onSubmit: (values) => {
      updateUsername(values.username).catch((error) => {
        toast.error(error, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    },
  });

  const aboutFormik = useFormik({
    initialValues: {
      about: user.about,
    },
    onSubmit: (values) => {
      updateUserAbout(values.about).catch((error) => {
        toast.error(error, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    },
  });

  return (
    <div className="flex flex-col justify-center">
      <div className="mb-5">
        <div className="bg-white dark:bg-whatsapp-green-dark p-5 shadow-whatsapp-shadow dark:shadow-none">
          <label
            htmlFor="email-address"
            className="block mb-2 ml-2 text-[14px] font-normal text-green-900 dark:text-green-700"
          >
            Your email address
          </label>
          <div className="relative">
            <input
              type="text"
              id="email-address"
              disabled={true}
              defaultValue={user.email}
              className={`bg-white dark:bg-whatsapp-green-dark text-green-900 dark:text-white block p-2.5 pr-[30px] border-0 focus:outline-none focus:ring-0 focus:border-whatsapp-green`}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={nameFormik.handleSubmit}
        >
          <div className="bg-white dark:bg-whatsapp-green-dark p-5 shadow-whatsapp-shadow">
            <label
              htmlFor="username"
              className="block mb-2 ml-2 text-[14px] font-normal text-green-900 dark:text-green-700"
            >
              Your name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pl-4 pb-2">
                {!formStates.nameStateEnabled && (
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setFormStates({
                        ...formStates,
                        nameStateEnabled: true,
                      });
                    }}
                  >
                    <WhatsappIcons
                      type="pencil"
                      width="20"
                      height="20"
                      style={`dark:text-white text-black`}
                    />
                  </span>
                )}
                {formStates.nameStateEnabled && (
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setFormStates({
                        ...formStates,
                        nameStateEnabled: false,
                      });

                      nameFormik.handleSubmit();
                    }}
                  >
                    <WhatsappIcons
                      type="check"
                      width="20"
                      height="20"
                      style={`dark:text-white text-black`}
                    />
                  </span>
                )}
              </div>

              <input
                type="text"
                id="username"
                contentEditable
                onChange={nameFormik.handleChange}
                onBlur={nameFormik.handleBlur}
                value={nameFormik.values.username}
                disabled={!formStates.nameStateEnabled}
                className={`${
                  formStates.nameStateEnabled && "border-b-2"
                } w-full bg-white dark:bg-whatsapp-green-dark text-green-900 block p-2.5 pr-[30px] dark:text-white border-0 focus:outline-none focus:ring-0 focus:border-whatsapp-green`}
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={aboutFormik.handleSubmit}
        >
          <div className="bg-white dark:bg-whatsapp-green-dark p-5 shadow-whatsapp-shadow">
            <label
              htmlFor="about"
              className="block mb-2 ml-2 text-[14px] font-normal text-green-900 dark:text-green-700"
            >
              About
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pl-4 pb-2">
                {!formStates.aboutStateEnabled && (
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setFormStates({
                        ...formStates,
                        aboutStateEnabled: true,
                      });
                    }}
                  >
                    <WhatsappIcons type="pencil" width="20" height="20" style={`dark:text-white text-black`} />
                  </span>
                )}
                {formStates.aboutStateEnabled && (
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setFormStates({
                        ...formStates,
                        aboutStateEnabled: false,
                      });

                      aboutFormik.handleSubmit();
                    }}
                  >
                    <WhatsappIcons
                      type="check"
                      width="20"
                      height="20"
                      style={`dark:text-white text-black`}
                    />
                  </span>
                )}
              </div>

              <div
                id="about"
                contentEditable={formStates.aboutStateEnabled}
                ref={aboutInputRef}
                onInput={(event) => {
                  aboutFormik.values.about = event.target.innerHTML;
                }}
                suppressContentEditableWarning={true}
                className={`${
                  formStates.aboutStateEnabled && "border-b-2"
                } bg-white dark:bg-whatsapp-green-dark text-green-900 block p-2.5 pr-[30px] dark:text-white border-0 focus:outline-none focus:ring-0 focus:border-whatsapp-green`}
              >
                {aboutFormik.values.about}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfileForm;
