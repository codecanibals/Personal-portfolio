import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about_me">
        <div className="about_me_heading">
          <h2>About Me</h2>
        </div>
        <div className="about_me_down">
          <div className="left">
            <div className="left_content">
              <h3> My Introduction</h3>
              <p>
                My name is Aishwary Kumar Tiwari, I studied in cse from juit
                and i am recenetly passout from college , i belong to kanpur up
                , and i studied in himachal pradesh , and curetnly i am in
                gurgaon hello and listen one thing that I want to know is how to
                achive 100 percetn target
              </p>
              <button>Download CV</button>
            </div>
          </div>
          <div className="right">
            <div className="frontend">
              <h5>Frontend</h5>

              <div className="frontend_buttons">
                <button className="skill">HTML</button>
                <button className="skill">CSS</button>
                <button className="skill">Javascript</button>
              </div>
              <div className="frontend_buttons">
                <button className="skill">React</button>
                <button className="skill">Angular</button>
                <button className="skill">Boostrap</button>
              </div>
              <div className="frontend_buttons">
                <button className="skill">something</button>
              </div>
            </div>

            <div className="backend">
              <h5>Backend</h5>
              <div>
                <button className="skill">Node</button>
                <button className="skill">Java</button>
              </div>
              <div>
                <button className="skill">Python</button>
                <button className="skill">C++</button>
              </div>
            </div>

            <div className="database">
              <h5>Database</h5>
              <div>
                <button className="skill">MySQL</button>
                <button className="skill">MongoDB</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
