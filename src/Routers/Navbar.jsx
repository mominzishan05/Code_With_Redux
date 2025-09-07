import React from "react";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.carts.items); // Redux cart items
  const cartCount = cartItems.length; 

  return (
    <div className="nav-box">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/cart">
          <li>Cart {cartCount > 0 && `(${cartCount})`}</li>
        </Link>
        <Link to="/login"><li>Login</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
