import React from 'react'
import Typewriter from "typewriter-effect";
import './Home.css';


const Home = () => {
  return (
    <>
        <div className='wrapper'>
        <section className="featured-box" id="home">
                <div className="featured-text">
                    {/* <div className="featured-text-card">
                        <span>Aishwary Kumar Tiwari</span>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <h3 className="animate-charcter">Aishwary Kumar Tiwari</h3>
                            </div>
                        </div>
                        </div>
                    <div className="featured-name">
                        <p>I'm <span className="typedText">
                        <div className="writer">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Full Stack Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Software Developer")
                                        .start();
                                }}
                            />
                        </div></span></p>
                        
                    </div>
                    <div className="featured-text-info">
                        {/* <p>A skilled frontend artisan crafting beautiful and user-friendly web experiences.
                        </p> */}

                        <h1>
                            <span>A</span>
                            <span>skilled</span>
                            <span>frontend</span>
                            <span>artisan</span>
                            <span>crafting</span>
                            <span>beautiful</span>
                            <span>and</span>
                            <span>user-friendly</span>
                            <span>web</span>
                            <span>experiences.</span>
                        </h1>

                    </div>
                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Hire Me</button>
                        <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
                    </div>
                    <div className="social_icons">
                        <div className="icon"><i className="uil uil-instagram"></i></div>
                        <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                        <div className="icon"><i className="uil uil-twitter"></i></div>
                        <div className="icon"><i className="uil uil-github-alt"></i></div>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src="./profile.png" alt="avatar"></img>
                    </div>
                </div>
                <div className="scroll-icon-box">
                    <a href="#about" className="scroll-btn">
                        <i className="uil uil-mouse-alt"></i>
                        <p>Scroll Down</p>
                    </a>
                </div>

            </section> 
            
        </div>
    </>
  )
}

export default Home