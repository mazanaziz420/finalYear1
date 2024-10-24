import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const categories = ['Marque', 'Apartments', 'Guest House'];

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        className="flex items-center px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
        onClick={toggleFilterVisibility}
      >
        <FaFilter className="mr-2" />
        Filter
      </button>
      {isFilterVisible && (
        <div className="flex justify-center space-x-4 p-4 mt-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setIsFilterVisible(false); // Hide filter options after selecting
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
