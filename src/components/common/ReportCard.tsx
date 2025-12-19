import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

export interface Report {
  id: number;
  title: string;
  type: string;
  year: string;
  date: string;
  description: string;
  pages: number;
  size: string;
}

export interface ReportCardProps {
  report: Report;
  onDownload?: (reportId: number) => void;
  className?: string;
}

const ReportCard: React.FC<ReportCardProps> = ({
  report,
  onDownload,
  className = "",
}) => {
  const getTypeVariant = (type: string) => {
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

  return (
    <Card className={`h-100 ${className}`}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Badge bg={getTypeVariant(report.type)} className="text-capitalize">
            {report.type}
          </Badge>
          <small className="text-muted">{report.date}</small>
        </div>
        <Card.Title as="h3" className="h5">
          {report.title}
        </Card.Title>
        <Card.Text className="text-muted mb-3">{report.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
          <span>📄 {report.pages} pages</span>
          <span>💾 {report.size}</span>
        </div>
        <Button
          variant="primary"
          className="w-100"
          onClick={() => onDownload?.(report.id)}
          aria-label={`Download ${report.title}`}
        >
          Download Report
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ReportCard;
