import React from "react";
import "./about.css";

import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12 about-img">
              <img src="../../../Profile-param.jpg" alt="profile" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                My name is Paramveer, I am a BCA student with a strong command
                of programming languages such as C++, JavaScript. I am a
                passionate Full Stack MERN Developer. I am always looking for
                new and challenging projects. I love what I do and I am excited
                to be part of your team.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
