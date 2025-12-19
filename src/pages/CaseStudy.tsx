import React, { useEffect } from "react";
import { Container, Breadcrumb, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const CaseStudy: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Case Study Module",
    description:
      "End-to-end demonstration for SMEs of how effective sustainability governance and reporting should be implemented",
  };

  return (
    <div className="casestudy-page">
      <SEO
        title="Case Study Module"
        description="End-to-end demonstration for SMEs of how effective sustainability governance and reporting should be implemented"
        keywords="case study, sustainability governance, SME reporting, IT services supply chain"
        canonicalUrl="https://your-domain.com/case-studies"
        structuredData={structuredData}
      />

      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Case study module</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="page-title">Case Study Module</h1>

          <p className="page-description">
            An end to end demonstration for SME's of how effective
            sustainability governance and reporting should be implemented,
            presented within the context of an IT services supply chain
            contract.
          </p>

          <div className="topic-links">
            <a href="#contracts" className="topic-link">
              Contracts Terminology →
            </a>
            <a href="#definitions" className="topic-link">
              Sustainability Definitions →
            </a>
            <a href="#legislations" className="topic-link">
              Key Legislations →
            </a>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="case-study-content">
        <Container>
          {/* Profile Card 1 */}
          <Card className="profile-card">
            <Card.Body>
              <div className="profile-header">
                <div>
                  <h3 className="profile-name">Andy Colley</h3>
                  <p className="profile-title">
                    Director of Innovation at Birkbeck
                  </p>
                </div>
                <img
                  src="assets/birkbeck_logo.svg"
                  alt="Birkbeck University"
                  className="profile-logo"
                />
              </div>
            </Card.Body>
          </Card>

          {/* Main Text Content */}
          <div className="text-content">
            <p>
              As Director of Innovation at Birkbeck, I'm proud to highlight our
              contribution to this microsite, created in partnership with
              Cognizant, to provide SMEs with practical, accessible tools to
              advance their ESG goals.
            </p>

            <p>
              The resources are gathered here, and include carbon-calculation
              software, reporting guidance, and internationally recognised
              frameworks such as the SME Climate Hub and Science Based Targets
              initiative.
            </p>

            <p>
              They offer smaller businesses clear routes to measuring impact and
              planning meaningful decarbonisation.
            </p>

            <p>
              Alongside these external tools, we're pleased to share Birkbeck's
              own support for SMEs through our Small Business Club, our short
              course Decarbonise Your Business and Achieve Net Zero, and the
              rich library of insights from our annual Climate Festival.
            </p>

            <p>
              Taken together, these resources are designed to give SMEs the
              confidence, clarity, and capability to make informed
              sustainability decisions and to turn ambition into achievable
              action.
            </p>
          </div>

          {/* Profile Card 2 - Highlighted */}
          <Card className="profile-card highlighted">
            <Card.Body>
              <div className="profile-info">
                <h3 className="profile-name">Andy Colley</h3>
                <p className="profile-title">
                  Director of Innovation at Birkbeck
                </p>
              </div>

              <p className="profile-quote">
                As Director of Innovation at Birkbeck, I'm proud to highlight
                our contribution to this microsite, created in partnership with
                Cognizant, to provide SMEs with practical, accessible tools to
                advance their ESG goals.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Footer Yellow Bar */}
      <div className="page-footer-bar"></div>
    </div>
  );
};

export default CaseStudy;
