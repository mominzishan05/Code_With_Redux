import React from "react";
import "../Css/InfoPage.css";
import { Link } from "react-router-dom";
const InfoPage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Shop the Best Deals Online</h1>
          <p>Discover trending fashion, electronics, and more at unbeatable prices.</p>
          <Link to="/"><button className="shop-btn">Shop Now</button></Link>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80" alt="Fashion" />
            <p>Fashion</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" alt="Electronics" />
            <p>Electronics</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80" alt="Home" />
            <p>Home & Living</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80" alt="Beauty" />
            <p>Beauty</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <h2>Popular Products</h2>
        <div className="product-grid">
          <div className="product-card">
            {/* <img src="https://images.unsplash.com/photo-1512499617640-c2f999018b72?auto=format&fit=crop&w=400&q=80" alt="Sneakers" /> */}
            <h3>Stylish Sneakers</h3>
            <p>$25.00</p>
           <Link to="/"> <button>Go To Shop</button></Link>
          </div>
          <div className="product-card">
            {/* <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1e1?auto=format&fit=crop&w=400&q=80" alt="Headphones" /> */}
            <h3>Wireless Headphones</h3>
            <p>$40.00</p>
           <Link to="/"> <button>Go To Shop</button></Link>
          </div>
          <div className="product-card">
            {/* <img src="https://images.unsplash.com/photo-1606813909355-9ffb9a1b2bc2?auto=format&fit=crop&w=400&q=80" alt="Smartwatch" /> */}
            <h3>Smartwatch</h3>
            <p>$15.00</p>
           <Link to="/"> <button>Go To Shop</button></Link>
          </div>
          <div className="product-card">
            {/* <img src="https://images.unsplash.com/photo-1596464716122-9a4588ab3d1c?auto=format&fit=crop&w=400&q=80" alt="Backpack" /> */}
            <h3>Trendy Backpack</h3>
            <p>$60.00</p>
           <Link to="/"> <button>Go To Shop</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default InfoPage;
