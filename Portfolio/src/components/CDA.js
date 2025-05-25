import music from "../assets/img/music.png";
import sportshop from "../assets/img/sportshop.png";
import { Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import sportshoppdf from "../assets/doc/sportshop.pdf";
import attestSportShop from "../assets/doc/sportshop.pdf";
import musicpdf from "../assets/doc/music.pdf";
import attestMusic from "../assets/doc/music.pdf";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const CDA = () => {
  const situations1 = [
    {
      title: "MusicLibrary",
      description: "Design & Development",
      imgUrl: music,
      pdfFile: musicpdf,
      attest: attestMusic,
    },
  ];
  const situations2 = [
    {
      title: "SportShop",
      description: "Design & Development",
      imgUrl: sportshop,
      pdfFile: sportshoppdf,
      attest: attestSportShop,
    },
  ];
  return (
    <section className="cda-container" id="cda">
      <div className="main-container">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="section">
                <h1>
                  Conception et développement
                  d'applications - (E6)
                </h1>
                <h2>1 – OBJECTIF</h2>
                <p>
                  Cette épreuve vise à évaluer les compétences acquises par le
                  candidat dans le domaine de la conception et du développement
                  d'applications, correspondant à l'option B "Solutions
                  Logicielles et Applications Métiers" (SLAM) du BTS Services
                  Informatiques aux Organisations.
                </p>
                <p>L'épreuve permet d'évaluer la capacité du candidat à :</p>
                <ul>
                  <li>Concevoir et développer une solution applicative</li> 
                  <li>
                    Utiliser différents langages de programmation et frameworks
                  </li>
                  <li>
                    Assurer la maintenance corrective et évolutive d'une solution
                    applicative
                  </li>
                  <li>
                    Gérer des bases de données relationnelles ou non
                    relationnelles
                  </li>
                  <li>
                    Utiliser des outils de développement et de gestion de versions
                  </li>
                  <li>
                    Assurer la cybersécurité d'une solution applicative et de son
                    développement
                  </li>
                </ul>
              </div>

              <div className="section">
                <h1>2 – MODALITÉS D'ÉVALUATION</h1>

                <div className="content-wrapper">
                  <div className="sub-section">
                    <h2>Forme de l'épreuve</h2>
                    <p>
                      L'épreuve E6 "Parcours de professionnalisation" est une
                      épreuve pratique et orale qui se décompose en deux parties :
                    </p>
                    <ul>
                      <li>
                        Une première partie centrée sur le parcours de
                        professionnalisation du candidat
                      </li>
                      <li>
                        Une seconde partie portant sur les compétences relevant du
                        processus de gestion du patrimoine informatique
                      </li>
                    </ul>
                    <p>
                      Le candidat s'appuie sur un dossier comprenant un tableau de
                      synthèse associé à son portefeuille de compétences
                      professionnelles, les attestations de stage ou certificats de
                      travail, et une attestation de la réalité des activités et
                      missions conduites.
                    </p>
                  </div>

                  <div className="sub-section">
                    <h2>
                      Déroulement de l'épreuve (40 minutes + 1h30 de préparation)
                    </h2>
                    <p>
                      L'épreuve dure 40 minutes et est précédée d'une période de
                      préparation de 1h30. Elle se déroule en deux phases :
                    </p>
                    <ul>
                      <li>
                        <span className="highlight">
                          Présentation du parcours de professionnalisation :
                        </span>{" "}
                        Le candidat présente son parcours et les compétences
                        acquises
                      </li>
                      <li>
                        <span className="highlight">
                          Entretien sur les compétences :
                        </span>{" "}
                        Les examinateurs interrogent le candidat sur les compétences
                        relevant de la conception et du développement d'applications
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="content-wrapper">
                  <div className="sub-section">
                    <h2>Évaluation</h2>
                    <p>
                      La commission d'interrogation est composée de deux membres :
                    </p>
                    <ul>
                      <li>
                        Un professeur chargé des enseignements professionnels en STS
                        services informatiques aux organisations, dans le domaine de
                        spécialité du candidat
                      </li>
                      <li>
                        Un professionnel du secteur d'activités des prestations
                        informatiques ou, à défaut, le professeur chargé de
                        l'enseignement d'analyse économique, managériale et
                        juridique des services informatiques
                      </li>
                    </ul>
                    <p>L'évaluation porte notamment sur :</p>
                    <ul>
                      <li>La qualité de la présentation</li>
                      <li>
                        La pertinence de l'analyse critique du parcours de
                        professionnalisation
                      </li>
                      <li>
                        La variété des situations professionnelles rencontrées
                      </li>
                      <li>
                        Le degré de maîtrise des compétences relevant de la
                        participation à un projet et de l'accompagnement de la mise
                        en place d'un nouveau service
                      </li>
                      <li>
                        La pertinence d'usage de la gestion des configurations
                      </li>
                      <li>
                        L'efficacité de l'organisation de la veille technologique
                      </li>
                    </ul>
                  </div>

                  <div className="sub-section">
                    <h2>Contrôle en cours de formation</h2>
                    <p>
                      Pour les candidats en formation initiale dans un établissement
                      public ou privé sous contrat, en formation continue dans un
                      établissement public habilité, ou en apprentissage dans un CFA
                      habilité, l'épreuve peut être organisée en contrôle en cours
                      de formation (CCF).
                    </p>
                    <p>
                      L'évaluation est alors organisée par l'établissement selon des
                      modalités similaires à l'épreuve ponctuelle, et doit avoir
                      lieu avant une date fixée par les autorités académiques.
                    </p>
                  </div>
                </div>
              </div>

              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Situation 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Situation 2</Nav.Link>
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
                      {situations1.map((situation1, index) => {
                        return <ProjectCard key={index} {...situation1} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="rowie">
                      {situations2.map((situation2, index) => {
                        return <ProjectCard key={index} {...situation2} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};