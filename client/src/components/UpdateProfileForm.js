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
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full dark:bg-gray-800 dark:border-gray-700">
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={nameFormik.handleSubmit}
          >
            <div className="bg-white p-5">
              <label
                htmlFor="username"
                className="block mb-2 ml-2 text-[14px] font-normal text-green-900 dark:text-white"
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
                      <WhatsappIcons type="pencil" width="20" height="20" />
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
                      <WhatsappIcons type="check" width="20" height="20" />
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
                  } bg-white text-green-900 block w-full p-2.5 pr-[30px] dark:text-white border-0 focus:outline-none focus:ring-0 focus:border-whatsapp-green`}
                />
              </div>
            </div>
          </form>
          <p className="text-[14px] text-[#667781] px-7 leading-6 py-5 text-left">
            This is your username. This name will be visible to your WhatsApp
            contacts.
          </p>
        </div>
        <div className="w-full dark:bg-gray-800 dark:border-gray-700">
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={aboutFormik.handleSubmit}
          >
            <div className="bg-white p-5">
              <label
                htmlFor="about"
                className="block mb-2 ml-2 text-[14px] font-normal text-green-900 dark:text-white"
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
                      <WhatsappIcons type="pencil" width="20" height="20" />
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
                      <WhatsappIcons type="check" width="20" height="20" />
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
                  } bg-white text-green-900 block w-[450px] p-2.5 pr-[30px] dark:text-white border-0 focus:outline-none focus:ring-0 focus:border-whatsapp-green`}
                >
                  {aboutFormik.values.about}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UpdateProfileForm;
