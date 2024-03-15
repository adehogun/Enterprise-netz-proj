import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ handleSearch, setSearchTerm, searchTerm }) => {
  const [isFocused, setFocused] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    handleSearch(searchTerm);
  };

  return (
    <div className="wrapper-container">
      <div className="sticky top-0 bg-white z-10">
        <form className="container hidden lg:block" onSubmit={handleSearchSubmit}>
          <div className="flex justify-between items-center p-8">
            <h1 className="text-4xl font-medium"></h1>
            <div className="relative w-full max-w-[700px]">
              <input
                className="relative bg-opacity-80 bg-gray-800 text-black border-none outline-none px-19 py-3 rounded-[190px] w-full p-2 border mt-[-190px]"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Search products..."
                style={{ margin: '0 auto' }} // Centering the input horizontally
              />
              {isFocused && (
                <div className="absolute top-full left-0 w-full h-screen flex justify-center items-center">
                  {/* You can remove the faded background here */}
                </div>
              )}
            </div>
            <BsSearch className="absolute top-8 right-0 mt-4 mr-5 text-gray-500" size={20} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
