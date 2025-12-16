import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Case Studies - Sustainability Portal";
  }, []);

  const filters = [
    { id: "all", label: "All Case Studies" },
    { id: "energy", label: "Clean Energy" },
    { id: "waste", label: "Waste Reduction" },
    { id: "water", label: "Water Conservation" },
    { id: "biodiversity", label: "Biodiversity" },
  ];

  const caseStudies = [
    {
      id: 1,
      category: "energy",
      title: "Solar Transformation: 100% Renewable Energy Facility",
      location: "California, USA",
      date: "2024",
      duration: "18 months",
      image: "/images/case-solar.jpg",
      description:
        "Complete transformation of a 200,000 sq ft manufacturing facility to 100% solar power, resulting in significant cost savings and carbon reduction.",
      impact: "2,500 tons CO₂ saved annually",
      challenge:
        "High energy costs and carbon footprint from conventional power sources",
      solution:
        "Installed 5MW solar array with battery storage system and smart energy management",
      results: [
        "100% renewable energy achieved",
        "45% reduction in energy costs",
        "Zero grid dependency during peak hours",
        "ROI achieved in 6 years",
      ],
    },
    {
      id: 2,
      category: "waste",
      title: "Zero Waste Initiative: Circular Economy Success",
      location: "Amsterdam, Netherlands",
      date: "2024",
      duration: "24 months",
      image: "/images/case-waste.jpg",
      description:
        "Implementing circular economy principles to achieve zero waste to landfill across a major distribution center.",
      impact: "95% waste diversion rate",
      challenge: "High waste generation with 60% going to landfills",
      solution:
        "Comprehensive waste segregation, recycling partnerships, and material reuse programs",
      results: [
        "95% waste diverted from landfills",
        "€250K annual savings",
        "15 local recycling partnerships",
        "ISO 14001 certification achieved",
      ],
    },
    {
      id: 3,
      category: "water",
      title: "Smart Water Management in Agriculture",
      location: "Queensland, Australia",
      date: "2023",
      duration: "12 months",
      image: "/images/case-water.jpg",
      description:
        "Implementing IoT-based precision irrigation system to optimize water usage in large-scale agriculture.",
      impact: "40% water reduction",
      challenge: "Water scarcity and inefficient irrigation practices",
      solution:
        "Deployed smart sensors, AI-driven irrigation scheduling, and drip irrigation systems",
      results: [
        "40% reduction in water consumption",
        "25% increase in crop yield",
        "Real-time monitoring dashboard",
        "Annual savings of 50 million liters",
      ],
    },
    {
      id: 4,
      category: "biodiversity",
      title: "Reforestation & Habitat Restoration Project",
      location: "Amazon Basin, Brazil",
      date: "2023",
      duration: "36 months",
      image: "/images/case-forest.jpg",
      description:
        "Large-scale reforestation project to restore degraded forest land and protect endangered species habitat.",
      impact: "500,000 trees planted",
      challenge:
        "Deforestation and loss of critical habitat for endangered species",
      solution:
        "Community-led reforestation with native species and wildlife corridors",
      results: [
        "500,000 native trees planted",
        "1,200 hectares restored",
        "15 endangered species protected",
        "200 local jobs created",
      ],
    },
    {
      id: 5,
      category: "energy",
      title: "Wind Power Integration for Industrial Complex",
      location: "Scotland, UK",
      date: "2023",
      duration: "20 months",
      image: "/images/case-wind.jpg",
      description:
        "Installation of on-site wind turbines to power an industrial complex with clean, renewable energy.",
      impact: "3,800 tons CO₂ reduced",
      challenge: "Heavy reliance on fossil fuels with rising energy costs",
      solution: "10 wind turbines with 8MW capacity and grid-tie system",
      results: [
        "70% energy from wind power",
        "£1.2M annual cost savings",
        "Carbon neutral by 2025 on track",
        "Community energy sharing program",
      ],
    },
    {
      id: 6,
      category: "waste",
      title: "Plastic-Free Packaging Transformation",
      location: "Tokyo, Japan",
      date: "2024",
      duration: "15 months",
      image: "/images/case-packaging.jpg",
      description:
        "Complete elimination of single-use plastics from product packaging across entire product line.",
      impact: "850 tons plastic eliminated",
      challenge:
        "Heavy plastic packaging dependency causing environmental harm",
      solution:
        "Biodegradable materials, reusable packaging systems, and consumer return programs",
      results: [
        "100% plastic-free packaging",
        "850 tons plastic eliminated annually",
        "92% customer satisfaction",
        "Industry innovation award won",
      ],
    },
  ];

  const filteredCaseStudies = caseStudies.filter(
    (study) => activeFilter === "all" || study.category === activeFilter
  );

  return (
    <div className="casestudy-page">
      <Container>
        {/* Page Header */}
        <div className="page-header">
          <h1>Sustainability Case Studies</h1>
          <p>
            Explore real-world examples of our sustainability initiatives, the
            challenges we faced, solutions implemented, and measurable results
            achieved.
          </p>
        </div>

        {/* Filters */}
        <div
          className="case-study-filters"
          role="group"
          aria-label="Filter by category"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={
                activeFilter === filter.id ? "primary" : "outline-primary"
              }
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <Row className="case-studies-grid">
          {filteredCaseStudies.map((study) => (
            <Col key={study.id}>
              <Card className="case-study-card h-100">
                <div className="case-study-image">
                  <img
                    src={study.image}
                    alt={study.title}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=" +
                        study.category.toUpperCase();
                    }}
                  />
                  <div className="case-study-category">
                    {filters
                      .find((f) => f.id === study.category)
                      ?.label.replace(/^(All |)/, "")}
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="h5 mb-3">
                    {study.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    {study.description}
                  </Card.Text>

                  <div className="case-study-details mb-3">
                    <div className="mb-2">
                      <strong>Location:</strong> {study.location}
                    </div>
                    <div className="mb-2">
                      <strong>Duration:</strong> {study.duration}
                    </div>
                    <div className="mb-2">
                      <strong>Challenge:</strong> {study.challenge}
                    </div>
                    <div>
                      <strong>Solution:</strong> {study.solution}
                    </div>
                  </div>

                  <div className="case-study-impact">
                    <div className="impact-label">Environmental Impact</div>
                    <div className="impact-value">{study.impact}</div>
                  </div>

                  <div className="case-study-meta">
                    <span>📅 {study.date}</span>
                    <span>📍 {study.location.split(",")[1]?.trim()}</span>
                  </div>

                  <Button variant="primary" className="mt-3 w-100">
                    View Full Case Study
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Results Highlight */}
        <section className="mt-5 pt-5 border-top">
          <div className="text-center mb-4">
            <h2>Collective Impact</h2>
            <p className="text-muted">
              The combined results of all our case studies demonstrate
              significant environmental progress
            </p>
          </div>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="text-center h-100 border-success">
                <Card.Body>
                  <div className="display-4 fw-bold text-success mb-2">
                    12K+
                  </div>
                  <Card.Text className="text-muted">Tons CO₂ Reduced</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="text-center h-100 border-primary">
                <Card.Body>
                  <div className="display-4 fw-bold text-primary mb-2">
                    500K+
                  </div>
                  <Card.Text className="text-muted">Trees Planted</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="text-center h-100 border-info">
                <Card.Body>
                  <div className="display-4 fw-bold text-info mb-2">85%</div>
                  <Card.Text className="text-muted">
                    Avg Waste Diversion
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="text-center h-100 border-warning">
                <Card.Body>
                  <div className="display-4 fw-bold text-warning mb-2">40%</div>
                  <Card.Text className="text-muted">Resource Savings</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* CTA */}
        <div className="load-more">
          <p className="text-center mb-3">
            Want to learn more about our sustainability initiatives?
          </p>
          <div className="text-center">
            <Button variant="primary" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CaseStudy;
