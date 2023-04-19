import React from "react";
import BackBanner from "../components/BackBanner";
import MainContent from "../components/MainContent";
import { useEffect } from "react";
import { checkUser } from "../services/firebase";
import { useSelector } from "react-redux";
import WhatsappIcons from "../icons/WhatsappIcons";

function MainContainer() {
  useEffect(() => {
    checkUser();
  }, []);

  const { isLoading } = useSelector((state) => state.chat);

  return (
    <div className="w-full h-full">
      {isLoading && <WhatsappIcons type="loading" width="65" height="65" />}
      {!isLoading  && (
        <>
          <BackBanner />
          <MainContent />
        </>
      )}
    </div>
  );
}

export default MainContainer;
