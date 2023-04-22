import DefaultLeftPanelContent from "./DefaultLeftPanelContent";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";
import { LEFT_PANEL_STATES } from "../constants";
import SettingsLeftPanel from "../components/SettingsLeftPanel";
import WallpaperChangeLeftPanel from "./WallpaperChangeLeftPanel";
import AddFriendLeftPanel from "./AddFriendLeftPanel";
import ShowBlockedFriendsLeftPanel from "./ShowBlockedFriendsLeftPanel";

function LeftPanel() {
  const { leftPanelState } = useSelector((state) => state.chat);

  return (
    <div className={`left-panel panel`}>
      {(() => {
        switch (leftPanelState) {
          case LEFT_PANEL_STATES.UPDATE_PROFILE:
            return <UpdateProfile />;
          case LEFT_PANEL_STATES.SETTINGS:
            return <SettingsLeftPanel />;
          case LEFT_PANEL_STATES.CHAT_WALLPAPER:
            return <WallpaperChangeLeftPanel />;
          case LEFT_PANEL_STATES.ADD_FRIEND:
            return <AddFriendLeftPanel />;
            case LEFT_PANEL_STATES.SHOW_BLOCKED_FRIENDS:
              return <ShowBlockedFriendsLeftPanel />
          default:
            return <DefaultLeftPanelContent />;
        }
      })()}
    </div>
  );
}

export default LeftPanel;
