import React from "react";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import "./Menus.css";
import { FcHome } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { ImLab } from "react-icons/im";
import { FcBusinessContact } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="../../../Profile-param.jpg" alt="Profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                  >
                    <FcHome /> Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                  >
                    <FcBusinessman /> About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                  >
                    <FcGraduationCap /> Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                  >
                    <FcBriefcase /> Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                  >
                    <ImLab /> Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                  >
                    <FcBusinessContact /> Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1000}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1000}
                >
                  <FcBusinessman />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1000}
                >
                  <FcGraduationCap />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1000}
                >
                  <FcBriefcase />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1000}
                >
                  <ImLab />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1000}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      ;
    </>
  );
};

export default Menus;
