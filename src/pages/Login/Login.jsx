import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Footer } from "../../Components";

import "./login.css";

const Login = ({ cartItems, setCartItems }) => {
  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />

      <div className="login">
        <h1>Login</h1>
        <form action="">
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

          <button type="submit" className="orange-btn">
            Login
          </button>

          <button className="white-btn">
            <Link to={"/register"}>Don't have n account? (Register) </Link>
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
