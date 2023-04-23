import React from "react";
import WhatsappBanner from "../../images/whatsapp-banner.png";
import { useFormik } from "formik";
import { LoginSchema } from "../../schema";
import { loginWithEmail } from "../../services/firebase-auth";
import { toast } from "react-toastify";
import { returnLocalizatedError } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authSlice";

function Login({ theme }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      loginWithEmail(values.email, values.password)
        .then((user) => {
          dispatch(
            login({
              username: user.displayName,
              email: user.email,
            })
          );
          toast.success(`Succesfully logged in : ${user.displayName}`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/profile");
          }, 5000);
        })
        .catch((error) => {
          toast.error(returnLocalizatedError(error), {
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
    },
  });

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <section className="bg-gray-50 dark:bg-whatsapp-green-dark-2 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <img
            className="w-[fit-content] h-8 mr-2 mb-5"
            src={WhatsappBanner}
            alt="logo"
          />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-green-900 md:text-2xl dark:text-white">
                Login with account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-green-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="bg-gray-50 border border-gray-300 text-green-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email@address.com"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p className="mt-2 ml-3 text-[13px] text-red-600 dark:text-red-400">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-green-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-green-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <p className="mt-2 ml-3 text-[13px] text-red-600 dark:text-red-400">
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-whatsapp-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login with account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have any account?{" "}
                  <Link to="/auth/register">
                    <span className="font-medium text-green-700 hover:underline dark:text-primary-500">
                      Register here
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
