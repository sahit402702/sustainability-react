import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SEO from '@/components/SEO';
import PageHeader from '@/components/common/PageHeader';
import FilterButtons from '@/components/common/FilterButtons';
import CaseStudyCard from '@/components/common/CaseStudyCard';
import caseStudiesData from '@/content/caseStudies.json';
import headings from '@/content/headings.json';

const CaseStudy: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Sustainability Case Studies',
    description: headings.caseStudies.subtitle,
  };

  const filteredCaseStudies = caseStudiesData.items.filter(
    (study) => activeFilter === 'all' || study.category === activeFilter
  );

  return (
    <div className="casestudy-page">
      <SEO
        title="Sustainability Case Studies - Real-World Environmental Impact"
        description={headings.caseStudies.subtitle}
        keywords="sustainability case studies, renewable energy projects, waste reduction, water conservation"
        canonicalUrl="https://your-domain.com/case-studies"
        structuredData={structuredData}
      />
      <Container>
        <PageHeader title={headings.caseStudies.title} subtitle={headings.caseStudies.subtitle} />

        <FilterButtons
          filters={caseStudiesData.filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="mb-5"
        />

        <div className="case-studies-list">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CaseStudy;
