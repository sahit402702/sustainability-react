import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Sustainability() {
  useEffect(() => {
    document.title = "Sustainability Module - Sustainability Portal";
  }, []);

  const goals = [
    {
      icon: "🌡️",
      title: "Climate Action",
      description:
        "Achieving carbon neutrality by 2030 through renewable energy adoption and emission reduction strategies.",
      target: "50% reduction by 2025",
    },
    {
      icon: "💧",
      title: "Water Conservation",
      description:
        "Reducing water consumption and implementing water recycling systems across all facilities.",
      target: "40% water savings",
    },
    {
      icon: "♻️",
      title: "Waste Management",
      description:
        "Zero waste to landfill initiative with comprehensive recycling and circular economy practices.",
      target: "80% waste diversion",
    },
    {
      icon: "🌳",
      title: "Biodiversity",
      description:
        "Protecting ecosystems and supporting reforestation projects to enhance biodiversity.",
      target: "10M trees by 2025",
    },
    {
      icon: "⚡",
      title: "Renewable Energy",
      description:
        "Transitioning to 100% renewable energy sources for all operations and facilities.",
      target: "100% renewable by 2028",
    },
    {
      icon: "🏭",
      title: "Sustainable Supply Chain",
      description:
        "Ensuring ethical and sustainable practices throughout our entire supply chain.",
      target: "95% certified suppliers",
    },
  ];

  const initiatives = [
    {
      title: "Solar Power Deployment",
      description:
        "Installing solar panels across 50+ facilities to generate clean energy and reduce grid dependency. This initiative has already helped us reduce carbon emissions by 30% in participating locations.",
      impact: "15MW clean energy",
      image: "/images/solar.jpg",
    },
    {
      title: "Ocean Cleanup Project",
      description:
        "Partnering with marine conservation organizations to remove plastic waste from oceans and prevent future pollution through education and policy advocacy.",
      impact: "500 tons removed",
      image: "/images/ocean.jpg",
    },
    {
      title: "Green Building Program",
      description:
        "Constructing and retrofitting buildings with sustainable materials, energy-efficient systems, and green certifications like LEED and BREEAM.",
      impact: "25 certified buildings",
      image: "/images/building.jpg",
    },
  ];

  return (
    <div className="sustainability-page">
      {/* Hero Section */}
      <section className="page-hero" aria-labelledby="sustainability-heading">
        <Container>
          <h1 id="sustainability-heading">Our Sustainability Commitment</h1>
          <p>
            We're dedicated to creating lasting positive change for our planet
            through measurable actions, innovative solutions, and collaborative
            partnerships.
          </p>
        </Container>
      </section>

      {/* Goals Section */}
      <section className="content-section" aria-labelledby="goals-heading">
        <Container>
          <div className="section-header">
            <h2 id="goals-heading">Sustainability Goals</h2>
            <p>
              Our ambitious targets align with the UN Sustainable Development
              Goals and reflect our commitment to environmental stewardship.
            </p>
          </div>
          <Row className="goals-grid">
            {goals.map((goal, index) => (
              <Col key={index}>
                <Card className="h-100">
                  <Card.Body>
                    <div
                      className="text-center mb-3"
                      style={{ fontSize: "3rem" }}
                      aria-hidden="true"
                    >
                      {goal.icon}
                    </div>
                    <Card.Title as="h3" className="h5 mb-3">
                      {goal.title}
                    </Card.Title>
                    <Card.Text className="mb-3">{goal.description}</Card.Text>
                    <div className="mt-auto pt-3 border-top">
                      <small className="text-muted">
                        <strong>Target:</strong> {goal.target}
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Initiatives Section */}
      <section
        className="content-section"
        aria-labelledby="initiatives-heading"
      >
        <Container>
          <div className="section-header">
            <h2 id="initiatives-heading">Key Initiatives</h2>
            <p>
              Explore our flagship programs that are making a tangible
              difference in communities and ecosystems around the world.
            </p>
          </div>
          <div className="space-y-4">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="mb-4">
                <Row className="g-0 initiative-card align-items-center">
                  <Col md={4}>
                    <div className="initiative-image">
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x300?text=" +
                            initiative.title;
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="initiative-content">
                      <Card.Title as="h3" className="h4">
                        {initiative.title}
                      </Card.Title>
                      <Card.Text>{initiative.description}</Card.Text>
                      <div className="mt-3">
                        <span className="badge bg-success fs-6 px-3 py-2">
                          Impact: {initiative.impact}
                        </span>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Progress Section */}
      <section className="content-section" aria-labelledby="progress-heading">
        <Container>
          <div className="section-header text-center">
            <h2 id="progress-heading">Our Progress</h2>
            <p>
              Tracking our journey towards a sustainable future with transparent
              metrics and regular updates.
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="text-center h-100 border-primary">
                <Card.Body>
                  <div className="display-4 fw-bold text-primary mb-2">50%</div>
                  <Card.Text className="text-muted">
                    Carbon Emissions Reduced
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center h-100 border-success">
                <Card.Body>
                  <div className="display-4 fw-bold text-success mb-2">85%</div>
                  <Card.Text className="text-muted">
                    Waste Diverted from Landfills
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center h-100 border-info">
                <Card.Body>
                  <div className="display-4 fw-bold text-info mb-2">70%</div>
                  <Card.Text className="text-muted">
                    Renewable Energy Usage
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center h-100 border-warning">
                <Card.Body>
                  <div className="display-4 fw-bold text-warning mb-2">2M+</div>
                  <Card.Text className="text-muted">
                    Trees Planted to Date
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Sustainability;
