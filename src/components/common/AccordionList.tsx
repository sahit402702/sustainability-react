import React from "react";
import { Accordion } from "react-bootstrap";

export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionListProps {
  items: AccordionItem[];
  className?: string;
}

const AccordionList: React.FC<AccordionListProps> = ({
  items,
  className = "",
}) => {
  return (
    <Accordion className={className}>
      {items.map((item, index) => (
        <Accordion.Item key={index} eventKey={String(index)}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionList;
