import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SEO from '@/components/SEO';
import PageHeader from '@/components/common/PageHeader';
import StatCard from '@/components/common/StatCard';
import ReportCard from '@/components/common/ReportCard';
import reportsData from '@/content/reports.json';
import headings from '@/content/headings.json';

const Reporting: React.FC = () => {
  const [filterYear, setFilterYear] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sustainability Reporting',
    description: headings.reporting.subtitle,
  };

  const filteredReports = reportsData.items.filter((report) => {
    const matchesYear = filterYear === 'all' || report.year === filterYear;
    const matchesType = filterType === 'all' || report.type === filterType;
    return matchesYear && matchesType;
  });

  return (
    <div className="reporting-page">
      <SEO
        title="Sustainability Reporting - ESG Data & Analytics"
        description={headings.reporting.subtitle}
        keywords="ESG reports, sustainability data, carbon footprint, environmental reporting"
        canonicalUrl="https://your-domain.com/reporting"
        structuredData={structuredData}
      />
      <Container>
        <PageHeader title={headings.reporting.title} subtitle={headings.reporting.subtitle} />

        <div className="report-stats mb-5">
          <Row className="g-4">
            {reportsData.stats.map((stat, index) => (
              <Col key={index} sm={6} lg={3}>
                <StatCard value={stat.value} label={stat.label} />
              </Col>
            ))}
          </Row>
        </div>

        <div className="report-filters mb-4">
          <Row className="g-3">
            <Col md={6}>
              <Form.Select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                aria-label="Filter by year"
              >
                <option value="all">All Years</option>
                {reportsData.filters.years.filter((y) => y !== 'all').map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                aria-label="Filter by type"
              >
                {reportsData.filters.types.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </div>

        <Row className="g-4">
          {filteredReports.map((report) => (
            <Col key={report.id} md={6} lg={4}>
              <ReportCard report={report} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reporting;
