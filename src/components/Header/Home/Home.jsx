import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <h5> Aishwary Kumar Tiwari</h5>
          <h1>I'm <span style={{color:"#36D6DB"}}>Designer</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem perferendis porro <br /> ea cum eaque, nisi dicta{" "}
          </p>
          <div className="home_button">
            <button className="hire">Hire Me</button>
            <button className="cv">Download CV</button>
          </div>
          <div className="social_links">

          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="right">
          <p>i am right image</p>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
