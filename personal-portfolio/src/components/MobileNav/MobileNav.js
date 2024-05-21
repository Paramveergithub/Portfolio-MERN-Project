import React, { useState } from "react";
import "./MobileNav.css";
import { SlMenu } from "react-icons/sl";
import { AiOutlineMenuFold } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {
  FcHome,
  FcBusinessman,
  FcGraduationCap,
  FcBriefcase,
  FcBusinessContact,
} from "react-icons/fc";
import { ImLab } from "react-icons/im";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () =>{
    setOpen(false);
  }

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <SlMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        <Fade left>
          {open && (
            <div className="mobile-nav-menu">
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={1000}
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                        onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
                    >
                      <FcBusinessContact /> Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </div>
    </>
  );
};

export default MobileNav;
