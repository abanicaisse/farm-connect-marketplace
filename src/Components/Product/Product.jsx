import React from "react";

import "./product.css";

const Product = ({ img, price, productName }) => {
  // const image = "../../../src/assets/products/fresh-eggs.png";

  return (
    <div className="product">
      <img src={img} alt="Product" />
      <div className="product__detail">
        <div>
          <p className="price">Ugx {price}</p>
          <p>{productName}</p>
        </div>
        <img src="../../../src/assets/icons/plus-icon.svg" alt="add" />
      </div>
    </div>
  );
};

export default Product;
