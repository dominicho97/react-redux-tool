import React from "react";
import { link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <link to="/" className="brand-logo">
          MarioPlan
        </link>
      </div>
    </nav>
  );
};

export default Navbar;
