import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import WhatsappIcons from "../icons/WhatsappIcons";
import { WALLPAPER_COLORS, LEFT_PANEL_STATES } from "../constants";
import { updateUserSavedWallpaperColorID } from "../services/firebase-auth";
import { toast } from "react-toastify";

function WallpaperChangeLeftPanel() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChangeWallpaper = (colorID) => {
    updateUserSavedWallpaperColorID(colorID).catch((error) => {
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

  const colorPalette = useMemo(() => {
    return WALLPAPER_COLORS.map((color) => {
      if (user.savedTheme === "light") {
        return { id: color.id, color: color.light };
      } else {
        return { id: color.id, color: color.dark };
      }
    });
  }, [user.savedTheme]);

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
        {colorPalette.map((color) => {
          return (
            <div
              className={`w-[82px] h-[82px] cursor-pointer ${
                user.savedWallpaperColorID === color.id
                  ? "border-4 border-blue-400"
                  : "border-0"
              }`}
              key={color.id}
              onClick={() => {
                handleChangeWallpaper(color.id);
              }}
              style={{ backgroundColor: `${color.color}` }}
            >
              {color.id === "ca44d235-6c72-477b-b4b9-924fd8b98bd6" && (
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
