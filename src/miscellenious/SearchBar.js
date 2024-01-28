import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className=" p-30 m-3  h-30 flex-shrink-0 rounded-full bg-gray-300">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-full rounded-full border-none  bg-gray-300 outline-none pl-4"
      ></input>
      {/* <button
        onClick={handleSearch}
        className="w-12 h-full flex items-center justify-center bg-gray-300 rounded-full"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button> */}
    </div>
  );
};

export default SearchBar;
