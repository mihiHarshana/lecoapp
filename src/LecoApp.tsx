import React from "react";
import HeaderUx from "./components/header/HeaderUX";
import FooterUX from "./components/footer/FooterUX";
import LeftPanel from "./components/infopanels/LeftPanel";

const LecoApp: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderUx />
      <LeftPanel />
      <FooterUX />
    </React.Fragment>

  );
}

export default LecoApp;