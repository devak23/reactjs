import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="nav-wrapper green darken-4">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
