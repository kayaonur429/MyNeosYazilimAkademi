import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Hakkimizda(props) {
  return (
    <div className="Hakkimizda" id="hakkimizda">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h3> {props.Title} </h3>
            <p> {props.Info} </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hakkimizda;
