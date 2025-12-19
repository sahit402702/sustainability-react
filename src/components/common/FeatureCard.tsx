import React from "react";
import { Card, Col } from "react-bootstrap";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  className = "",
}) => {
  return (
    <Col md={6} lg={3} className={className}>
      <Card className="h-100 text-center">
        <Card.Body>
          <div className="card-icon mb-3" aria-hidden="true">
            {feature.icon}
          </div>
          <Card.Title as="h3" className="h5 mb-3">
            {feature.title}
          </Card.Title>
          <Card.Text className="text-muted">{feature.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FeatureCard;
