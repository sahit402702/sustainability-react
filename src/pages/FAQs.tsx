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
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = faqsContent.items.map((item) => ({
    title: item.question,
    content: item.answer,
  }));

  const handleExpandAll = () => {
    if (expandedItems.length === sections.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(sections.map((_, index) => index.toString()));
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
              <div className="d-flex align-items-center gap-3 gap-xl-4 flex-shrink-0">
                <img
                  src="assets/cognizant_logo.svg"
                  alt="Cognizant"
                  className="page-header-logo"
                  style={{ height: "35px", maxHeight: "35px" }}
                />
                <img
                  src="assets/birkbeck_logo.svg"
                  alt="Birkbeck"
                  className="page-header-logo"
                  style={{ height: "35px", maxHeight: "35px" }}
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

      {/* Accordion Section */}
      <div className="accordion-section">
        <Container>
          <div className="accordion-header">
            <h2>Frequently Asked Questions</h2>
            <button
              className="expand-all-btn"
              onClick={handleExpandAll}
              aria-label={
                expandedItems.length === sections.length
                  ? "Collapse all sections"
                  : "Expand all sections"
              }
              aria-expanded={expandedItems.length === sections.length}
            >
              {expandedItems.length === sections.length
                ? faqsContent.collapseAllText
                : faqsContent.expandAllText}
            </button>
          </div>

          <Accordion activeKey={expandedItems} alwaysOpen>
            {sections.map((section, index) => (
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
                      expandedItems.includes(index.toString()) ? "expanded" : ""
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
                  <p>{section.content}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </div>

      {/* Footer Bar */}
      <div className="footer-bar" role="presentation" aria-hidden="true"></div>
    </div>
  );
};

export default FAQs;
