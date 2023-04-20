import React from "react";
import PropTypes from "prop-types";

function MessageCard({ message, createdAt,fromWho }) {
  const createdAtConverted = new Date(Date.parse(createdAt));
  let createdAtFormatted = "";
  if (createdAtConverted.getHours() > 12) {
    createdAtFormatted = `${
      createdAtConverted.getHours() - 12
    }:${createdAtConverted.getMinutes()} PM`;
  } else {
    createdAtFormatted = `${createdAtConverted.getHours()}:${createdAtConverted.getMinutes()} AM`;
  }

  return (
    <div className={`message-card ${fromWho}`}>
      <span className="text-[12.5px] block text-gray-600">{message}</span>
      <span className="text-[11px] block float-right text-gray-600">
        {createdAtFormatted}
      </span>
    </div>
  );
}

MessageCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageCard;
