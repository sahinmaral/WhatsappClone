import React from "react";
import PropTypes from "prop-types";

function MessageCard({ message,index }) {
  return (
    <div className={`message-card ${index%2 === 0 ? "fromMe" : "fromOther"}`}>
      <span className="text-[12.5px] block text-gray-600">{message}</span>
      <span className="text-[11px] block float-right text-gray-600">11.24 AM</span>
    </div>
  );
}

MessageCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageCard;
