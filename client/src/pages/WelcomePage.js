import React from "react";
import { Link } from "react-router-dom";

function WelcomePage({theme}) {
  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="h-screen flex flex-col text-center pt-[200px] dark:bg-whatsapp-green-dark-2">
        <h1 className="font-normal text-[100px] dark:text-whatsapp-green tracking-wider mb-12">
          Welcome to <br/> Whatsapp
        </h1>
        <Link to="/auth/login">
          <span className="font-light text-[20px] tracking-wider text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-gray-400">
            Redirect to login
          </span>
        </Link>
        <Link to="/auth/register">
          <span className="font-light text-[20px] tracking-wider text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-gray-400">
            Redirect to register
          </span>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
