import React from "react";

const Product = (product) => {

    return (
        <div key={product.id}>
          <h2>{title}</h2>
          <p>Description: {description}</p>
          <p>Price: ${price}</p>
          <p>Discount Percentage: {discountPercentage}%</p>
          <p>Rating: {rating}</p>
          <p>Stock: {stock}</p>
          <p>Brand: {brand}</p>
          <img src={thumbnail} alt={title}/>
        </div>
      );
    }
export default Product;