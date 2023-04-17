import React from "react";

function Loading({ width, height }) {
  return (
    <div className="flex justify-center mt-[400px]">
      <svg className="spinner-container" viewBox="0 0 44 44" style={{width,height}}>
        <circle
          className="path"
          cx="22"
          cy="22"
          r="20"
          fill="none"
          strokeWidth="4"
        ></circle>
      </svg>
    </div>
  );
}

export default Loading;
