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

          <div className="orange-btn">Login</div>

          <div className="white-btn">
            <Link to={"/register"}>Don't have an account? (Register) </Link>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
