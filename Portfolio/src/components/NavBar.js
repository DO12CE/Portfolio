import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Parcours</Nav.Link>
              <Nav.Link href="#bts" className={activeLink === 'bts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('bts')}>BTS</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
              <Nav.Link href="#stage" className={activeLink === 'stage' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stage')}>Stage</Nav.Link>
              <Nav.Link href="#ssi" className={activeLink === 'ssi' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ssi')}>SSI-E5</Nav.Link>
              <Nav.Link href="#cda" className={activeLink === 'CDA' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('CDA')}>CDA-E6</Nav.Link>
              <Nav.Link href="#veille" className={activeLink === 'veille' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('veille')}>Veille</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yousra-zaabat/" target="_blank"><img src={navIcon1} alt="" /></a>

              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Me contacter</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
