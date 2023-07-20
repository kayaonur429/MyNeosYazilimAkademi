import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Youtube from "../Img/youtube.png";
import Facebook from "../Img/facebook.png";
import Linkedin from "../Img/linkedin.png";
import Instagram from "../Img/instagram.png";
import Whatsapp from "../Img/whatsapp.png";

function Myfooter() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="col-12 col-md-4">
            <ul className="footerSiteMap">
              <h5>Site Haritası</h5>
              <li>
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/urunler">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/blog">Eğitimler</Link>
              </li>
              <li>
                <Link to="/">Sertifikalar</Link>
              </li>
              <li>
                <Link to="/">İletişim</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-4">
            <ul className="footerSiteMap">
              <li>
                <Link to="/">Sertifika Sorgula</Link>
              </li>
              <li>
                <Link to="/urunler">KVKK Sözleşmesi</Link>
              </li>
              <li>
                <Link to="/blog">Gizlilik ve Güvenlik Politikası</Link>
              </li>
              <li>
                <Link to="/">Mesafeli Satış Sözleşmesi</Link>
              </li>
              <li>
                <Link to="/">İletişim</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-4">
            <h5>Sosyal Medya Hesaplarımız</h5>
            <ul className="footerSiteMap">
              <li>
                <img src={Whatsapp} alt="" /> <Link>+905013205358</Link>
              </li>
              <li>
                <img src={Facebook} alt="" /> <Link>Neos Yazılım</Link>
              </li>
              <li>
                <img src={Linkedin} alt="" /> <Link>Neos Yazılım Akademi</Link>
              </li>
              <li>
                <img src={Youtube} alt="" /> <Link>Neos Yazılım</Link>
              </li>
              <li>
                <img src={Instagram} alt="" /> <Link>neos_yazilim</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Myfooter;
