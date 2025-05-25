import Carousel from "react-bootstrap/Carousel";
import v1 from "../assets/img/Veille diapo/veille1.png";
import v2 from "../assets/img/Veille diapo/veille2.png";
import v3 from "../assets/img/Veille diapo/veille3.png";
import v4 from "../assets/img/Veille diapo/veille4.png";
import v5 from "../assets/img/Veille diapo/veille5.png";
import v6 from "../assets/img/Veille diapo/veille6.png";
import v7 from "../assets/img/Veille diapo/veille7.png";

import Cardveille1 from "../assets/img/Cardveille1.png";
import Cardveille2 from "../assets/img/Cardveille2.png";
import { Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Cardveille1pdf from "../assets/doc/Cardveille1.pdf";
import Cardveille2pdf from "../assets/doc/Cardveille2.pdf";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCardNoAttest } from "./ProjectCardNoAttest";

export const Veille = () => {
  const veilles1 = [
      {
        title: "DATA IA",
        description: "veille 1",
        imgUrl: Cardveille1,
        pdfFile: Cardveille1pdf,
      },
    ];
    const veilles2 = [
      {
        title: "Cybersécurité",
        description: "Veille 2",
        imgUrl: Cardveille2,
        pdfFile: Cardveille2pdf,
      },
    ];
  return (
    <div className="project" id="veille">
      <h2>Qu'est ce qu'une veille?</h2>
      <Carousel className="carousel" >
        <Carousel.Item>
          <img className="img-carousel" src={v1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-carousel" src={v2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-carousel" src={v3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-carousel" src={v4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-carousel" src={v5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-carousel" src={v6} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-carousel" src={v7} alt="First slide" />
        </Carousel.Item>
      </Carousel>
      <h2>Mes veilles</h2>
       <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    
      
                    
      
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Veille DATA/IA</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Veille Cybersécurité</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible ? "animate__animated animate__slideInUp" : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row className="rowie">
                            {veilles1.map((veille1, index) => {
                              return <ProjectCardNoAttest key={index} {...veille1} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row className="rowie">
                            {veilles2.map((veille2, index) => {
                              return <ProjectCardNoAttest key={index} {...veille2} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
    </div>
  );
};
