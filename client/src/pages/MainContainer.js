import React from "react";
import BackBanner from "../components/BackBanner";
import MainContent from "../components/MainContent";
import { useSelector } from "react-redux";
import WhatsappIcons from "../icons/WhatsappIcons";
import { selectUser } from "../redux/reducers/authSlice";

function MainContainer() {
  const { isLoading } = useSelector((state) => state.chat);
  const user = useSelector(selectUser);

  return (
    <div className={`w-full h-full`}>
      {isLoading && <WhatsappIcons type="loading" width="65" height="65" />}
      {!isLoading && (
        <div className={`${user.savedTheme === "dark" && "dark"}`}>
          <BackBanner />
          <MainContent />
        </div>
      )}
    </div>
  );
}

export default MainContainer;
