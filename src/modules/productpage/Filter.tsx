import React from 'react';

interface FilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  selectedCategory: string;
}

const Filter: React.FC<FilterProps> = ({ categories, onFilterChange, selectedCategory }) => {
  return (
    <div className="filter-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${selectedCategory === category || (category === 'All' && selectedCategory === '') ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;