import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const ProductsList = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState(null);


    useEffect(() => {
        axios
        .get("https://dummyjson.com/products")
          .then((res) => {
            setApiData(res.data.products);
          
          })
          .catch((error) => setError(error.message)); // Set error message

          axios
          .get(`https://dummyjson.com/products/search?q=${searchTerm}`)
            .then((res) => {
              setSearchTerm(res.data.products);
            //   console.log(res.data.products); // Log the entire response data
            })
            .catch((error) => setError(error.message)); // Set error message
      }, [searchTerm]);

      // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

    return (
      <div>
        <h1>This is the Product List</h1>
        <SearchBar onSearch={handleSearch} />
        {apiData.products?.map(product => (
          <div key={product.id}>
            {/* Rendering product details using map*/}
            <h2>{product.brand}</h2>
            <p>{product.category}</p>
            <p>{product.images}</p>
            <p>{product.discountPercentage}</p>
            <p>Price: ${product.price}</p>
            <p>{product.ratings}</p>
            <p>{product.thumbnail}</p>
            <p>{product.title}</p>
            <Link to={`/products/${product.id}`}>Click for More</Link>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    );
}

export default ProductsList;
