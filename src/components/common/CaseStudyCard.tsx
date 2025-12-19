import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";

export interface CaseStudy {
  id: number;
  category: string;
  title: string;
  location: string;
  date: string;
  duration: string;
  image: string;
  description: string;
  impact: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onViewDetails?: (id: number) => void;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  className = "",
}) => {
  return (
    <Card className={`mb-4 ${className}`}>
      <Row className="g-0 initiative-card align-items-center">
        <Col md={4}>
          <div
            className="case-study-image"
            role="img"
            aria-label={caseStudy.title}
          >
            <img src={caseStudy.image} alt={caseStudy.title} />
          </div>
        </Col>
        <Col md={8}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <Badge bg="success" className="text-capitalize">
                {caseStudy.category}
              </Badge>
              <small className="text-muted">
                📍 {caseStudy.location} | {caseStudy.date}
              </small>
            </div>
            <Card.Title as="h3" className="h5 mb-2">
              {caseStudy.title}
            </Card.Title>
            <Card.Text className="mb-3">{caseStudy.description}</Card.Text>
            <div className="mb-3">
              <strong className="text-success">Impact: </strong>
              <span>{caseStudy.impact}</span>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <Badge bg="light" text="dark">
                Duration: {caseStudy.duration}
              </Badge>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CaseStudyCard;
