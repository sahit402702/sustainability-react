import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SEO from '@/components/SEO';
import FeatureCard from '@/components/common/FeatureCard';
import StatCard from '@/components/common/StatCard';
import headings from '@/content/headings.json';
import buttons from '@/content/buttons.json';

const Landing: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sustainability Portal - Home',
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

      <section className="hero" aria-labelledby="hero-heading">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 id="hero-heading" className="display-4 fw-bold mb-4">
                {headings.landing.hero.title}
              </h1>
              <p className="lead mb-4">{headings.landing.hero.subtitle}</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button as={Link} to="/sustainability" variant="primary" size="lg">
                  {buttons.cta.primary}
                </Button>
                <Button as={Link} to="/reporting" variant="outline-light" size="lg">
                  {buttons.cta.secondary}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features" aria-labelledby="features-heading">
        <Container>
          <h2 id="features-heading" className="text-center mb-5">
            {headings.landing.features.title}
          </h2>
          <Row className="g-4">
            {headings.landing.features.items.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </Row>
        </Container>
      </section>

      <section className="stats" aria-labelledby="stats-heading">
        <Container>
          <h2 id="stats-heading" className="text-center mb-5">
            {headings.landing.stats.title}
          </h2>
          <Row className="g-4">
            {headings.landing.stats.items.map((stat, index) => (
              <Col key={index} sm={6} lg={3}>
                <StatCard value={stat.value} label={stat.label} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 id="cta-heading" className="mb-4">
                {headings.landing.cta.title}
              </h2>
              <p className="lead mb-4">{headings.landing.cta.description}</p>
              <Button as={Link} to="/sustainability" variant="light" size="lg">
                {buttons.cta.explore}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Landing;
