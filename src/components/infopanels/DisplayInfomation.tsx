import React from "react";
import {Col, Row, Table} from "react-bootstrap";

const DisplayInfomation = () => {
  return (
    <Row>
      <Col xs={12} md={{span: 8, offset: 4}} className="px-4">
        <p className="font-color pb-0 ">
          Check your  <span className="fw-bold"> &nbsp;  Demand Management Schedule  &nbsp; </span>  in below.*
        </p>
      </Col>
      <Col xs={12} md={{span: 8, offset: 4}} className="px-4" >
        <hr />
      </Col>
      <Col xs={12} md={{span: 9, offset: 3}} className="px-4">
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
            <th>Date </th>
            <th>From Time</th>
            <th>To Time</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>13/04/2022</td>
            <td>10:00 </td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>13/04/2022</td>
            <td>18:00</td>
            <td>19:00</td>
          </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default DisplayInfomation;