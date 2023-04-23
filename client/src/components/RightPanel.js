import MessageTypePanel from "./MessageTypePanel";
import WelcomeWhatsapp from "./WelcomeWhatsapp";
import ChatDescription from "./ChatDescription";
import MessageList from "./MessageList";
import { useSelector } from "react-redux";
import { WALLPAPER_COLORS } from "../constants";
import { useMemo } from "react";
import { selectUser } from "../redux/reducers/authSlice";

function RightPanel({ clickedChat }) {
  const user = useSelector(selectUser);

  const wallpaperColor = useMemo(() => {
    if (user.savedTheme === "light") {
      return WALLPAPER_COLORS.find(
        (color) => color.id === user.savedWallpaperColorID
      ).light;
    } else {
      return WALLPAPER_COLORS.find(
        (color) => color.id === user.savedWallpaperColorID
      ).dark;
    }
  }, [user.savedTheme,user.savedWallpaperColorID]);

  return (
    <div className="right-panel panel dark:bg-whatsapp-green-dark-2">
      {!clickedChat && <WelcomeWhatsapp />}
      {clickedChat && (
        <div
          className="h-full"
          style={{ backgroundColor: `${wallpaperColor}` }}
        >
          <ChatDescription />

          <MessageList />

          <MessageTypePanel clickedChat={clickedChat} />
        </div>
      )}
    </div>
  );
}

export default RightPanel;
