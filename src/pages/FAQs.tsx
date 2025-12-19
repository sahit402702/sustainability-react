import React, { useState } from "react";
import { Container, Breadcrumb, Accordion, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import faqsContent from "@/content/faqs.json";

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleExpandAll = () => {
    if (expandedItems.length === faqsContent.sections.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(
        faqsContent.sections.map((_, index) => index.toString())
      );
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

      {/* Breadcrumb Section */}
      <nav className="breadcrumb-section" aria-label="Breadcrumb">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">
              FAQs
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </nav>

      {/* Page Header */}
      <header className="page-header-section">
        <Container>
          <h1>{faqsContent.pageTitle}</h1>
          <p className="description">{faqsContent.description}</p>
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
            <button
              className="expand-all-btn"
              onClick={handleExpandAll}
              aria-label={
                expandedItems.length === faqsContent.sections.length
                  ? "Collapse all sections"
                  : "Expand all sections"
              }
              aria-expanded={
                expandedItems.length === faqsContent.sections.length
              }
            >
              {expandedItems.length === faqsContent.sections.length
                ? faqsContent.collapseAllText
                : faqsContent.expandAllText}
            </button>
          </div>

          <Accordion activeKey={expandedItems} alwaysOpen>
            {faqsContent.sections.map((section, index) => (
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
                  <p>Content coming soon...</p>
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
