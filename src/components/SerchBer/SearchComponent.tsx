import React, { useState } from 'react';

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  return (
    <div className="flex flex-col rounded-2xl items-center mb-5 p-4 bg-gray-100 bg-white dark:bg-black">
      <div className="w-full  max-w-md">
      <div className="flex mb-4">
          <input
            type="text"
            className="w-full p-2 border border-teal-500 shadow-xl rounded-l-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="p-2 bg-violet-600 text-white rounded-r-md hover:bg-violet-700 transition duration-300">
            Search
          </button>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <div className="flex-1">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
