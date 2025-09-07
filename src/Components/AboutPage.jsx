import React from "react";
import "../Css/About.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are passionate about delivering the best
          experience to our users. Our team is dedicated to creating amazing
          products with care and innovation.
        </p>
      </div>

      <div className="about-cards">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To build solutions that make life easier and more enjoyable for
            everyone.
          </p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in delivering high-quality, user-friendly
            digital products.
          </p>
        </div>
        <div className="card">
          <h2>Our Team</h2>
          <p>
            A group of passionate developers, designers, and thinkers working
            together to achieve excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
