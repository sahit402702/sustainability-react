import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
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

        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </Container>
    </div>
  );
};

export default PageHeader;
