import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Footer } from "../../Components";

import "./register.css";

const Register = ({ cartItems, setCartItems }) => {
  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />

      <div className="login">
        <h1>Register</h1>
        <form action="">
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Enter your Full Name"
          />

          <input
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />

          <div className="orange-btn">Register</div>

          <div className="white-btn">
            <Link to={"/login"}>Already have an account? (Login) </Link>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Register;
