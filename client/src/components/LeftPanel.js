import DefaultLeftPanelContent from "./DefaultLeftPanelContent";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";
import { LeftPanelStates } from "../constants/componentStates";
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
          case LeftPanelStates.UPDATE_PROFILE:
            return <UpdateProfile />;
          case LeftPanelStates.SETTINGS:
            return <SettingsLeftPanel />;
          case LeftPanelStates.CHAT_WALLPAPER:
            return <WallpaperChangeLeftPanel />;
          case LeftPanelStates.ADD_FRIEND:
            return <AddFriendLeftPanel />;
            case LeftPanelStates.SHOW_BLOCKED_FRIENDS:
              return <ShowBlockedFriendsLeftPanel />
          default:
            return <DefaultLeftPanelContent />;
        }
      })()}
    </div>
  );
}

export default LeftPanel;
