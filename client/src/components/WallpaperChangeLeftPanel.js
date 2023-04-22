import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import WhatsappIcons from "../icons/WhatsappIcons";
import {WALLPAPER_COLORS,LEFT_PANEL_STATES} from "../constants";
import { updateUserSavedWallpaperColor } from "../services/firebase-auth";
import { toast } from "react-toastify";

function WallpaperChangeLeftPanel() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChangeWallpaper = (color) => {
    updateUserSavedWallpaperColor(color).catch((error) => {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <>
      <div className="flex pr-[5px] pl-[20px] py-[35.5px] bg-whatsapp-green-panel">
        <div
          onClick={() => dispatch(setLeftPanelState(LEFT_PANEL_STATES.DEFAULT))}
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
        {WALLPAPER_COLORS.map((color) => {
          return (
            <div
              className={`w-[82px] h-[82px] cursor-pointer ${
                user.savedWallpaperColor === color ? "border-4 border-blue-400" : "border-0"
              }`}
              key={color}
              onClick={() => {
                handleChangeWallpaper(color);
              }}
              style={{ backgroundColor: `${color}` }}
            >
              {color === "#EFEAE2" && (
                <p className="text-[11px] text-[#3B4A54] text-center mt-[30px]">
                  Default
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WallpaperChangeLeftPanel;
