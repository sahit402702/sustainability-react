import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <Container fluid>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-section">
            <div className="footer-logos">
              <img
                src="/assets/cognizant_logo.png"
                alt="Cognizant"
                className="footer-logo"
                width="128"
                height="32"
                loading="lazy"
              />
              <img
                src="/assets/birkbeck_logo.jpg"
                alt="Birkbeck University of London"
                className="footer-logo"
                width="128"
                height="32"
                loading="lazy"
              />
            </div>
            <p className="footer-description mt-3">
              Supporting SMEs with sustainability compliance and reporting for
              UK public sector contracts.
            </p>
          </Col>

          <Col lg={4} md={6} className="footer-section">
            <div className="footer-heading">Quick Links</div>
            <nav aria-label="Footer navigation">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sustainability">Sustainability module</Link>
                </li>
                <li>
                  <Link to="/carbon-calculator">Carbon Calculator</Link>
                </li>
                <li>
                  <Link to="/reporting">Reporting module</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
              </ul>
            </nav>
          </Col>

          <Col lg={4} md={12} className="footer-section">
            <div className="footer-heading">About</div>
            <p>
              This portal provides comprehensive sustainability resources,
              compliance tools, and reporting frameworks to help SMEs meet
              public sector requirements.
            </p>
            <nav aria-label="Legal links" className="mt-3">
              <ul className="legal-links">
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/cookie-policy">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
