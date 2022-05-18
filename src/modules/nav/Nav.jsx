import React from "react";
import "./nav.css";

const Nav = () => {

  return (
    <div className="main">
      <div className="navbar">
        <ul className="uList">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/pictures">Pictures</a>
          </li>
          <li>
          <a href="/about-us">About us</a>
          </li>
          <li>
          <a href="/contacts">Contacts</a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Nav;
