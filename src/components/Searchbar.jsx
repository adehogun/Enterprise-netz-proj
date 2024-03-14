import { BsSearch } from "react-icons/bs";

const SearchBar = ({handleSearch,setSearchTerm ,searchTerm}) => {

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    handleSearch(searchTerm);
  };
    
  return (
    <div className="sticky top-0 bg-white z-10">
    <form className="container hidden lg:block" onSubmit={handleSearchSubmit}>
      <div className="flex justify-between items-center p-8">
      <h1 className="text-4xl font-medium"></h1>
      <div className="relative w-full max-w-[500px]">

  
      <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      
       </div>
       <BsSearch className="absolute top-8 right-0 mt-4 mr-5 text-gray-500 "  size={20} />
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  type="submit">Search</button> */}
      </div>
    </form>
</div>
  );
}

export default SearchBar;
