import React from "react";

import { Navbar, Footer } from "../../Components";

import "./checkout.css";

const Checkout = ({ cartItems, setCartItems }) => {
  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />

      <div className="checkout">
        <h1>Checkout page</h1>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
