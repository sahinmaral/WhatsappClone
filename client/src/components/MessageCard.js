import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/authSlice";

function MessageCard({ message, createdAt, fromWho }) {
  const createdAtConverted = new Date(Date.parse(createdAt));

  let createdAtFormatted = "";

  const formatMinuteOfTime = (minute) => {
    if (minute >= 10) {
      return minute.toString();
    } else {
      return `0${minute}`;
    }
  };

  if (createdAtConverted.getHours() > 12) {
    createdAtFormatted = `${
      createdAtConverted.getHours() - 12
    }:${formatMinuteOfTime(createdAtConverted.getMinutes())} PM`;
  } else {
    createdAtFormatted = `${createdAtConverted.getHours()}:${formatMinuteOfTime(
      createdAtConverted.getMinutes()
    )} AM`;
  }

  const { savedTheme } = useSelector(selectUser);

  return (
    <div className={`message-card ${fromWho} ${savedTheme}`}>
      <span
        className={`text-[12.5px] block ${
          savedTheme === "light" ? "text-gray-600" : "text-[#E9EDEF]"
        }`}
      >
        {message}
      </span>
      <span
        className={`text-[11px] block float-right ${
          savedTheme === "light" ? "text-gray-600" : "text-[#FFFFFF99]"
        }`}
      >
        {createdAtFormatted}
      </span>
    </div>
  );
}

MessageCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageCard;
