import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import SEO from "@/components/SEO";
import QuestionCard from "@/components/common/QuestionCard";
import ResultsPanel from "@/components/common/ResultsPanel";
import questionnaireData from "@/content/questionnaire.json";

const Sustainability: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswer = (questionId: string, answer: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
    if (!showResults) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate applicable clauses
  const applicableClauses = useMemo(() => {
    const clauses = new Set<string>();
    
    questionnaireData.categories.forEach((category) => {
      category.questions.forEach((question) => {
        if (answers[question.id] === true) {
          clauses.add(question.clause);
        }
      });
    });

    return Array.from(clauses);
  }, [answers]);

  const totalQuestions = questionnaireData.categories.reduce(
    (sum, category) => sum + category.questions.length,
    0
  );
  const answeredQuestions = Object.keys(answers).length;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "UK Government Procurement Sustainability Clauses Questionnaire",
    description: "Interactive tool to identify applicable PPN 006, PPN 016, Joint Schedule 5, and Call-Off Schedule 25 clauses",
  };

  return (
    <div className="sustainability-page">
      <SEO
        title="UK Procurement Sustainability Assessment"
        description="Interactive questionnaire to determine which UK government procurement sustainability clauses apply to your contract"
        keywords="PPN 006, PPN 016, Joint Schedule 5, Call-Off Schedule 25, UK procurement, sustainability clauses, carbon reduction plan"
        canonicalUrl="https://your-domain.com/sustainability"
        structuredData={structuredData}
      />

      <section className="page-hero questionnaire-hero" aria-labelledby="sustainability-heading">
        <Container>
          <h1 id="sustainability-heading" className="display-4 mb-3">
            UK Government Procurement Sustainability Assessment
          </h1>
          <p className="lead">
            Answer the following questions to identify which sustainability clauses apply to your procurement contract
          </p>
        </Container>
      </section>

      <section className="questionnaire-section py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="questionnaire-intro mb-4">
                <Alert variant="info">
                  <Alert.Heading>How to Use This Assessment</Alert.Heading>
                  <p className="mb-0">
                    Answer each question based on your tender documents and procurement requirements. 
                    The tool will automatically identify which clauses (PPN 006, PPN 016, Joint Schedule 5, 
                    or Call-Off Schedule 25) apply to your contract.
                  </p>
                </Alert>
              </div>

              {questionnaireData.categories.map((category) => (
                <div key={category.id} className="category-section mb-5">
                  <Card className="category-header mb-3">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <span className="category-icon me-3">{category.icon}</span>
                        <div>
                          <h3 className="mb-1">{category.title}</h3>
                          <p className="text-muted mb-0 small">{category.description}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  {category.questions.map((question) => (
                    <QuestionCard
                      key={question.id}
                      id={question.id}
                      question={question.question}
                      impact={question.impact}
                      clause={question.clause}
                      answer={answers[question.id] ?? null}
                      onAnswer={handleAnswer}
                    />
                  ))}
                </div>
              ))}

              {answeredQuestions > 0 && (
                <div className="text-center mt-4">
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    onClick={handleReset}
                  >
                    Reset Assessment
                  </Button>
                </div>
              )}
            </Col>

            <Col lg={4}>
              <div className="sticky-results">
                <ResultsPanel
                  applicableClauses={applicableClauses}
                  clauseDetails={questionnaireData.clauses}
                  totalQuestions={totalQuestions}
                  answeredQuestions={answeredQuestions}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Sustainability;

