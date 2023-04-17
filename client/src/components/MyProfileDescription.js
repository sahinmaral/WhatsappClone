import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyProfileDescription() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-row">
      <Link to="/">
        <img
          className="profile-photo"
          src="https://pps.whatsapp.net/v/t61.24694-24/328164465_148972904732828_500285319027745444_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTw3igtl-klhImjPUoBj0zOsjFx963YLUD-VWyCCyy8qA&oe=64477340"
        />
      </Link>
    </div>
  );
}

export default MyProfileDescription;
