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
          <Row className="align-items-start g-4">
            <Col lg={7} xl={8} className="pe-lg-4 pe-xl-5">
              <h1 id="hero-heading" className="hero-title">
                {headings.landing.hero.title}
              </h1>
              <p className="hero-subtitle">{headings.landing.hero.subtitle}</p>

              <div className="hero-buttons">
                <Button
                  as={Link as any}
                  to="/sustainability"
                  variant="primary"
                  size="lg"
                  className="btn-shadow"
                >
                  {buttons.cta.startCompliance}
                </Button>
                <Button
                  as={Link as any}
                  to="/reporting"
                  variant="warning"
                  size="lg"
                  className="btn-shadow"
                >
                  {buttons.cta.downloadTemplates}
                </Button>
              </div>

              {/* Logos on mobile and tablet - left aligned below buttons */}
              <div className="d-flex d-lg-none align-items-center mt-4">
                <div className="d-flex align-items-center gap-2 flex-shrink-0">
                  <img
                    src="assets/cognizant_logo.svg"
                    alt="Cognizant"
                    className="hero-logo"
                    style={{ height: "28px", maxHeight: "28px" }}
                  />
                  <img
                    src="assets/birkbeck_logo.svg"
                    alt="Birkbeck"
                    className="hero-logo"
                    style={{ height: "28px", maxHeight: "28px" }}
                  />
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              xl={4}
              className="d-none d-lg-flex justify-content-end align-items-start"
            >
              <div className="d-flex align-items-center gap-3 gap-xl-4 flex-shrink-0 mt-2">
                <img
                  src="assets/cognizant_logo.svg"
                  alt="Cognizant"
                  className="hero-logo"
                  style={{ height: "35px", maxHeight: "35px" }}
                />
                <img
                  src="assets/birkbeck_logo.svg"
                  alt="Birkbeck"
                  className="hero-logo"
                  style={{ height: "35px", maxHeight: "35px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Sustainability Matters Section */}
      <section className="why-sustainability" aria-labelledby="why-heading">
        <Container>
          <Row>
            <Col>
              <h2 id="why-heading" className="section-title">
                {headings.landing.whySustainability.title}
              </h2>
              <p className="section-description">
                {headings.landing.whySustainability.description}
              </p>
              <Button
                as={Link as any}
                to="/carbon-calculator"
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
            <Col>
              <h2 id="smesri-heading" className="section-title">
                {headings.landing.smesri.title}
              </h2>
              <p className="smesri-text">
                {headings.landing.smesri.description}
              </p>
              <p className="smesri-text">{headings.landing.smesri.subtitle}</p>
              <p className="smesri-text mb-4">
                {headings.landing.smesri.additionalInfo}
              </p>
            </Col>
          </Row>

          {/* Module Cards */}
          <Row className="g-4 mt-4">
            {headings.landing.smesri.modules.map((module, index) => {
              const icons = ["🌿", "📊", "📚"];
              return (
                <Col key={index} md={6} lg={4}>
                  <Card className="module-card h-100 border-0">
                    <Card.Body className="d-flex flex-column">
                      <div className="module-icon">{icons[index]}</div>
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
                        {module.linkText}
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
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
                <span className="faq-icon">💬</span>
                {headings.landing.faqSection.linkText}
                <span className="arrow">→</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Landing;
