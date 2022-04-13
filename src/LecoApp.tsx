import React from "react";
import HeaderUx from "./components/header/HeaderUX";
import FooterUX from "./components/footer/FooterUX";
import LeftPanel from "./components/infopanels/LeftPanel";
import {Col, Row} from "react-bootstrap";
import RightPanel from "./components/infopanels/RightPanel";

const LecoApp: React.FC = () => {
  return (
    <Row>
      <Col xs={12}>
        <HeaderUx />
      </Col>
      <Col md={6} xs={12}>
        <LeftPanel />
      </Col>
      <Col md={6} xs={12}>
        <RightPanel />
      </Col>
      <Col xs={12}>
        <FooterUX />
      </Col>
    </Row>

  );
}

export default LecoApp;