import MessageTypePanel from "./MessageTypePanel";
import WelcomeWhatsapp from "./WelcomeWhatsapp";
import ChatDescription from "./ChatDescription";
import MessageList from "./MessageList";

function RightPanel({ clickedChat }) {
  return (
    <div className="right-panel panel">
      {!clickedChat && <WelcomeWhatsapp />}
      {clickedChat && (
        <div className="h-full bg-[#EFEAE2]">
          <ChatDescription />

          <MessageList />

          <MessageTypePanel />
        </div>
      )}
    </div>
  );
}

export default RightPanel;
