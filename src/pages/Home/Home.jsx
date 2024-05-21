import React from "react";
import { Link } from "react-router-dom";

import {
  AboutUs,
  FeaturedProducts,
  Footer,
  Navbar,
  Partners,
} from "../../Components";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="home__hero-container">
        <div className="home__hero">
          <div className="home__hero--text">
            <h1>Farm-Connect</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link className="button" to={"/products"}>
              Our Products
            </Link>
          </div>
        </div>
      </div>

      <FeaturedProducts />

      <AboutUs />

      <Partners />

      <Footer />
    </div>
  );
};

export default Home;
