import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import bdd from "../assets/img/bdd.png"
import bin2bin from "../assets/img/BIN2BIN.png"
import coconut from "../assets/img/coconut.jpg"
import ecogite from "../assets/img/ecojite.png"
import epsilog from "../assets/img/epsilog.png"
import golfy from "../assets/img/golfy.png"
import hotelNeptune from "../assets/img/hotelNeptune.png"
import Infoboost from "../assets/img/infobbost.png"
import music from "../assets/img/music.png"
import pandaPython from "../assets/img/pandaPython.png"
import portfolio from "../assets/img/portfolio.png"
import seo from "../assets/img/seo.png"
import sportshop from "../assets/img/sportshop.png"
import travelly from "../assets/img/travelly.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects  = [
    {
      title: "Travelly",
      description: "Design & Development",
      imgUrl: travelly,
    },
    {
      title: "Projet SEO",
      description: "Design & Development",
      imgUrl: seo,
    },
    {
      title: "Projet BDD",
      description: "Design & Development",
      imgUrl: bdd,
    },
    {
      title: "Ecogite",
      description: "Design & Development",
      imgUrl: ecogite,
    },
    {
      title: "bin2bin",
      description: "Design & Development",
      imgUrl: bin2bin,
    },
    {
      title: "Hotel Neptune",
      description: "Design & Development",
      imgUrl: hotelNeptune,
    },
  ];
  const projects2  = [
    {
      title: "Epsilog",
      description: "Design & Development",
      imgUrl: epsilog,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: portfolio,
    },
    {
      title: "Coconut",
      description: "Design & Development",
      imgUrl: coconut,
    },
    {
      title: "SportShop",
      description: "Design & Development",
      imgUrl: sportshop,
    },
    {
      title: "MusicLibrary",
      description: "Design & Development",
      imgUrl: music,
    },
    {
      title: "Panda python",
      description: "Design & Development",
      imgUrl: pandaPython,
    },
  ];
  const projects3  = [
    {
      title: "Golfy",
      description: "Data & Development",
      imgUrl: golfy,
    },
    {
      title: "Infoboost",
      description: "Data & Development",
      imgUrl: Infoboost,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Mes projets</h2>
                <p>NE PAS OUBLIER DE METTRE LE BUTTON GRILLE COMPETENCE ET PROJETS</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BTS 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">BTS 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Stages</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third" id="stage">
                    <Row>
                        {
                          projects3.map((project3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project3}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
