import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import bdd from "../assets/img/bdd.png";
import bin2bin from "../assets/img/BIN2BIN.png";
import coconut from "../assets/img/coconut.jpg";
import ecogite from "../assets/img/ecojite.png";
import epsilog from "../assets/img/epsilog.png";
import golfy from "../assets/img/golfy.png";
import grille from "../assets/img/grille.png";
import hotelNeptune from "../assets/img/hotelNeptune.png";
import Infoboost from "../assets/img/infoboost.png";
import music from "../assets/img/music.png";
import pandaPython from "../assets/img/pandaPython.png";
import portfolio from "../assets/img/portfolio.png";
import seo from "../assets/img/seo.png";
import sportshop from "../assets/img/sportshop.png";
import travelly from "../assets/img/travelly.png";
import bddpdf from "../assets/doc/bdd.pdf";
import bin2binpdf from "../assets/doc/bin2bin.pdf";
import coconutpdf from "../assets/doc/coconut.pdf";
import ecogitepdf from "../assets/doc/ecogites.pdf";
import epsilogpdf from "../assets/doc/epsilog.pdf";
import golfypdf from "../assets/doc/golfy.pdf";
import grillepdf from "../assets/doc/grille.pdf";
import hotelNeptunepdf from "../assets/doc/hotelneptune.pdf";
import Infoboostpdf from "../assets/doc/infoboost.pdf";
import musicpdf from "../assets/doc/music.pdf";
import pandaPythonpdf from "../assets/doc/pandapy.pdf";
import portfoliopdf from "../assets/doc/portfolio.pdf";
import seopdf from "../assets/doc/seo.pdf";
import sportshoppdf from "../assets/doc/sportshop.pdf";
import travellypdf from "../assets/doc/travelly.pdf";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectCardNoAttest } from "./ProjectCardNoAttest";

export const Projects = () => {
  const projects = [
    {
      title: "Travelly",
      description: "Design & Development",
      imgUrl: travelly,
      pdfFile: travellypdf,
    },
    {
      title: "Projet SEO",
      description: "Design & Development",
      imgUrl: seo,
      pdfFile: seopdf,
    },
    {
      title: "Projet BDD",
      description: "Design & Development",
      imgUrl: bdd,
      pdfFile: bddpdf,
    },
    {
      title: "Ecogite",
      description: "Design & Development",
      imgUrl: ecogite,
      pdfFile: ecogitepdf,
    },
    {
      title: "bin2bin",
      description: "Design & Development",
      imgUrl: bin2bin,
      pdfFile: bin2binpdf,
    },
    {
      title: "Hotel Neptune",
      description: "Design & Development",
      imgUrl: hotelNeptune,
      pdfFile: hotelNeptunepdf,
    },
  ];
  const projects2 = [
    {
      title: "Epsilog",
      description: "Design & Development",
      imgUrl: epsilog,
      pdfFile: epsilogpdf,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: portfolio,
      pdfFile: portfoliopdf,
    },
    {
      title: "Coconut",
      description: "Design & Development",
      imgUrl: coconut,
      pdfFile: coconutpdf,
    },
    {
      title: "SportShop",
      description: "Design & Development",
      imgUrl: sportshop,
      pdfFile: sportshoppdf,
    },
    {
      title: "MusicLibrary",
      description: "Design & Development",
      imgUrl: music,
      pdfFile: musicpdf,
    },
    {
      title: "Panda python",
      description: "Design & Development",
      imgUrl: pandaPython,
      pdfFile: pandaPythonpdf,
    },
  ];
  const projects3 = [
    {
      title: "Golfy",
      description: "Data & Development",
      imgUrl: golfy,
      pdfFile: golfypdf,
    },
    {
      title: "Infoboost",
      description: "Data & Development",
      imgUrl: Infoboost,
      pdfFile: Infoboostpdf,
    },
  ];
  // const grilles =[
  //   {
  //     title: "Grille de Compétence",
  //     description: "Grille de compétence",
  //     imgUrl: grille,
  //     pdfFile: grillepdf,
  //   },
  // ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Mes projets</h2>
                  <div className="grille">
                  <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src= {grille} />
        <div className="proj-txtx">
          <h4>Grille de compétences</h4>
          <span>"Épreuve E5"</span>
          <div className="mt-3">
          <a
                      href={grillepdf} 
                      target="_blank"
                    >
                      <button >
                       Voir le document
                      </button>
                    </a>
            {/* <Button  onClick={grillepdf} className="button-beau">Voir le document</Button> */}
          </div>
        </div>
      </div>
    </Col>
                    
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCardNoAttest key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project2, index) => {
                            return (
                              <ProjectCardNoAttest key={index} {...project2} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" id="stage">
                        <Row>
                          {projects3.map((project3, index) => {
                            return <ProjectCard key={index} {...project3} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image de fond" />
    </section>
  );
};
