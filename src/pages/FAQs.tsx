import React, { useState } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";
import SEO from "@/components/SEO";
import PageHeader from "@/components/common/PageHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import faqsContent from "@/content/faqs.json";

const FAQs: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  useScrollToTop();

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

      <PageHeader
        title={faqsContent.pageTitle}
        subtitle={faqsContent.description}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "FAQs" }]}
        showLogos={false}
      />

      {/* Accordion Section */}
      <div className="accordion-section">
        <Container fluid>
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
