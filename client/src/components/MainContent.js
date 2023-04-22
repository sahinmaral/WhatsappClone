import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CustomModal from "../components/CustomModal";
import { useSelector } from "react-redux";
import { MODAL_STATES } from "../constants";
import ThemeModalContent from "./ThemeModalContent";

function MainContent() {
  const { modalState,clickedChat } = useSelector((state) => state.chat);


  return (
    <>
      <div
        className={`main-content ${
          modalState.id !== MODAL_STATES.NONE && "blur-sm"
        }`}
      >
        <LeftPanel />
        <RightPanel clickedChat={clickedChat} />
      </div>
      {modalState.id !== MODAL_STATES.NONE && (
        <CustomModal>
          {(() => {
            switch (modalState.id) {
              case MODAL_STATES.THEME_MODAL:
                return <ThemeModalContent />;
              default:
                break;
            }
          })()}
        </CustomModal>
      )}
    </>
  );
}

export default MainContent;
