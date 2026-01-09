import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Breadcrumb } from "react-bootstrap";
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
        <Container fluid>
          <Breadcrumb>
            <Breadcrumb.Item active aria-current="page">
              Home
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row className="align-items-start g-0">
            <Col xs={12}>
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
                  {buttons.navigation.whySustainability}
                </Button>
                <Button
                  as={Link as any}
                  to="/sustainability-check"
                  variant="primary"
                  size="lg"
                  className="btn-shadow"
                >
                  {buttons.cta.startCompliance}
                </Button>
                <Button
                  as={Link as any}
                  to="/reporting"
                  variant="primary"
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
        <Container fluid>
          <Row className="g-0">
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
        <Container fluid>
          <Row className="g-0">
            <Col>
              <h2 id="smesri-heading" className="section-title">
                {headings.landing.smesri.title}
              </h2>
              <p className="smesri-text mb-4">
                {headings.landing.smesri.description}
              </p>
            </Col>
          </Row>

          {/* Module Cards */}
          <Row className="g-0 mt-4 justify-content-center">
            {headings.landing.smesri.modules.map((module, index) => {
              const icons = ["🌿", "📊"];
              return (
                <Col key={index} md={6} lg={5} xl={5}>
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
                            : "/faqs"
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

      {/* Andy Colley Quote Section */}
      <section
        className="andy-quote-section"
        aria-labelledby="andy-quote-heading"
      >
        <Container fluid>
          <Row className="g-0">
            <Col xs={12}>
              <div className="quote-card">
                <blockquote className="quote-content">
                  <p className="quote-text">
                    "As Director of Innovation at Birkbeck, I'm proud to
                    highlight our contribution to this microsite, created in
                    partnership with Cognizant, to provide SMEs with practical,
                    accessible tools to advance their ESG goals.
                  </p>
                  <p className="quote-text">
                    The resources are gathered here, and include
                    carbon-calculation software, reporting guidance, and
                    internationally recognised frameworks such as the SME
                    Climate Hub and Science Based Targets initiative. They offer
                    smaller businesses clear routes to measuring impact and
                    planning meaningful decarbonisation.
                  </p>
                  <p className="quote-text">
                    Alongside these external tools, we're pleased to share
                    Birkbeck's own support for SMEs through our Small Business
                    Club, our short course Decarbonise Your Business and Achieve
                    Net Zero, and the rich library of insights from our annual
                    Climate Festival.
                  </p>
                  <p className="quote-text">
                    Taken together, these resources are designed to give SMEs
                    the confidence, clarity, and capability to make informed
                    sustainability decisions and to turn ambition into
                    achievable action."
                  </p>
                </blockquote>
                <div className="quote-author">
                  <div className="author-info">
                    <p className="author-name">Andy Colley</p>
                    <p className="author-title">
                      Director of Innovation, Birkbeck University
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <Container fluid>
          <Row className="g-0">
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
