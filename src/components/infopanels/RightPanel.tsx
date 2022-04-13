import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import Image1 from '../../images/image1.jpg';
import Image2 from '../../images/image2.jpg';
const RightPanel = () => {
  return (
    <Container className="container-fluid mt-5 right-panel"  >
      <Row>
        <Col xs={12} className="mt-4" >
          <Image src={Image1} className="image" alt="Leco image 1 display sms and alert notification" />
        </Col>
        <Col xs={12} >
          <Image src={Image2} className="image mt-3" alt="Leco image 2 display android and ios" />
        </Col>
      </Row>
    </Container>
  )
}

export default RightPanel;