import React from "react";
import {Col, Row} from "react-bootstrap";
import InfoRequestUX from "./InfoRequestUX";
import DisplayInfomation from "./DisplayInfomation";

const LeftPanel: React.FC = () => {
  return (
    <Row>
      <Col xs={12} >
        <InfoRequestUX />
      </Col>
      <Col xs={12} >
        <DisplayInfomation />
      </Col>
    </Row>
  )
}

export default LeftPanel