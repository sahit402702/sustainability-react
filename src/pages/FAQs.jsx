import { useState, useEffect } from "react";
import { Container, Accordion, Form, Button, Card } from "react-bootstrap";

function FAQs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    document.title = "FAQs - Sustainability Portal";
  }, []);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "reporting", label: "Reporting" },
    { id: "sustainability", label: "Sustainability" },
    { id: "participation", label: "Participation" },
  ];

  const faqs = [
    {
      category: "general",
      question: "What is the Sustainability Portal?",
      answer:
        "The Sustainability Portal is a comprehensive platform that provides transparent information about our environmental initiatives, sustainability reports, and the measurable impact of our programs. We aim to promote environmental responsibility and engage stakeholders in our sustainability journey.",
    },
    {
      category: "reporting",
      question: "How often are sustainability reports published?",
      answer:
        "We publish comprehensive sustainability reports quarterly, with monthly updates on key metrics and initiatives. Annual reports provide a detailed overview of our progress, challenges, and future goals. All reports are available in the Reporting section of our portal.",
    },
    {
      category: "sustainability",
      question: "What are your main sustainability goals?",
      answer:
        "Our primary goals include achieving carbon neutrality by 2030, reducing waste by 50%, transitioning to 100% renewable energy, and planting 10 million trees by 2025. We also focus on water conservation, biodiversity protection, and promoting circular economy principles.",
    },
    {
      category: "general",
      question: "How can I access your sustainability data?",
      answer:
        "All our sustainability data is publicly available through our Reporting section. You can download detailed reports, view interactive dashboards, and access historical data. We believe in complete transparency and make all information easily accessible to stakeholders.",
    },
    {
      category: "participation",
      question: "How can my organization partner with you?",
      answer:
        "We welcome partnerships with organizations that share our commitment to sustainability. You can reach out through our contact form, and our partnerships team will discuss collaboration opportunities, including joint initiatives, knowledge sharing, and resource pooling.",
    },
    {
      category: "sustainability",
      question: "What is your approach to carbon offsetting?",
      answer:
        "We prioritize carbon reduction first through energy efficiency, renewable energy adoption, and process optimization. For unavoidable emissions, we invest in verified carbon offset projects including reforestation, renewable energy development, and methane capture initiatives.",
    },
    {
      category: "reporting",
      question: "Are your reports third-party verified?",
      answer:
        "Yes, all our sustainability reports undergo third-party verification by accredited environmental auditors. We follow international reporting standards including GRI, CDP, and SASB to ensure accuracy, completeness, and credibility of our disclosures.",
    },
    {
      category: "participation",
      question: "Can individuals contribute to your initiatives?",
      answer:
        "Absolutely! Individuals can participate through volunteering programs, community events, and our tree-planting campaigns. You can also support our initiatives through donations or by spreading awareness about sustainable practices in your community.",
    },
    {
      category: "general",
      question: "What certifications do you hold?",
      answer:
        "We hold several environmental certifications including ISO 14001 (Environmental Management), B Corp Certification, Carbon Neutral Certification, and various region-specific green certifications. Details of all certifications are available in our Reports section.",
    },
    {
      category: "sustainability",
      question: "How do you measure your environmental impact?",
      answer:
        "We use comprehensive metrics including carbon footprint analysis, water usage tracking, waste management statistics, and biodiversity impact assessments. Our measurement framework aligns with Science-Based Targets initiative (SBTi) and follows internationally recognized methodologies.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="faqs-page">
      <Container>
        {/* Page Header */}
        <div className="page-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our sustainability
            initiatives, reporting practices, and how you can get involved.
          </p>
        </div>

        {/* Search Box */}
        <div className="faq-search">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search FAQs"
            />
          </Form.Group>
        </div>

        {/* Category Filters */}
        <div
          className="faq-categories"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={
                activeCategory === category.id ? "primary" : "outline-primary"
              }
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {filteredFAQs.length > 0 ? (
            <Accordion>
              {filteredFAQs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <Card className="text-center p-5">
              <Card.Body>
                <p className="mb-0">
                  No questions found matching your search. Try different
                  keywords or categories.
                </p>
              </Card.Body>
            </Card>
          )}
        </div>

        {/* Contact CTA */}
        <div className="faq-contact">
          <h3>Still Have Questions?</h3>
          <p>Can't find what you're looking for? Our team is here to help.</p>
          <Button variant="primary" size="lg">
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default FAQs;
