import React from "react";
import {Col, Row} from "react-bootstrap";

const FooterUX: React.FC = () => {
    return (
      <Row className="footer-color">
        <Col xs={12} className="text-center font-color">
          <h3>Lanka Electricity Company (Pvt) Ltd</h3>
        </Col>
        <Col xs={12} className="text-center font-color-bottom">
          <h6> No. 411, Galle Road, Colombo 03, Sri Lanka. +094 011 2371 600</h6>
        </Col>
      </Row>
    )
}

export default FooterUX