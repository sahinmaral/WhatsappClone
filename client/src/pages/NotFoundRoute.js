import React from "react";
import { Link } from "react-router-dom";

function NotFoundRoute({ theme }) {
  console.log(theme);
  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="h-screen flex flex-col text-center pt-[200px] dark:bg-whatsapp-green-dark-2">
        <h1 className="font-normal text-[200px] dark:text-whatsapp-green tracking-wider">
          404
        </h1>
        <p className="font-light text-[75px] mb-5 tracking-wider text-gray-500 dark:text-white">
          Page Not Found
        </p>
        <Link to="/auth/login">
          <span className="font-light text-[20px] pb-5 tracking-wider text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-gray-400">
            Redirect to login
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundRoute;
