import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    
      <nav className="nav-bar">
        <h1>Noah Nigel </h1>
        <div
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/photo-gallery" className="home">
            Home
          </Link>

          <Link to="/about" className="about">
            About
          </Link>

          <Link to="/gallery" className="gallery">
            Gallery
          </Link>

          <Link to="/investment" className="investment">
            Investment
          </Link>

          <Link to="/projects" className="projects">
            Code
          </Link>

          {/* <Link to="/contact" className="contact">
            <li>Contact</li>
          </Link> */}
        </div>
        <button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
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
