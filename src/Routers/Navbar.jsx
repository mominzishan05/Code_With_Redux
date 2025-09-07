import React from "react";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <>
   <div className="nav-box">
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/login"><li>Login</li></Link>
    </ul>
   </div>
    </>
  );
};
export default Navbar;
