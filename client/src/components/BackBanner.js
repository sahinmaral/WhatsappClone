import React from "react";

function BackBanner() {
  return (
    <div className="w-full h-full absolute">
      <div className="bg-whatsapp-green h-[120px] "></div>
      <div className="bg-[#E1E1DD] h-[calc(100vh-100%)] min-h-[calc(100vh-120px)] overflow-hidden"></div>
    </div>
  );
}

export default BackBanner;
