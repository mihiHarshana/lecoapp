import React from "react";
import {Col, Row} from "react-bootstrap";
import InfoRequestUX from "./InfoRequestUX";

const LeftPanel = () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <InfoRequestUX />
      </Col>
    </Row>
  )
}

export default LeftPanel