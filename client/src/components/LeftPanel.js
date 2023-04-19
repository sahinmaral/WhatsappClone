import DefaultLeftPanelContent from "./DefaultLeftPanelContent";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";
import { LeftPanelStates } from "../constants/componentStates";
import SettingsLeftPanel from "../components/SettingsLeftPanel";
import WallpaperChangeLeftPanel from "./WallpaperChangeLeftPanel";

function LeftPanel() {
  const { leftPanelState } = useSelector((state) => state.chat);


  return (
    <div className={`left-panel panel`}>
      {(() => {
        switch (leftPanelState) {
          case LeftPanelStates.UPDATE_PROFILE:
            return <UpdateProfile />;
          case LeftPanelStates.SETTINGS:
            return <SettingsLeftPanel />;
          case LeftPanelStates.CHAT_WALLPAPER:
            return <WallpaperChangeLeftPanel />;
          default:
            return <DefaultLeftPanelContent />;
        }
      })()}
    </div>
  );
}

export default LeftPanel;
