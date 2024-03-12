import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const ProductsList = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState("");

    // Import at render
    // useEffect(() => {
      // axios
      // .get("https://dummyjson.com/products")
        // .then((res) => {
          // setApiData(res.data.products);
          
        // })
        // .catch((error) => setError(error.message)); // Set error message
    // }, []);

    // Import at searchterm changes
    useEffect(() => {
      if (searchTerm) {
 
        axios
        .get(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then((res) => {
          setApiData(res.data.products);
        })
        .catch((error) => setError(error.message)); // Set error message
      }
      }, [searchTerm]);


      // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

    return (
      <div>
        <h1>This is the Product List</h1>
        <SearchBar handleSearch={handleSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        {apiData?.map(product => (
          <div key={product.id}>
            {/* Rendering product details using map*/}
            <h2>{product?.brand}</h2>
            <p>{product?.category}</p>
            <p>Discount:${product?.discountPercentage}</p>
            <p>Price: ${product?.price}</p>
            <p>{product?.ratings}</p>
            {/* <p>{product?.thumbnail}</p> */}
            <p>Product Name: {product?.title}</p>
            <div className="image-container">
            {product.images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Product ${product.id} - Image ${index + 1}`} />
              ))}
            </div>
            <Link to={`/products/${product?.id}`}>Click for More</Link>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    );
}

export default ProductsList;
