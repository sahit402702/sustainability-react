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
                src="/assets/cognizant_logo.jpg"
                alt="Cognizant"
                className="footer-logo"
                height="32"
              />
              <img
                src="/assets/birkbeck_logo.svg"
                alt="Birkbeck University of London"
                className="footer-logo"
                height="32"
              />
            </div>
            <p className="footer-description mt-3">
              Supporting SMEs with sustainability compliance and reporting for
              UK public sector contracts.
            </p>
          </Col>

          <Col lg={4} md={6} className="footer-section">
            <h4>Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link to="/reporting">Reporting</Link>
                </li>
                <li>
                  <Link to="/carbon-calculator">Carbon Calculator</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
              </ul>
            </nav>
          </Col>

          <Col lg={4} md={12} className="footer-section">
            <h4>About</h4>
            <p>
              This portal provides comprehensive sustainability resources,
              compliance tools, and reporting frameworks to help SMEs meet
              public sector requirements.
            </p>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>©2026 Cognizant, all rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
