import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <Row className="footer-content">
          <Col md={8} className="footer-section">
            <span className="footer-brand">🌱 Sustainability Portal</span>
            <p className="footer-description">
              Supporting SMEs with sustainability compliance and reporting for
              UK public sector contracts.
            </p>
          </Col>

          <Col md={4} className="footer-section">
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
                  <Link to="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Sustainability Portal. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
