import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

interface Question {
  id: string;
  question: string;
}

interface Section {
  id: string;
  title: string;
  questions: Question[];
  results: {
    title: string;
    items: { id: string; text: string; link?: string }[];
  };
}

const Reporting: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const sections: Section[] = [
    {
      id: "governance",
      title: "Governance and Carbon commitments",
      questions: [
        {
          id: "gov_1",
          question:
            "Is the contract value more than £5 million per year (incl. VAT)?",
        },
        {
          id: "gov_2",
          question:
            "Do tender documents mention Net Zero by 2050 commitment or Carbon Reduction Plan (CRP)?",
        },
        {
          id: "gov_3",
          question:
            "Does the buyer require a published CRP on your UK website?",
        },
      ],
      results: {
        title: "Governance and Carbon commitments",
        items: [
          { id: "1", text: "PPN 006 (Carbon Reduction Plan)", link: "#" },
          { id: "2", text: "Joint Schedule 5", link: "#" },
        ],
      },
    },
    {
      id: "contract",
      title: "Contract-Level Carbon Requirements",
      questions: [
        {
          id: "con_1",
          question:
            'Does the tender include PPN 016 Carbon Reduction Contract Schedule or similar wording (e.g. "contract carbon footprint", "Emissions Reduction Target")?',
        },
        {
          id: "con_2",
          question:
            "Are you asked to report annual GHG emissions for the contract or provide a GHG reduction plan?",
        },
      ],
      results: {
        title: "Contract-Level Carbon Requirements",
        items: [
          {
            id: "3",
            text: "PPN 016 (Footprint, ERT, Annual reporting)",
            link: "#",
          },
        ],
      },
    },
    {
      id: "framework",
      title: "Framework-Level Sustainability Clauses",
      questions: [
        {
          id: "fra_1",
          question:
            "Is the procurement under a framework agreement that references Joint Schedule 5 (Sustainability)?",
        },
        {
          id: "fra_2",
          question:
            "Does the buyer require Modern Slavery Assessment Tool completion or Equality Duty compliance?",
        },
      ],
      results: {
        title: "Framework-Level Sustainability Clauses",
        items: [
          { id: "4", text: "Optional clauses:" },
          { id: "4a", text: "Modern slavery", link: "#" },
          { id: "4b", text: "Equality", link: "#" },
          { id: "4c", text: "Sustainability reporting", link: "#" },
        ],
      },
    },
    {
      id: "waste",
      title: "Waste and Resource Management",
      questions: [
        {
          id: "was_1",
          question:
            "Does the tender include Call-Off Schedule 25 or mention Waste Hierarchy compliance?",
        },
        {
          id: "was_2",
          question:
            "Are you required to use licensed waste carriers and provide waste data by disposal route?",
        },
        {
          id: "was_3",
          question:
            "Does the contract require environmental management systems (EMS) or ISO14001 certification?",
        },
      ],
      results: {
        title: "Waste & Resource Management",
        items: [{ id: "5", text: "Schedule 25", link: "#" }],
      },
    },
    {
      id: "recruitment",
      title: "Recruitment and Social Value",
      questions: [
        {
          id: "rec_1",
          question:
            "Does the tender require UK-based roles to be advertised on Find a Job?",
        },
        {
          id: "rec_2",
          question:
            "Are there social value or equality requirements beyond technical delivery?",
        },
      ],
      results: {
        title: "Recruitment and Social Value",
        items: [],
      },
    },
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getRelevantResults = () => {
    return sections.filter((section) =>
      section.questions.some((q) => answers[q.id] === "yes")
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Reporting Module",
    description: "Essential guidelines for SMEs engaging in public sector work",
  };

  if (showResults) {
    const relevantResults = getRelevantResults();

    return (
      <div className="reporting-page">
        <SEO
          title="Assessment Result"
          description="Your sustainability assessment results"
          keywords="sustainability assessment, reporting requirements"
          canonicalUrl="https://your-domain.com/reporting/results"
          structuredData={structuredData}
        />

        <div className="results-header">
          <Container>
            <Breadcrumb>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Assessment result</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="results-title">Assessment result</h1>
            <p className="results-subtitle">
              Essential guidelines for SMEs engaging in public sector work,
              including recommended software and platforms for effective
              sustainability reporting.
            </p>
          </Container>
        </div>

        <div className="results-content">
          <Container>
            {relevantResults.map((section) => (
              <div key={section.id} className="result-section">
                <h2 className="result-section-title">
                  {section.results.title}
                </h2>
                <ul className="result-list">
                  {section.results.items.map((item) => (
                    <li key={item.id}>
                      {item.link ? (
                        <a href={item.link} className="result-link">
                          {item.text}
                        </a>
                      ) : (
                        <span className="result-text">{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="results-actions">
              <Button variant="primary" size="lg" onClick={handleReset}>
                Take Assessment Again
              </Button>
            </div>
          </Container>
        </div>

        <div className="page-footer-bar"></div>
      </div>
    );
  }

  return (
    <div className="reporting-page">
      <SEO
        title="Reporting Module"
        description="Essential guidelines for SMEs engaging in public sector work"
        keywords="sustainability reporting, public sector, SME guidelines"
        canonicalUrl="https://your-domain.com/reporting"
        structuredData={structuredData}
      />

      <div className="reporting-header">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Reporting Module</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="page-title">Reporting Module</h1>
          <p className="page-subtitle">
            Essential guidelines for SMEs engaging in public sector work,
            including recommended software and platforms for effective
            sustainability reporting.
          </p>
        </Container>
      </div>

      <div className="reporting-content">
        <Container>
          {sections.map((section, sectionIndex) => (
            <div key={section.id} className="question-section">
              <div className="section-header">
                <span className="section-number">
                  {sectionIndex + 1} of {sections.length}
                </span>
                <h2 className="section-title">{section.title}</h2>
              </div>

              <div className="questions-list">
                {section.questions.map((question) => (
                  <Card key={question.id} className="question-card">
                    <Card.Body>
                      <p className="question-text">{question.question}</p>
                      <div className="radio-group">
                        {["yes", "no", "not-sure"].map((option) => (
                          <Form.Check
                            key={option}
                            type="radio"
                            id={`${question.id}-${option}`}
                            name={question.id}
                            label={
                              option === "yes"
                                ? "Yes"
                                : option === "no"
                                ? "No"
                                : "Not sure"
                            }
                            checked={answers[question.id] === option}
                            onChange={() =>
                              handleAnswerChange(question.id, option)
                            }
                            className="custom-radio"
                          />
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="action-buttons">
            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              disabled={Object.keys(answers).length === 0}
            >
              View my assessment result
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              onClick={handleReset}
              disabled={Object.keys(answers).length === 0}
            >
              Reset answers
            </Button>
          </div>
        </Container>
      </div>

      <div className="page-footer-bar"></div>
    </div>
  );
};

export default Reporting;
