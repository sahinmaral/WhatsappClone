import WhatsappIcons from "../icons/WhatsappIcons";
import MessageTypePanel from "./MessageTypePanel";
import WelcomeWhatsapp from "./WelcomeWhatsapp";
import ChatDescription from "./ChatDescription";
import MessageList from "./MessageList";

function RightPanel({isClicked = true}) {
  return (
    <div className="right-panel panel">
      {!isClicked && <WelcomeWhatsapp />}
      {isClicked && (
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
