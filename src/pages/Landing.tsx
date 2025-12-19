import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import SEO from "@/components/SEO";
import headings from "@/content/headings.json";
import buttons from "@/content/buttons.json";

const Landing: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sustainability Portal - Home",
    description: headings.landing.hero.subtitle,
  };

  return (
    <div className="landing-page">
      <SEO
        title="Home - Sustainability Portal"
        description={headings.landing.hero.subtitle}
        keywords="sustainability, environmental reporting, carbon neutral, ESG, green initiatives"
        canonicalUrl="https://your-domain.com/"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <Container>
          <Row>
            <Col lg={8}>
              <h1 id="hero-heading" className="hero-title">
                {headings.landing.hero.title}
              </h1>
              <p className="hero-subtitle">{headings.landing.hero.subtitle}</p>
              <div className="hero-buttons">
                <Button
                  as={Link}
                  to="/sustainability"
                  variant="primary"
                  size="lg"
                  className="btn-shadow"
                >
                  {buttons.cta.startCompliance}
                </Button>
                <Button
                  as={Link}
                  to="/reporting"
                  variant="warning"
                  size="lg"
                  className="btn-shadow"
                >
                  {buttons.cta.downloadTemplates}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Sustainability Matters Section */}
      <section className="why-sustainability" aria-labelledby="why-heading">
        <Container>
          <Row>
            <Col lg={8}>
              <h2 id="why-heading" className="section-title">
                {headings.landing.whySustainability.title}
              </h2>
              <p className="section-description">
                {headings.landing.whySustainability.description}
              </p>
              <Button
                as={Link}
                to="/sustainability"
                variant="outline-dark"
                className="mt-3 btn-outline-custom"
              >
                {headings.landing.whySustainability.buttonText}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SMESRI Section */}
      <section className="smesri-section" aria-labelledby="smesri-heading">
        <Container>
          <Row>
            <Col lg={11} xl={10}>
              <Row className="smesri-header">
                <Col md={6} lg={6} className="smesri-content">
                  <h2 id="smesri-heading" className="section-title">
                    {headings.landing.smesri.title}
                  </h2>
                  <p className="smesri-text">
                    {headings.landing.smesri.description}
                  </p>
                  <p className="smesri-text">
                    {headings.landing.smesri.subtitle}
                  </p>
                  <p className="smesri-text mb-4">
                    {headings.landing.smesri.additionalInfo}
                  </p>
                </Col>
                <Col md={6} lg={6} className="smesri-logos-container">
                  <div className="smesri-logos">
                    <img
                      src="assets/cognizant_logo.svg"
                      alt="Cognizant"
                      className="smesri-logo"
                    />
                    <img
                      src="assets/birkbeck_logo.svg"
                      alt="Birkbeck"
                      className="smesri-logo"
                    />
                  </div>
                </Col>
              </Row>

              {/* Module Cards */}
              <Row className="g-4 mt-4">
                {headings.landing.smesri.modules.map((module, index) => (
                  <Col key={index} md={6} lg={4}>
                    <Card
                      className="module-card h-100 border-0"
                      style={{ backgroundColor: module.backgroundColor }}
                    >
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="module-title">
                          {module.title}
                        </Card.Title>
                        <Card.Text className="module-description flex-grow-1">
                          {module.description}
                        </Card.Text>
                        <Link
                          to={
                            index === 0
                              ? "/sustainability"
                              : index === 1
                              ? "/reporting"
                              : "/case-studies"
                          }
                          className="module-link"
                        >
                          {module.linkText} →
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <Container>
          <Row>
            <Col lg={8}>
              <h2 id="faq-heading" className="section-title">
                {headings.landing.faqSection.title}
              </h2>
              <p className="section-description mb-4">
                {headings.landing.faqSection.description}
              </p>
              <Link to="/faqs" className="faq-link">
                {headings.landing.faqSection.linkText} →
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Landing;
