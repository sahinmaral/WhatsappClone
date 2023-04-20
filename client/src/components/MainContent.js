import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import CustomModal from "../components/CustomModal";
import { useSelector } from "react-redux";
import { ModalStates } from "../constants/componentStates";
import ThemeModalContent from "./ThemeModalContent";

function MainContent() {
  const { modalState,clickedChat } = useSelector((state) => state.chat);


  return (
    <>
      <div
        className={`main-content ${
          modalState.id !== ModalStates.NONE && "blur-sm"
        }`}
      >
        <LeftPanel />
        <RightPanel clickedChat={clickedChat} />
      </div>
      {modalState.id !== ModalStates.NONE && (
        <CustomModal>
          {(() => {
            switch (modalState.id) {
              case ModalStates.THEME_MODAL:
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
