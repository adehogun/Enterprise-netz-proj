

const SearchBar = ({handleSearch,setSearchTerm ,searchTerm}) => {

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    handleSearch(searchTerm);
  };
    
  return (
    <div className="mb-3 md:w-96">
    <form className="relative mb-4 flex w-full flex-wrap items-stretch" onSubmit={handleSearchSubmit}>
      <input
        type="search" 
        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  type="submit">Search</button>
    </form>
</div>
  );
}

export default SearchBar;
