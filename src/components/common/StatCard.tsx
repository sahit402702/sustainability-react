import React from "react";
import { Card } from "react-bootstrap";

export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  className = "",
}) => {
  return (
    <Card className={`text-center ${className}`}>
      <Card.Body>
        <h2 className="display-4 mb-2">{value}</h2>
        <p className="text-muted mb-0">{label}</p>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
