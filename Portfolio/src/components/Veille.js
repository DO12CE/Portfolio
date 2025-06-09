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
                      return (
                        <p>
                          Depuis 2023, l’intelligence artificielle (IA) et la data prennent une place de plus en plus importante dans les entreprises et la société. L’IA générative, comme ChatGPT, s’est fortement développée et commence à être utilisée dans les entreprises pour aider à analyser des documents ou automatiser certaines tâches. Cela transforme aussi le marché du travail : certains métiers évoluent, d’autres disparaissent, surtout ceux qui sont répétitifs ou peu qualifiés. Les entreprises cherchent de plus en plus à avoir leurs propres données ou à utiliser des données synthétiques pour faire fonctionner leurs IA, car les données accessibles deviennent limitées. Mais cette course à l’IA pose aussi des questions éthiques, notamment sur les biais, la vie privée et la réglementation, qui diffère selon les pays. En parallèle, les entreprises essaient d’industrialiser l’IA en la rendant plus fiable et mieux intégrée dans leurs outils. Enfin, la question environnementale devient importante, car l’IA consomme beaucoup d’énergie et demande de grosses infrastructures. En résumé, l’IA continue de progresser, mais elle doit maintenant s’inscrire dans un cadre responsable, durable et utile pour tous.
                        </p>

                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="rowie">
                    {veilles2.map((veille2, index) => {
                      return (
                        <p>
                          Depuis 2023, la cybersécurité est devenue un sujet de plus en plus important, car les cyberattaques se multiplient. On voit notamment une forte hausse des attaques par rançongiciels (ransomware) et des tentatives de piratage utilisant l’intelligence artificielle pour rendre les arnaques plus crédibles et plus difficiles à détecter. Les entreprises doivent donc renforcer leurs défenses, en utilisant elles aussi des outils d’IA pour détecter les menaces plus rapidement. Des architectures comme le "Zero Trust" ou les systèmes de sécurité pour les réseaux à distance (SASE) sont de plus en plus utilisées, surtout avec le développement du cloud. En parallèle, les lois et réglementations, comme NIS2 ou le Cyber Resilience Act en Europe, obligent les entreprises à mieux protéger leurs données et leurs systèmes. Les attaques utilisant des failles inconnues (appelées zero-day) ou le vol de mots de passe sont de plus en plus fréquentes, ce qui pousse les organisations à renforcer la formation des employés, à améliorer la gestion des accès, et à mieux préparer leur réponse en cas de crise. En résumé, la cybersécurité est aujourd’hui un enjeu stratégique pour toutes les entreprises, face à des menaces plus complexes et plus fréquentes.

                        </p>

                      );
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
