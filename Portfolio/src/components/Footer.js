import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import gregre from "../assets/img/gregre.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={gregre} alt="gregre" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yousra-zaabat/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p className="text-coeur">Portfolio 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
