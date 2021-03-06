import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" />
        Signup
      </li>
      <li>
        <NavLink to="/" />
        Login
      </li>
    </ul>
  );
};

export default SignedOutLinks;
