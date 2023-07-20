import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Mufredat(props) {
  return (
    <div className="MufredatBaba" id="egitimler">
      <Container>
        <Row>
          <h3>Eğitim Süreci</h3>
          <Col xs={12} md={6}>
            <div className="Mufredat" data-aos="fade-up">
              <h5> {props.MufredatBaslik1} </h5>
              <p>{props.MufredatIcerik1}</p>
              <p><b> {props.FrontendLanguage} </b></p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="Mufredat" data-aos="fade-down">
              <h5>{props.MufredatBaslik2}</h5>
              <p>{props.MufredatIcerik2}</p>
              <p><b> {props.BackendLanguage} </b></p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="Mufredat" data-aos="fade-right">
              <h5>{props.MufredatBaslik3}</h5>
              <p>{props.MufredatIcerik3}</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="Mufredat" data-aos="fade-left">
              <h5>{props.MufredatBaslik4}</h5>
              <p>{props.MufredatIcerik4}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mufredat;
