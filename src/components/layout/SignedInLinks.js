import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" />
        New Project
      </li>
      <li>
        <NavLink to="/" />
        Log Out
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1" />
        NN
      </li>
    </ul>
  );
};

export default SignedInLinks;
