'use client'
import React, { useState, SyntheticEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <div className="flex items-center mx-auto my-8">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
