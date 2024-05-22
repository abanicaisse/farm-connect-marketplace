import { React, useState } from "react";
import { Link } from "react-router-dom";

import { QuickCart } from "../";

import "./navbar.css";

const Navbar = ({ cartItems, setCartItems }) => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const toggleCart = () => {
    setIsCartOpened(!isCartOpened);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to={"/"}>
            <img src="../../../src/assets/Logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="navbar__links">
          <a href="#about-us">About Us</a>
          <a href="#partners">Partners</a>
          <Link to={"/products"}>Products</Link>
        </div>

        <div className="navbar__login">
          <div className="navbar__login--search">
            <div
              className="navbar__login--search-cart"
              id="cart"
              onClick={toggleCart}
            >
              <img src="../../../src/assets/icons/cart-icon.svg" alt="Cart" />
              <p className="cart-count">{cartItems.length}</p>
            </div>
            <div className="navbar__login--search-search">
              <img
                src="../../../src/assets/icons/search-icon.svg"
                alt="Search"
              />
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

      {isCartOpened && (
        <QuickCart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </>
  );
};

export default Navbar;
