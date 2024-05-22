import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Footer } from "../../Components";

import "./cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />

      <h1>Full Cart Page</h1>

      <Footer />
    </>
  );
};

export default Cart;
