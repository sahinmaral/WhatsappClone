import MessageTypePanel from "./MessageTypePanel";
import WelcomeWhatsapp from "./WelcomeWhatsapp";
import ChatDescription from "./ChatDescription";
import MessageList from "./MessageList";
import { useSelector } from "react-redux";

function RightPanel({ clickedChat }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="right-panel panel">
      {!clickedChat && <WelcomeWhatsapp />}
      {clickedChat && (
        <div className="h-full" style={{ backgroundColor: `${user.savedWallpaperColor}` }}>
          <ChatDescription />

          <MessageList />

          <MessageTypePanel clickedChat={clickedChat} />
        </div>
      )}
    </div>
  );
}

export default RightPanel;
