import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; path?: string }>;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  className = "",
}) => {
  return (
    <div className={`page-header ${className}`}>
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb>
            {breadcrumbs.map((crumb, index) => (
              <Breadcrumb.Item
                key={index}
                linkAs={crumb.path ? Link : undefined}
                linkProps={crumb.path ? { to: crumb.path } : undefined}
                active={index === breadcrumbs.length - 1}
              >
                {crumb.label}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}

        <Row className="align-items-start">
          <Col lg={8}>
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
          </Col>
          <Col
            lg={4}
            className="d-none d-lg-flex justify-content-end align-items-center"
          >
            <div className="d-flex align-items-center gap-2 gap-lg-3 flex-shrink-0">
              <img
                src="assets/cognizant_logo.svg"
                alt="Cognizant"
                className="page-header-logo"
                style={{ height: "30px", maxHeight: "30px" }}
              />
              <img
                src="assets/birkbeck_logo.svg"
                alt="Birkbeck"
                className="page-header-logo"
                style={{ height: "30px", maxHeight: "30px" }}
              />
            </div>
          </Col>
        </Row>

        {/* Logos on mobile and tablet - left aligned */}
        <div className="d-flex d-lg-none align-items-center mt-3">
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <img
              src="assets/cognizant_logo.svg"
              alt="Cognizant"
              className="page-header-logo"
              style={{ height: "28px", maxHeight: "28px" }}
            />
            <img
              src="assets/birkbeck_logo.svg"
              alt="Birkbeck"
              className="page-header-logo"
              style={{ height: "28px", maxHeight: "28px" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
