import React from 'react';
import { Card, Form } from 'react-bootstrap';

export interface QuestionCardProps {
  id: string;
  question: string;
  impact: string;
  clause: string;
  answer: boolean | null;
  onAnswer: (questionId: string, answer: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  question,
  impact,
  clause,
  answer,
  onAnswer
}) => {
  return (
    <Card className={`question-card mb-3 ${answer !== null ? 'answered' : ''} ${answer === true ? 'answered-yes' : answer === false ? 'answered-no' : ''}`}>
      <Card.Body>
        <div className="question-header mb-3">
          <h5 className="question-text">{question}</h5>
        </div>
        
        <Form>
          <div className="answer-options d-flex gap-3 mb-3">
            <Form.Check
              type="radio"
              id={`${id}-yes`}
              name={id}
              label="Yes"
              checked={answer === true}
              onChange={() => onAnswer(id, true)}
              className="answer-option answer-yes"
            />
            <Form.Check
              type="radio"
              id={`${id}-no`}
              name={id}
              label="No"
              checked={answer === false}
              onChange={() => onAnswer(id, false)}
              className="answer-option answer-no"
            />
          </div>
        </Form>

        {answer === true && (
          <div className="impact-banner">
            <div className="impact-badge">
              <span className="badge bg-primary">{clause}</span>
            </div>
            <p className="impact-text mb-0">
              <strong>Impact:</strong> {impact}
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
