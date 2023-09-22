import React from "react";
import "./Navbar.css";

let Navbar = () => {
  return (
    <div>
      <div id="navbar">
        <div className="name">
          <b>Aishwary Kumar Tiwari</b>
        </div>

        <div className="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">My Skills</a>
          <a href="">Contact</a>
        </div>

        <div className="dounload">
           <button type="button" className="btn">Download CV</button>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
