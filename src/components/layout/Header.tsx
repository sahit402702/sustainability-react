import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import links from "@/content/links.json";
import buttons from "@/content/buttons.json";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNav = () => setExpanded(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Navbar expand="lg" expanded={expanded} onToggle={setExpanded}>
        <Container>
          <Navbar.Brand as={Link} to={links.navigation.home} onClick={closeNav}>
            <span className="fw-bold">🌱 Sustainability Portal</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navigation"
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navigation">
            <Nav
              className="ms-auto"
              role="navigation"
              aria-label="Main navigation"
            >
              <Nav.Link
                as={NavLink}
                to={links.navigation.home}
                onClick={closeNav}
                end
              >
                {buttons.navigation.home}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={links.navigation.sustainability}
                onClick={closeNav}
              >
                {buttons.navigation.sustainability}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={links.navigation.reporting}
                onClick={closeNav}
              >
                {buttons.navigation.reporting}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={links.navigation.caseStudies}
                onClick={closeNav}
              >
                {buttons.navigation.caseStudies}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={links.navigation.faqs}
                onClick={closeNav}
              >
                {buttons.navigation.faqs}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
