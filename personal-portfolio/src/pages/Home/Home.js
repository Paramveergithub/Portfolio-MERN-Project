import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Paramveer_Resume.pdf";

import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "dark" ? (
            <IoSunnySharp size={35} />
          ) : (
            <BsMoonStarsFill size={30} />
          )}
        </div>

        <div className="container home-content">
          <Fade top>
            <h2>Hello 👋 My name is Paramveer</h2>
            <h1>
              I am a
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer !",
                    "Backend Developer !",
                    "Full Stack MERN Developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <div className="home-btn">
            <Fade right>
              <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=9528055781" rel="noreferrer" target="_blank">Hire Me</a>
            </Fade>
            <Fade left>
              <a
                className="btn btn-cv"
                href={Resume}
                download="Paramveer_Resume"
              >
                My Resume
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
