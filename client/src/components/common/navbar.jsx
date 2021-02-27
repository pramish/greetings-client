import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper menu">
          <Link to="/">Greetings</Link>
        </div>
      </nav>
    </div>
  );
};
