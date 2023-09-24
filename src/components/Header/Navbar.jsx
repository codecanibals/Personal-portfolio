// // import React from "react";
// import React, { useState } from 'react';
// import "./Navbar.css";





// let Navbar = () => {

    
//     return (
//     <>

//         <nav id="header">
//         <div className="nav-logo">
//             <p className="nav-name">Aishwary Kumar Tiwari</p>
//             <span>.</span>
//         </div>
//         <div className="nav-menu" id="myNavMenu">
//             <ul className="nav_menu_list">
//                 <li className="nav_list">
//                     <a href="#home" className="nav-link active-link">Home</a>
//                     <div className="circle"></div>
//                 </li>
//                 <li className="nav_list">
//                     <a href="#about" className="nav-link">About</a>
//                     <div className="circle"></div>
//                 </li>
//                 <li className="nav_list">
//                     <a href="#projects" className="nav-link">Projects</a>
//                     <div className="circle"></div>
//                 </li>
//                 <li className="nav_list">
//                     <a href="#contact" className="nav-link">Contact</a>
//                     <div className="circle"></div>
//                 </li>
//             </ul>
//         </div>
//         <div className="nav-button">
//             <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
//         </div>
//         <div className="nav-menu-btn">
//             <i className="uil uil-bars" onclick="myMenuFunction()"></i>
//         </div>
//     </nav>
//     </>


//     );
    
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Aishwary Kumar Tiwari</p>
        <span className='dot'>.</span>
      </div>
      <div className={`nav-menu ${menuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link ">
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">
          Download CV <i className="uil uil-file-alt"></i>
        </button>
      </div>
      <div className="nav-menu-btn">
        <i className={`uil uil-bars ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}

export default Navbar;
