import React, { useState } from "react";
import "../Css/Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.carts.items);
  const cartCount = cartItems.length;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">ShopWithMe</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/cart" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
          Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
        <NavLink to="/login" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>Login</NavLink>
      </div>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
