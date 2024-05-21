import React from "react";

import { Link } from "react-router-dom";

import { products } from "../../data/products";
import { Product } from "../";

import "./featured-products.css";

const FeaturedProducts = () => {
  let featuredProducts = products.filter((product) => product.featured);
  return (
    <div className="featured">
      <h2>Featured Products</h2>
      <div className="featured__container">
        {featuredProducts.map((product, index) => {
          return (
            <Product
              id={index}
              img={product.img}
              productName={product.name}
              price={product.price}
            />
          );
        })}
      </div>
      <Link to={"/products"}>View All Products</Link>
    </div>
  );
};

export default FeaturedProducts;
