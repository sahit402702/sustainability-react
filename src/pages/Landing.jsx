import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    document.title = "Sustainability Portal - Home";
  }, []);

  const features = [
    {
      icon: "🌍",
      title: "Global Impact",
      description:
        "Making a difference across continents with sustainable practices and environmental initiatives.",
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      description:
        "Comprehensive sustainability reports with real-time data and measurable outcomes.",
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description:
        "Engaging stakeholders and communities in our sustainability journey.",
    },
    {
      icon: "♻️",
      title: "Circular Economy",
      description:
        "Implementing circular economy principles to minimize waste and maximize resource efficiency.",
    },
    {
      icon: "⚡",
      title: "Clean Energy",
      description:
        "Transitioning to renewable energy sources and reducing carbon footprint.",
    },
    {
      icon: "🌱",
      title: "Innovation",
      description:
        "Pioneering sustainable technologies and solutions for environmental challenges.",
    },
  ];

  const stats = [
    { value: "50%", label: "Carbon Reduction" },
    { value: "1M+", label: "Trees Planted" },
    { value: "100+", label: "Active Projects" },
    { value: "30+", label: "Countries" },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={10} xl={8}>
              <div className="hero-content text-center">
                <h1 id="hero-heading">
                  Building a Sustainable Future Together
                </h1>
                <p className="lead">
                  Discover our commitment to environmental sustainability
                  through transparent reporting, innovative solutions, and
                  measurable impact.
                </p>
                <div className="hero-buttons">
                  <Button
                    as={Link}
                    to="/sustainability"
                    variant="light"
                    size="lg"
                    className="btn-lg"
                  >
                    Explore Our Work
                  </Button>
                  <Button
                    as={Link}
                    to="/reporting"
                    variant="outline-light"
                    size="lg"
                    className="btn-lg"
                  >
                    View Reports
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section" aria-labelledby="features-heading">
        <Container>
          <div className="section-title">
            <h2 id="features-heading">Why Choose Us</h2>
            <p>
              We're committed to driving positive environmental change through
              innovation, transparency, and collaboration.
            </p>
          </div>
          <Row className="feature-grid">
            {features.map((feature, index) => (
              <Col key={index}>
                <Card className="card-feature h-100">
                  <Card.Body>
                    <div className="card-icon" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <Card.Title as="h3">{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section" aria-labelledby="stats-heading">
        <Container>
          <div className="text-center mb-5">
            <h2 id="stats-heading">Our Impact in Numbers</h2>
          </div>
          <Row className="stats-grid">
            {stats.map((stat, index) => (
              <Col key={index}>
                <Card className="card-stat text-center h-100">
                  <Card.Body>
                    <Card.Title as="div">{stat.value}</Card.Title>
                    <Card.Text>{stat.label}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <Container>
          <h2 id="cta-heading">Ready to Make a Difference?</h2>
          <p>
            Join us in our mission to create a more sustainable world. Explore
            our case studies and see how we're making an impact.
          </p>
          <Button as={Link} to="/case-studies" variant="light" size="lg">
            View Case Studies
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Landing;
