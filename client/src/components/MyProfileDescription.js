import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkProfilePhoto } from "../constants";

function MyProfileDescription() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-row">
      <Link to="/profile">
        <img
          className="profile-photo"
          alt="user-thumbnail"
          src={checkProfilePhoto(user.photoURL)}
        />
      </Link>
    </div>
  );
}

export default MyProfileDescription;
