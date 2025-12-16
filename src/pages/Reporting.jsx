import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
} from "react-bootstrap";

function Reporting() {
  const [filterYear, setFilterYear] = useState("all");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    document.title = "Reporting Module - Sustainability Portal";
  }, []);

  const reports = [
    {
      id: 1,
      title: "Annual Sustainability Report 2024",
      type: "annual",
      year: "2024",
      date: "December 2024",
      description:
        "Comprehensive overview of our sustainability performance, achievements, and future goals for 2024.",
      pages: 87,
      size: "12.5 MB",
    },
    {
      id: 2,
      title: "Q3 2024 Environmental Impact Report",
      type: "quarterly",
      year: "2024",
      date: "September 2024",
      description:
        "Detailed analysis of environmental metrics including emissions, water usage, and waste management for Q3.",
      pages: 34,
      size: "5.2 MB",
    },
    {
      id: 3,
      title: "Carbon Footprint Analysis 2024",
      type: "special",
      year: "2024",
      date: "August 2024",
      description:
        "In-depth carbon footprint analysis across all operations with reduction strategies and targets.",
      pages: 45,
      size: "8.1 MB",
    },
    {
      id: 4,
      title: "Annual Sustainability Report 2023",
      type: "annual",
      year: "2023",
      date: "December 2023",
      description:
        "Complete sustainability performance review for 2023 with key achievements and lessons learned.",
      pages: 82,
      size: "11.8 MB",
    },
    {
      id: 5,
      title: "Water Conservation Report 2024",
      type: "special",
      year: "2024",
      date: "July 2024",
      description:
        "Comprehensive report on water usage, conservation initiatives, and efficiency improvements.",
      pages: 28,
      size: "4.3 MB",
    },
    {
      id: 6,
      title: "Q2 2024 Progress Report",
      type: "quarterly",
      year: "2024",
      date: "June 2024",
      description:
        "Quarter 2 sustainability metrics, project updates, and stakeholder engagement summary.",
      pages: 31,
      size: "5.8 MB",
    },
  ];

  const stats = [
    { value: "24", label: "Published Reports" },
    { value: "98%", label: "Data Accuracy" },
    { value: "10K+", label: "Downloads" },
    { value: "100%", label: "Transparency" },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesYear = filterYear === "all" || report.year === filterYear;
    const matchesType = filterType === "all" || report.type === filterType;
    return matchesYear && matchesType;
  });

  const getTypeVariant = (type) => {
    switch (type) {
      case "annual":
        return "primary";
      case "quarterly":
        return "success";
      case "special":
        return "info";
      default:
        return "secondary";
    }
  };

  const getTypeLabel = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="reporting-page">
      <Container>
        {/* Page Header */}
        <div className="page-header">
          <h1>Sustainability Reports</h1>
          <p>
            Access our comprehensive sustainability reports with transparent
            data, measurable outcomes, and third-party verification.
          </p>
        </div>

        {/* Stats Section */}
        <div className="report-stats">
          <Row className="stats-row">
            {stats.map((stat, index) => (
              <Col key={index}>
                <div className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Filters */}
        <div className="reporting-filters">
          <Row className="filter-row">
            <Col md={4}>
              <Form.Group>
                <Form.Label htmlFor="filter-year">Filter by Year</Form.Label>
                <Form.Select
                  id="filter-year"
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  aria-label="Filter reports by year"
                >
                  <option value="all">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label htmlFor="filter-type">Filter by Type</Form.Label>
                <Form.Select
                  id="filter-type"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  aria-label="Filter reports by type"
                >
                  <option value="all">All Types</option>
                  <option value="annual">Annual Reports</option>
                  <option value="quarterly">Quarterly Reports</option>
                  <option value="special">Special Reports</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4} className="d-flex align-items-end">
              <Button
                variant="outline-primary"
                className="w-100"
                onClick={() => {
                  setFilterYear("all");
                  setFilterType("all");
                }}
              >
                Reset Filters
              </Button>
            </Col>
          </Row>
        </div>

        {/* Reports Grid */}
        <Row className="reports-grid">
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <Col key={report.id}>
                <Card className="h-100 report-card">
                  <Card.Body className="d-flex flex-column">
                    <div className="report-meta">
                      <Badge bg={getTypeVariant(report.type)}>
                        {getTypeLabel(report.type)}
                      </Badge>
                      <span>{report.date}</span>
                    </div>
                    <Card.Title as="h3" className="h5 mb-3">
                      {report.title}
                    </Card.Title>
                    <Card.Text className="flex-grow-1">
                      {report.description}
                    </Card.Text>
                    <div className="report-details text-muted small mb-3">
                      <div>📄 {report.pages} pages</div>
                      <div>💾 {report.size}</div>
                    </div>
                    <div className="report-actions">
                      <Button variant="primary" size="sm">
                        View Report
                      </Button>
                      <Button variant="outline-primary" size="sm">
                        Download
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <Card className="text-center p-5">
                <Card.Body>
                  <p className="mb-0">
                    No reports found matching your filters. Please adjust your
                    selection.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        {/* Certification Section */}
        <section className="mt-5 pt-5 border-top">
          <div className="text-center mb-4">
            <h2>Certifications & Verification</h2>
            <p className="text-muted">
              All our reports are independently verified and aligned with
              international standards
            </p>
          </div>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <Card className="text-center h-100">
                <Card.Body>
                  <div className="fs-1 mb-2">✓</div>
                  <Card.Title className="h6">GRI Standards</Card.Title>
                  <Card.Text className="small text-muted">
                    Global Reporting Initiative
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="text-center h-100">
                <Card.Body>
                  <div className="fs-1 mb-2">✓</div>
                  <Card.Title className="h6">CDP Disclosure</Card.Title>
                  <Card.Text className="small text-muted">
                    Carbon Disclosure Project
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="text-center h-100">
                <Card.Body>
                  <div className="fs-1 mb-2">✓</div>
                  <Card.Title className="h6">SASB Standards</Card.Title>
                  <Card.Text className="small text-muted">
                    Sustainability Accounting
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="text-center h-100">
                <Card.Body>
                  <div className="fs-1 mb-2">✓</div>
                  <Card.Title className="h6">ISO 14001</Card.Title>
                  <Card.Text className="small text-muted">
                    Environmental Management
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Reporting;
