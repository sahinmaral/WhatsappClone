import React from "react";

function BackBanner() {
  return (
    <div className="w-full h-full absolute">
      <div className="bg-whatsapp-green dark:bg-whatsapp-green-dark h-[120px]"></div>
      <div
        className="bg-[#E1E1DD] dark:bg-whatsapp-green-dark
        h-[calc(100vh-100%)] min-h-[calc(100vh-120px)] overflow-hidden"
      ></div>
    </div>
  );
}

export default BackBanner;
