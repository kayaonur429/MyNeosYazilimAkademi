import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

function Iletisim(props) {
  return (
    <div className="Iletisim" id="iletisim">
      <Container>
        <h3> Bize Ulaşın </h3>
        <Row>
          <Col xs={12} md={6} id="Numara">
            <p>{props.IletisimInfo}</p>
            <p>
              <FaPhoneAlt /> {props.CepTelefon}{" "}
            </p>
            <p>
              <FaPhoneAlt /> {props.EvTelefon}{" "}
            </p>
            <p>
              <MdOutlineMail /> {props.Mail}{" "}
            </p>
            <p>
              {" "}
              <FaLocationPin /> {props.AnkaraSube}
            </p>
            <p>
              {" "}
              <FaLocationPin /> {props.IzmirSube}
            </p>
            <p>
              {" "}
              <FaLocationPin /> {props.BursaSube}
            </p>
          </Col>
          <Col xs={12} md={6}>
            <iframe
              title="NeosAdres"
              className="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.0865672410528!2d28.872312076479915!3d40.97958522119039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabd361d9f2bcd%3A0x109cda61c48e4b76!2sNeos%20Yaz%C4%B1l%C4%B1m%20Akademi!5e0!3m2!1str!2str!4v1689619357225!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Iletisim;
