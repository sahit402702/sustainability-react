import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Nav, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import sustainabilityContent from "@/content/sustainability.json";

const Sustainability: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("contracts");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleKeyDown = (event: React.KeyboardEvent, tab: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveTab(tab);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: sustainabilityContent.pageTitle,
    description: sustainabilityContent.introText[0],
  };

  return (
    <div className="sustainability-page">
      <SEO
        title="Sustainability Module"
        description={sustainabilityContent.introText[0]}
        keywords="sustainability, government contracts, CCS, procurement, schedules, frameworks"
        canonicalUrl="https://your-domain.com/sustainability"
        structuredData={structuredData}
      />

      {/* Page Header */}
      <header className="page-header">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">
              {sustainabilityContent.pageTitle}
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row className="align-items-start">
            <Col lg={8}>
              <h1 className="page-title">{sustainabilityContent.pageTitle}</h1>
            </Col>
            <Col
              lg={4}
              className="d-none d-lg-flex justify-content-end align-items-center"
            >
              <div className="d-flex align-items-center gap-2 gap-lg-3 flex-shrink-0">
                <img
                  src="assets/cognizant_logo.svg"
                  alt="Cognizant"
                  className="page-header-logo"
                  style={{ height: "30px", maxHeight: "30px" }}
                />
                <img
                  src="assets/birkbeck_logo.svg"
                  alt="Birkbeck"
                  className="page-header-logo"
                  style={{ height: "30px", maxHeight: "30px" }}
                />
              </div>
            </Col>
          </Row>

          {sustainabilityContent.introText.map((text, index) => (
            <p key={index} className="intro-text">
              {text}
            </p>
          ))}

          {/* Logos on mobile and tablet - left aligned below content */}
          <div className="d-flex d-lg-none align-items-center mt-3 mb-3">
            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <img
                src="assets/cognizant_logo.svg"
                alt="Cognizant"
                className="page-header-logo"
                style={{ height: "28px", maxHeight: "28px" }}
              />
              <img
                src="assets/birkbeck_logo.svg"
                alt="Birkbeck"
                className="page-header-logo"
                style={{ height: "28px", maxHeight: "28px" }}
              />
            </div>
          </div>

          {sustainabilityContent.introText.map((text, index) => (
            <p key={index} className="intro-text">
              {text}
            </p>
          ))}

          <Card
            className="info-box"
            role="region"
            aria-label="Module information"
          >
            <Card.Body>
              <p className="mb-0">{sustainabilityContent.infoBoxText}</p>
            </Card.Body>
          </Card>

          <p className="section-intro">{sustainabilityContent.sectionIntro}</p>

          <nav className="topic-links" aria-label="Jump to section">
            <a href="#contracts" className="topic-link">
              Contracts Terminology →
            </a>
            <a href="#definitions" className="topic-link">
              Sustainability Definitions →
            </a>
            <a href="#legislations" className="topic-link">
              Key Legislations →
            </a>
          </nav>
        </Container>
      </header>

      {/* Tab Navigation */}
      <section className="tabs-section" id="contracts">
        <Container>
          <Nav
            variant="tabs"
            className="custom-tabs"
            role="tablist"
            aria-label="Sustainability content tabs"
          >
            <Nav.Item role="presentation">
              <Nav.Link
                active={activeTab === "contracts"}
                onClick={() => handleTabChange("contracts")}
                onKeyDown={(e) => handleKeyDown(e, "contracts")}
                role="tab"
                aria-selected={activeTab === "contracts"}
                aria-controls="contracts-content"
                id="contracts-tab"
              >
                Contracts Terminology
              </Nav.Link>
            </Nav.Item>
            <Nav.Item role="presentation">
              <Nav.Link
                active={activeTab === "definitions"}
                onClick={() => handleTabChange("definitions")}
                onKeyDown={(e) => handleKeyDown(e, "definitions")}
                role="tab"
                aria-selected={activeTab === "definitions"}
                aria-controls="definitions-content"
                id="definitions-tab"
              >
                Sustainability Definitions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item role="presentation">
              <Nav.Link
                active={activeTab === "legislations"}
                onClick={() => handleTabChange("legislations")}
                onKeyDown={(e) => handleKeyDown(e, "legislations")}
                role="tab"
                aria-selected={activeTab === "legislations"}
                aria-controls="legislations-content"
                id="legislations-tab"
              >
                Key Legislations
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <Container>
          {activeTab === "contracts" && (
            <div
              className="tab-content-wrapper"
              role="tabpanel"
              id="contracts-content"
              aria-labelledby="contracts-tab"
            >
              <h2 className="content-title">Contracts Terminology</h2>

              <div className="definitions-list" role="list">
                {sustainabilityContent.contractsTerminology.map(
                  (item, index) => (
                    <Card
                      key={index}
                      className="definition-card"
                      role="listitem"
                    >
                      <Card.Body>
                        <div
                          className="definition-number"
                          aria-label={`Definition ${index + 1}`}
                        >
                          {index + 1}
                        </div>
                        <h3 className="definition-title">{item.title}</h3>
                        <p className="definition-description">
                          {item.description}
                        </p>
                      </Card.Body>
                    </Card>
                  )
                )}
              </div>

              <div
                className="section-note"
                role="note"
                aria-label="Important note about schedules"
              >
                {sustainabilityContent.contractsNote.map((note, index) => (
                  <p key={index}>{note}</p>
                ))}
              </div>

              <div
                className="reporting-link-section"
                role="region"
                aria-label="Additional resources"
              >
                <p className="reporting-link-text">
                  Further information on the content of schedules is detailed
                  within the SMESRI{" "}
                  <Link to="/reporting" className="inline-link">
                    {sustainabilityContent.reportingModuleLinkText}
                  </Link>
                  . This includes tools and guidance to support your business
                  fulfil its reporting and governance obligations if these
                  optional conditions apply to your contract.
                </p>
              </div>
            </div>
          )}

          {activeTab === "definitions" && (
            <div
              className="tab-content-wrapper"
              role="tabpanel"
              id="definitions-content"
              aria-labelledby="definitions-tab"
            >
              <h2 className="content-title">Sustainability Definitions</h2>

              <div className="definitions-list" role="list">
                {sustainabilityContent.sustainabilityDefinitions.map(
                  (item, index) => (
                    <Card
                      key={index}
                      className="definition-card"
                      role="listitem"
                    >
                      <Card.Body>
                        <div
                          className="definition-number"
                          aria-label={`Definition ${index + 1}`}
                        >
                          {index + 1}
                        </div>
                        <h3 className="definition-title">{item.title}</h3>
                        <div
                          className="definition-description"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />

                        {item.scopes && (
                          <div className="scopes-container">
                            {item.scopes.map((scope, scopeIndex) => {
                              const descriptions =
                                scope.description.split("\n\n");
                              return (
                                <div key={scopeIndex} className="scope-section">
                                  <h4 className="scope-title">
                                    <a href={scope.link} className="scope-link">
                                      {scope.title}
                                    </a>
                                  </h4>
                                  {descriptions.map((desc, descIndex) => (
                                    <p
                                      key={descIndex}
                                      className="scope-description"
                                    >
                                      {desc}
                                    </p>
                                  ))}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {item.points && (
                          <div className="points-list">
                            {item.points.map((point, pointIndex) => (
                              <p
                                key={pointIndex}
                                className="definition-description"
                              >
                                {String.fromCharCode(97 + pointIndex)}) {point}
                              </p>
                            ))}
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  )
                )}
              </div>

              <div
                className="reporting-link-section"
                role="region"
                aria-label="Additional resources"
              >
                <p className="reporting-link-text">
                  {sustainabilityContent.definitionsNote}
                </p>
              </div>
            </div>
          )}

          {activeTab === "legislations" && (
            <div
              className="tab-content-wrapper"
              role="tabpanel"
              id="legislations-content"
              aria-labelledby="legislations-tab"
            >
              <h2 className="content-title">Key Legislation</h2>

              <div className="legislation-list" role="list">
                {sustainabilityContent.keyLegislation.map((item, index) => (
                  <Card
                    key={index}
                    className="legislation-card"
                    role="listitem"
                  >
                    <Card.Body>
                      <div
                        className="legislation-number"
                        aria-label={`Legislation ${index + 1}`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="legislation-title">{item.title}</h3>
                      <p className="legislation-description">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        className="legislation-link"
                        aria-label={`Learn more about ${item.title}`}
                      >
                        Learn more about {item.title} →
                      </a>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              <div
                className="reporting-link-section"
                role="region"
                aria-label="Additional resources"
              >
                <p className="reporting-link-text">
                  {sustainabilityContent.legislationNote}
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Footer Yellow Bar */}
      <div
        className="page-footer-bar"
        role="presentation"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Sustainability;
