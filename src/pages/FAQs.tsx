import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Accordion,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import faqsContent from "@/content/faqs.json";

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter sections based on search term
  const filteredSections = faqsContent.sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExpandAll = () => {
    if (expandedItems.length === filteredSections.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(filteredSections.map((_, index) => index.toString()));
    }
  };

  const toggleItem = (key: string) => {
    if (expandedItems.includes(key)) {
      setExpandedItems(expandedItems.filter((item) => item !== key));
    } else {
      setExpandedItems([...expandedItems, key]);
    }
  };

  return (
    <div className="faqs-page">
      <SEO
        title="Frequently Asked Questions - Sustainability Portal"
        description={faqsContent.description}
        keywords="sustainability FAQs, environmental questions, ESG reporting, carbon offsetting, green certifications, sustainability partnerships"
        canonicalUrl="https://your-domain.com/faqs"
      />

      {/* Page Header */}
      <header className="page-header">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">
              FAQs
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row className="align-items-start">
            <Col lg={8}>
              <h1>{faqsContent.pageTitle}</h1>
              <p className="description">{faqsContent.description}</p>
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

          {/* Logos on mobile and tablet - left aligned */}
          <div className="d-flex d-lg-none align-items-center mt-3">
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
        </Container>
      </header>

      {/* Search Section */}
      <div className="search-section">
        <Container>
          <div className="search-bar" role="search">
            <Form.Control
              type="search"
              placeholder={faqsContent.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search FAQs"
            />
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Container>
      </div>

      {/* Accordion Section */}
      <div className="accordion-section">
        <Container>
          <div className="accordion-header">
            <h2>Frequently Asked Questions</h2>
            <button
              className="expand-all-btn"
              onClick={handleExpandAll}
              aria-label={
                expandedItems.length === filteredSections.length
                  ? "Collapse all sections"
                  : "Expand all sections"
              }
              aria-expanded={expandedItems.length === filteredSections.length}
            >
              {expandedItems.length === filteredSections.length
                ? faqsContent.collapseAllText
                : faqsContent.expandAllText}
            </button>
          </div>

          {filteredSections.length === 0 ? (
            <div className="no-results">
              <p>
                No FAQs found matching "{searchTerm}". Please try a different
                search term.
              </p>
            </div>
          ) : (
            <Accordion activeKey={expandedItems} alwaysOpen>
              {filteredSections.map((section, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index.toString()}
                  className="faq-item"
                >
                  <Accordion.Header
                    onClick={() => toggleItem(index.toString())}
                    aria-label={`Section ${index + 1}: ${section.title}`}
                  >
                    {section.title}
                    <svg
                      className={`chevron-icon ${
                        expandedItems.includes(index.toString())
                          ? "expanded"
                          : ""
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Content coming soon...</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          )}
        </Container>
      </div>

      {/* Footer Bar */}
      <div className="footer-bar" role="presentation" aria-hidden="true"></div>
    </div>
  );
};

export default FAQs;
