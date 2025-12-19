import React from "react";
import { Card } from "react-bootstrap";

export interface Goal {
  icon: string;
  title: string;
  description: string;
  target: string;
}

export interface GoalCardProps {
  goal: Goal;
  className?: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal, className = "" }) => {
  return (
    <Card className={`h-100 ${className}`}>
      <Card.Body>
        <div className="card-icon text-center mb-3" aria-hidden="true">
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
  );
};

export default GoalCard;
