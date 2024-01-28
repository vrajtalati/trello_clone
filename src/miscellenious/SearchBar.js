import React, { useState } from 'react';
import search from '../componenets/images/serachIcon.svg'


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="p-3 m-3 w-80 h-3 flex-shrink-0 rounded-full bg-gray-300 relative">
    <input
      type="text"
      placeholder=" "
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full h-full rounded-full border-none bg-gray-300 outline-none pl-4"
    />
    <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
      <img src={search} alt="Image" className="w-6 h-6" />
    </div>
  </div>
  
  );
};

export default SearchBar;
