import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link,useLocation } from "react-router-dom";


function NeosNavbar() {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="#home"><img className="NeosLogo" src="https://www.neosyazilim.com/static/img/neosLogo2.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
            <Link to="/#hakkimizda" className="nav-link">
              Hakkımızda
            </Link>
            <Link to="/#egitimler" className="nav-link">
              Eğitimler
            </Link>
            <Link to="/#sertifikalar" className="nav-link">
              Sertifikalar
            </Link>
            <Link to="/#iletisim" className="nav-link">
              İletişim
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NeosNavbar;
