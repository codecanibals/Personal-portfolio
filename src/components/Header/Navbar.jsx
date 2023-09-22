import React from "react";
import "./Navbar.css";

let Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div className="icon">
          <span>Aishwary</span>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <button className="button">Download CV</button>
      </nav>
    </>
  );
}

export default Navbar;
