import React from "react";
import "../Css/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Fill out the form below and we'll get back
          to you as soon as possible.
        </p>
      </div>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" placeholder="Your Email" required />

        <label>Subject</label>
        <input type="text" placeholder="Subject" required />

        <label>Message</label>
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
