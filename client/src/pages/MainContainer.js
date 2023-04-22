import React from "react";
import BackBanner from "../components/BackBanner";
import MainContent from "../components/MainContent";
import { useSelector } from "react-redux";
import WhatsappIcons from "../icons/WhatsappIcons";

function MainContainer() {

  const { isLoading } = useSelector((state) => state.chat);

  return (
    <div className="w-full h-full">
      {isLoading && <WhatsappIcons type="loading" width="65" height="65" />}
      {!isLoading && (
        <>
          <BackBanner />
          <MainContent />
        </>
      )}
    </div>
  );
}

export default MainContainer;
