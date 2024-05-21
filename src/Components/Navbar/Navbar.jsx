import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="../../../src/assets/Logo.svg" alt="Logo" />
      </div>

      <div className="navbar__links">
        <a href="#">About Us</a>
        <a href="#">Partners</a>
        <Link to={"/products"}>Products</Link>
      </div>

      <div className="navbar__login">
        <div className="navbar__login--search">
          <div className="navbar__login--search-cart">
            <img src="../../../src/assets/icons/cart-icon.svg" alt="Cart" />
            <p className="cart-count">0</p>
          </div>
          <div className="navbar__login--search-search">
            <img src="../../../src/assets/icons/search-icon.svg" alt="Search" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
            />
          </div>
        </div>

        <Link className="navbar__login--login" to={"/login"}>
          Login/Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
