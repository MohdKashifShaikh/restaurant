import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";
import { BsFillBasketFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="flex-box container nav-bar">
      <div className="nav-logo">
        <NavLink to="">
          <img src={Logo} alt="logo" width={100} />
        </NavLink>
      </div>
      <div className="flex-box nav-links-items">
        <NavLink to="about">
          <h5>About</h5>
        </NavLink>
        <NavLink to="">
          <h5>Recipes</h5>
        </NavLink>
        <NavLink to="">
          <h5>Blog</h5>
        </NavLink>
        <NavLink to="">
          <h5>Horeca</h5>
        </NavLink>
        <button className="btn-green">Shop Online</button>
        <NavLink to="" style={{ fontSize: "1.4rem" }}>
          <BsFillBasketFill />
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
