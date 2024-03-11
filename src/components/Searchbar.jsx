import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    onSearch(searchTerm);
  };
    
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text" 
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      <button type="submit">Search</button>
    </form>

  );
}

export default SearchBar;
