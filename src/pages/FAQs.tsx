import React, { useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import SEO from '@/components/SEO';
import PageHeader from '@/components/common/PageHeader';
import FilterButtons from '@/components/common/FilterButtons';
import AccordionList from '@/components/common/AccordionList';
import faqsContent from '@/content/faqs.json';
import headings from '@/content/headings.json';
import buttons from '@/content/buttons.json';

interface FAQ {
  category: string;
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is sustainability reporting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sustainability reporting is the disclosure of environmental, social, and governance (ESG) data and impacts.',
        },
      },
    ],
  };

  const filteredFAQs = faqsContent.items.filter((faq: FAQ) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="faqs-page">
      <SEO
        title="Frequently Asked Questions - Sustainability Portal"
        description={headings.faqs.subtitle}
        keywords="sustainability FAQs, environmental questions, ESG reporting, carbon offsetting, green certifications, sustainability partnerships"
        canonicalUrl="https://your-domain.com/faqs"
        structuredData={structuredData}
      />
      <Container>
        <PageHeader title={headings.faqs.title} subtitle={headings.faqs.subtitle} />

        <div className="faq-search">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search FAQs"
            />
          </Form.Group>
        </div>

        <FilterButtons
          filters={faqsContent.categories}
          activeFilter={activeCategory}
          onFilterChange={setActiveCategory}
          className="mb-4"
        />

        <div className="faqs-list">
          {filteredFAQs.length > 0 ? (
            <AccordionList items={filteredFAQs} />
          ) : (
            <Card className="text-center p-5">
              <Card.Body>
                <p className="mb-0">{headings.faqs.noResults}</p>
              </Card.Body>
            </Card>
          )}
        </div>

        <div className="faq-contact">
          <h3>{headings.faqs.contact.title}</h3>
          <p>{headings.faqs.contact.description}</p>
          <button className="btn btn-primary">{buttons.cta.contactUs}</button>
        </div>
      </Container>
    </div>
  );
};

export default FAQs;
