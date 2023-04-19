import React from "react";
import { useDispatch } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import { LeftPanelStates } from "../constants/componentStates";
import WhatsappIcons from "../icons/WhatsappIcons";

function WallpaperChangeLeftPanel() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex pr-[5px] pl-[20px] py-[35.5px] bg-whatsapp-green-panel">
        <div
          onClick={() => dispatch(setLeftPanelState(LeftPanelStates.DEFAULT))}
        >
          <WhatsappIcons
            type="left-arrow"
            style={`mx-2 mt-2  text-white`}
            width="24"
            height="24"
          />
        </div>
        <span className="mt-[5px] font-bold ml-5 text-[19px] text-white">
          Set Chat Wallpaper
        </span>
      </div>
      <div className="grid md:gap-x-1 gap-3 md:grid-cols-3 grid-cols-2 pl-5 pt-5">
        <div className="w-[82px] h-[82px] bg-[#EFEAE2]"></div>
        <div className="w-[82px] h-[82px] bg-blue-200"></div>
        <div className="w-[82px] h-[82px] bg-green-600"></div>
        <div className="w-[82px] h-[82px] bg-black"></div>
        <div className="w-[82px] h-[82px] bg-yellow-100"></div>
        <div className="w-[82px] h-[82px] bg-orange-600"></div>
        <div className="w-[82px] h-[82px] bg-red-500"></div>
        <div className="w-[82px] h-[82px] bg-purple-300"></div>
        <div className="w-[82px] h-[82px] bg-gray-300"></div>
      </div>
    </>
  );
}

export default WallpaperChangeLeftPanel;
