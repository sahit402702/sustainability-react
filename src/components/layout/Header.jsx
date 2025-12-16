import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
          <Navbar.Brand as={Link} to="/" onClick={closeNav}>
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
              <Nav.Link as={NavLink} to="/" onClick={closeNav} end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sustainability" onClick={closeNav}>
                Sustainability
              </Nav.Link>
              <Nav.Link as={NavLink} to="/reporting" onClick={closeNav}>
                Reporting
              </Nav.Link>
              <Nav.Link as={NavLink} to="/case-studies" onClick={closeNav}>
                Case Studies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faqs" onClick={closeNav}>
                FAQs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
