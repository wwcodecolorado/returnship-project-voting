import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <nav className="nav__large">
      
      <div className="nav__large-logo">
        <img src={Logo} alt="Career Returnship Logo" />
        <NavLink to="/">CAREER RETURNSHIP</NavLink>
      </div>

      <div className="spacer" />

      <NavLinks />
    </nav>
  );
}
