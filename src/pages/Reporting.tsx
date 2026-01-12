import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "@/components/SEO";
import PageHeader from "@/components/common/PageHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Reporting: React.FC = () => {
  useScrollToTop();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Reporting Module",
    description:
      "Publicly available tools and resources for supporting your business sustainability governance and reporting requirements",
  };

  return (
    <div className="reporting-page">
      <SEO
        title="Reporting Module"
        description="Publicly available tools and resources for supporting your business sustainability governance and reporting requirements"
        keywords="sustainability reporting, public sector, SME guidelines, carbon calculator tools"
        canonicalUrl="https://your-domain.com/reporting"
        structuredData={structuredData}
      />

      <PageHeader
        title="Reporting Module"
        subtitle="In this module, you will find publicly available tools and resources for supporting your business fulfil the sustainability governance and reporting requirements that make up your public sector contract."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Reporting Module" },
        ]}
        showLogos={false}
      />

      <div className="reporting-content">
        <Container fluid>
          <p className="intro-text">
            Once you've agreed and understood your contract's sustainability
            requirements, it's important to know which tools are available to
            help you meet the obligations that apply to you. Here you will find
            UK centred tools and resources that focus on small to medium sized
            businesses
          </p>

          {/* Net-Zero Transformation Resources */}
          <section className="resource-section">
            <h2 className="section-title">Net-Zero Transformation Resources</h2>
            <ul className="resource-list">
              <li>
                <a
                  href="https://businessclimatehub.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  UK Business Climate Hub – businessclimatehub.uk
                </a>
                <ul className="sub-list">
                  <li>
                    Partnership between the UK government and global SME Climate
                    Hub initiative. Provides tailored guidance including:
                    events, finance and support, research partnerships and
                    consultancy options.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://sciencebasedtargets.org/standards-and-guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Science Based Targets Initiative (SBTi)-
                  sciencebasedtargets.org
                </a>
                <ul className="sub-list">
                  <li>
                    A globally recognised framework for setting
                    emissions-reduction targets that align with the latest
                    climate science, helping businesses credibly plan their
                    decarbonisation journey.
                  </li>
                  <li>
                    Includes open-source, sector-specific standards, tools and
                    guidance for companies setting GHG emission reduction
                    targets.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.carbonfootprint.com/sciencebasedtargets.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Carbon Footprint – Strategic Services
                </a>
                <ul className="sub-list">
                  <li>
                    Comprehensive climate strategy reporting suite for
                    'micro-businesses' - supporting Carbon Offsetting, Target
                    Setting, Net Zero planning and more.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Carbon Calculator Tools */}
          <section className="resource-section">
            <h2 className="section-title">Carbon Calculator Tools</h2>
            <ul className="resource-list">
              <li>
                <a
                  href="https://www.carbontrust.com/our-work-and-impact/guides-reports-and-tools/sme-carbon-footprint-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Carbon Trust – SME Carbon Footprint Calculator
                </a>
                <ul className="sub-list">
                  <li>
                    Designed specifically for UK based SMEs, this tool helps
                    measure the annual Scope1 and Scope2 Emissions of your
                    business.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.carbonfootprint.com/netzerostandard.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Carbon Footprint – Sustrax Carbon Calculator
                </a>
                <ul className="sub-list">
                  <li>
                    Sustrax Lite offers a free service helping single-site small
                    businesses measure, manage and report GHG emissions; Sustrax
                    MX is available for larger organisations with complex
                    operations and supply chains.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://smeclimatehub.org/start-measuring/#block-small-business-carbon-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  SME Climate Hub: Small Business Carbon Calculator
                </a>
                <ul className="sub-list">
                  <li>
                    Tool for businesses with a single operating site and 1-50
                    employees, covering Scope1, Scope2 and Scope3 emissions.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Carbon Reporting Tools */}
          <section className="resource-section">
            <h2 className="section-title">Carbon Reporting Tools</h2>
            <ul className="resource-list">
              <li>
                <a
                  href="https://www.seedling.earth/solution/ppn-06-21-carbon-reduction-plan-guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Seedling – seedling.earth
                </a>
                <ul className="sub-list">
                  <li>
                    Subscription-based service designed to support SMEs and
                    B-Corps with full- business carbon accounting, data
                    management and reporting.
                  </li>
                  <li>
                    Includes dedicated PPN 006 compliant carbon reduction
                    planning tools and in- built reporting templates.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.ecohedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  EcoHedge – ecohedge.com
                </a>
                <ul className="sub-list">
                  <li>
                    Subscription-based minimal set-up carbon accounting
                    software, offering carbon reduction planning consultancy
                    services targeted at SMEs seeking compliance with PPN 06
                    issued contracts.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Education Resources */}
          <section className="resource-section">
            <h2 className="section-title">Education Resources</h2>
            <ul className="resource-list">
              <li>
                <a
                  href="https://www.bbk.ac.uk/courses/2025/short-courses/modules/isu-1/0000009N0/0/decarbonise-your-business-and-achieve-net-zero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Birkbeck University: Decarbonise Your Business and Achieve Net
                  Zero
                </a>
                <ul className="sub-list">
                  <li>
                    A concise course from Birkbeck that imparts practical
                    strategies and tools for small businesses to begin
                    decarbonising operations and work toward net-zero goals via
                    structured learning and expert insight
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </Container>
      </div>

      <div className="page-footer-bar"></div>
    </div>
  );
};

export default Reporting;
