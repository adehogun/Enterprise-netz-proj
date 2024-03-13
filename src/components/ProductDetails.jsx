import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ()=> {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState (null);

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${productId}?limit=10&skip=10&select=title,price`)
          .then((res) => {
            setProductDetails(res.data);
            console.log(res.data); // Log the entire response data
          })
          .catch((err) => setError(error.message)); // Set error message
      }, [productId]);


      return (
        <div>
            <h2>My Product Display</h2>
            <p> {productDetails.title}</p>
            <p> Description: {productDetails.title}</p>
            <p> Price: {productDetails.title}</p>
        </div>

      );

}



export default ProductDetails;