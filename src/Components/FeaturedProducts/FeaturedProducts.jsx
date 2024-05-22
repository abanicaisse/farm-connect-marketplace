import React from "react";

import { Link } from "react-router-dom";

import { products } from "../../data/products";
import { Product } from "../";

import "./featured-products.css";

const FeaturedProducts = ({ cartItems, setCartItems }) => {
  let featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="featured">
      <h2>Featured Products</h2>
      <div className="featured__container">
        {featuredProducts.map((product, index, array) => {
          return (
            <Product
              key={index}
              productIndex={index}
              productList={array}
              img={product.img}
              productName={product.name}
              price={product.price}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          );
        })}
      </div>
      <Link className="button" to={"/products"}>
        View All Products
      </Link>
    </div>
  );
};

export default FeaturedProducts;
