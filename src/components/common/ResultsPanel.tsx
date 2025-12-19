import React from 'react';
import { Card, Badge, ListGroup, Alert } from 'react-bootstrap';

interface ClauseDetails {
  name: string;
  description: string;
  trigger: string;
  requirements: string[];
}

export interface ResultsPanelProps {
  applicableClauses: string[];
  clauseDetails: Record<string, ClauseDetails>;
  totalQuestions: number;
  answeredQuestions: number;
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({
  applicableClauses,
  clauseDetails,
  totalQuestions,
  answeredQuestions
}) => {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;
  const isComplete = answeredQuestions === totalQuestions;

  return (
    <div className="results-panel">
      {/* Progress Indicator */}
      <Card className="mb-4 progress-card">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">Assessment Progress</h5>
            <Badge bg={isComplete ? 'success' : 'secondary'}>
              {answeredQuestions}/{totalQuestions}
            </Badge>
          </div>
          <div className="progress" style={{ height: '10px' }}>
            <div
              className={`progress-bar ${isComplete ? 'bg-success' : 'bg-primary'}`}
              role="progressbar"
              style={{ width: `${progressPercentage}%` }}
              aria-valuenow={answeredQuestions}
              aria-valuemin={0}
              aria-valuemax={totalQuestions}
            />
          </div>
        </Card.Body>
      </Card>

      {/* Results Summary */}
      {answeredQuestions > 0 && (
        <Card className="results-summary">
          <Card.Header>
            <h4 className="mb-0">
              {applicableClauses.length > 0 ? '📋 Applicable Clauses' : '✓ No Clauses Apply'}
            </h4>
          </Card.Header>
          <Card.Body>
            {applicableClauses.length === 0 ? (
              <Alert variant="info" className="mb-0">
                Based on your answers, no specific procurement sustainability clauses apply to your contract.
              </Alert>
            ) : (
              <div className="clauses-list">
                {applicableClauses.map((clauseKey) => {
                  const clause = clauseDetails[clauseKey];
                  return (
                    <Card key={clauseKey} className="clause-card mb-3">
                      <Card.Body>
                        <div className="clause-header mb-3">
                          <Badge bg="danger" className="me-2">APPLIES</Badge>
                          <h5 className="d-inline">{clause.name}</h5>
                        </div>
                        <p className="clause-description text-muted mb-3">
                          {clause.description}
                        </p>
                        <div className="clause-trigger mb-3">
                          <strong>When it applies:</strong> {clause.trigger}
                        </div>
                        <div className="clause-requirements">
                          <strong>Key Requirements:</strong>
                          <ListGroup variant="flush" className="mt-2">
                            {clause.requirements.map((req, index) => (
                              <ListGroup.Item key={index} className="px-0">
                                <span className="requirement-icon me-2">✓</span>
                                {req}
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            )}
          </Card.Body>
        </Card>
      )}

      {/* Call to Action */}
      {isComplete && applicableClauses.length > 0 && (
        <Alert variant="warning" className="mt-3">
          <Alert.Heading>Next Steps</Alert.Heading>
          <p className="mb-0">
            Review each applicable clause carefully and ensure your organization can meet all requirements before submitting your tender response.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default ResultsPanel;
