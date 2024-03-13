import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${productId}`)
            .then((res) => {
                setProduct(res.data); // Set product details
            })
            .catch((error) => setError(error.message)); // Set error message
    }, [productId]);

    return (
        <div className="checkout">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            {product ? (
                <div>
                    <h2 className="text-xl font-bold mb-2">{product?.brand}</h2>
                    <p className="text-lg font-medium mb-2">{product?.category}</p>
                    <p className="mb-2">Discount: ${product?.discountPercentage}</p>
                    <p className="mb-2">Price: ${product?.price}</p>
                    <p className="mb-2">{product?.ratings}</p>
                    <p className="mb-2">Product Name: {product?.title}</p>
                    {/* Add more product details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Checkout;
