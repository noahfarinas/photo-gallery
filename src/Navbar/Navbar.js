import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="nav-bar">
      <h1>Noah Nigel </h1>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/photo-gallery" className="home">
          <li>Home</li>
        </Link>

        <Link to="/about" className="about">
          <li>About</li>
        </Link>

        <Link to="/Gallery" className="gallery">
          <li>Gallery</li>
        </Link>

        <Link to="/investment" className="investment">
          <li>Investment</li>
        </Link>

        {/* <Link to="/contact" className="contact">
            <li>Contact</li>
          </Link> */}
      </ul>
      <button className="mobile-menu"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
