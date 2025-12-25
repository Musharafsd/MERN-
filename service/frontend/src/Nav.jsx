import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/first">Services</Link>
      <Link to="/search">Search</Link>
      <Link to="/add">Add Service</Link>
    </div>
  );
};

export default Nav;
