import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Subeler(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={4} xl={4}>
            <label>
              <input type="checkbox" />
              <div class="card">
                <div class="front">
                  <h4> {props.Egitimler} </h4>
                </div>
                <div class="back">
                  <h5>Başlangıç Tarihi : {props.BaslangicTarih} </h5>
                  <h5>Günler: {props.Gunler} </h5>
                  <h5>Saatler : {props.Saatler} </h5>
                  <h5>Toplam Eğitim Saati : {props.ToplamSaat} </h5>
                  <h5>Süre : {props.Sure} </h5>
                  <h5>Kontenjan : {props.Kontenjan} </h5>
                  <h5>Kalan Kontenjan : {props.KalanKontenjan} </h5>
                  <h5>Fiyat : {props.Fiyat} </h5>
                </div>
              </div>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subeler;
