import React from "react";
import HeaderUx from "./components/header/HeaderUX";
import FooterUX from "./components/footer/FooterUX";

const LecoApp: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderUx />
      <FooterUX />
    </React.Fragment>

  );
}

export default LecoApp;