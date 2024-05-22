import { React, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home, Login, Register, Products, Checkout, Cart } from "./pages";

import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/login"
          element={<Login cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/register"
          element={
            <Register cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/products"
          element={
            <Products cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </div>
  );
};

export default App;
