import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const InfoRequestUX = () => {
  return (
    <Row>
      <Col xs={12} md={{span: 9, offset: 3}} className="mt-5 px-5">
        <h3 className="text-color d-flex text-center">Please enter your LECO Account No</h3>
      </Col>
      <Col xs={12} md={{span: 6, offset: 5}} className="px-4">
        <Row>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="fromAccountNo">
                <Form.Control type="text" placeholder="Account No" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={{span: 2 ,offset: 1}} className="text-center">
          <Button className="btn-find-color" type="submit">
            Find
          </Button>
        </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default InfoRequestUX;