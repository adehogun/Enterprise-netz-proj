import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const ProductsList = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (searchTerm) {
            axios
                .get(`https://dummyjson.com/products/search?q=${searchTerm}`)
                .then((res) => {
                    setApiData(res.data.products.slice(0, 1)); // Limit to first 4 items
                })
                .catch((error) => setError(error.message)); // Set error message
        }
    }, [searchTerm]);

    // Function to handle search
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="prod">
            <SearchBar handleSearch={handleSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            {apiData?.map(product => (
                <div key={product.id} className="mb-6">
                    <h2 className="text-xl font-bold underline mb-2">{product?.brand}</h2>
                    <p className="text-lg font-medium mb-2">{product?.category}</p>
                    <p className="mb-2">Discount: ${product?.discountPercentage}</p>
                    <p className="mb-2">Price: ${product?.price}</p>
                    <p className="mb-2">{product?.ratings}</p>
                    <p className="mb-2">Product Name: {product?.title}</p>
                    <div className="flex justify-center flex-wrap">
                        {product.images.slice(0,1).map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Product ${product.id} - Image ${index + 1}`} className="h-25 w-25 object-cover rounded-lg" />
                        ))}
                    </div>
                    <Link to={`/checkout/${product?.id}`} className="block mt-2 text-blue-500 hover:underline">Buy</Link>
                    {/* Add more product details as needed */}
                </div>
            ))}
        </div>
    );
}

export default ProductsList;
