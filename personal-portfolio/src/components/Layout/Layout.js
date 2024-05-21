import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import "./Layout.css";
import Menus from "../Menus/Menus.js";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };
  
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={toggleSidebar}>
            {
              toggle ? (<FiMenu size={30}/>): (<AiOutlineDoubleLeft size={30}/>)
            }
            </p>
          </div>
            <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};
export default Layout;