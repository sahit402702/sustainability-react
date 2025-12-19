import React from "react";
import { Button } from "react-bootstrap";

export interface FilterOption {
  id: string;
  label: string;
}

export interface FilterButtonsProps {
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  className?: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  className = "",
}) => {
  return (
    <div className={`filter-buttons d-flex flex-wrap gap-2 ${className}`}>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "primary" : "outline-primary"}
          onClick={() => onFilterChange(filter.id)}
          aria-pressed={activeFilter === filter.id}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
