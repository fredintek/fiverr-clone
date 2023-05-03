import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span>
            <span className="text">Fiverr</span>
            <span className="dots">.</span>
          </span>
        </div>
        <div className="links"></div>
      </div>
    </div>
  );
};

export default Navbar;
