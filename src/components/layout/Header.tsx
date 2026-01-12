import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import links from "@/content/links.json";
import buttons from "@/content/buttons.json";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNav = () => {
    setExpanded(false);
    setShowSubmenu(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Navbar expand="lg" expanded={expanded} onToggle={setExpanded}>
        <Container fluid>
          <Row className="w-100 align-items-center">
            {/* Logos Section - 3 columns on desktop */}
            <Col xs={6} lg={3} xl={2} className="d-flex align-items-center">
              <div className="header-logos d-flex align-items-center">
                <img
                  src="/assets/cognizant_logo.jpg"
                  alt="Cognizant"
                  className="header-logo"
                  height="24"
                />
                <img
                  src="/assets/birkbeck_logo.jpg"
                  alt="Birkbeck University of London"
                  className="header-logo"
                  height="24"
                />
              </div>
            </Col>

            {/* Mobile Toggle */}
            <Col xs={6} className="d-lg-none text-end">
              <Navbar.Toggle
                aria-controls="main-navigation"
                aria-label="Toggle navigation menu"
              >
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
            </Col>

            {/* Navigation Links - 6 columns on desktop, centered */}
            <Col xs={12} lg={6} xl={8}>
              <Navbar.Collapse id="main-navigation">
                <Nav
                  className="justify-content-center w-100"
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
                  <div
                    className={`nav-item-with-submenu ${
                      showSubmenu ? "show-mobile-submenu" : ""
                    }`}
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <NavLink
                      to={links.navigation.sustainability}
                      onClick={closeNav}
                      className={({ isActive }) =>
                        `nav-link nav-link-parent ${isActive ? "active" : ""}`
                      }
                    >
                      {buttons.navigation.whySustainability}
                    </NavLink>
                    {showSubmenu && (
                      <div className="submenu">
                        <Link
                          to="/sustainability#contracts"
                          className="submenu-item"
                          onClick={() => {
                            closeNav();
                            setShowSubmenu(false);
                          }}
                        >
                          Contracts Terminology
                        </Link>
                        <Link
                          to="/sustainability#definitions"
                          className="submenu-item"
                          onClick={() => {
                            closeNav();
                            setShowSubmenu(false);
                          }}
                        >
                          Sustainability Definitions
                        </Link>
                        <Link
                          to="/sustainability#legislations"
                          className="submenu-item"
                          onClick={() => {
                            closeNav();
                            setShowSubmenu(false);
                          }}
                        >
                          Key Legislations
                        </Link>
                        <Link
                          to={links.navigation.sustainabilityCheck}
                          className="submenu-item"
                          onClick={() => {
                            closeNav();
                            setShowSubmenu(false);
                          }}
                        >
                          {buttons.navigation.sustainabilityCheck}
                        </Link>
                      </div>
                    )}
                  </div>
                  <Nav.Link
                    as={NavLink}
                    to={links.navigation.carbonCalculator}
                    onClick={closeNav}
                  >
                    {buttons.navigation.carbonCalculator}
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to={links.navigation.reportingModule}
                    onClick={closeNav}
                  >
                    {buttons.navigation.reportingModule}
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
            </Col>

            {/* Brand Section - 3 columns on desktop */}
            <Col xs={12} lg={3} xl={2} className="text-center text-lg-end">
              <Navbar.Brand
                as={Link}
                to={links.navigation.home}
                onClick={closeNav}
                className="mb-0"
              >
                SME NetZero Hub
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
