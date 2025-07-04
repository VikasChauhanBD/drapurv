import React from "react";
import "./Motivational.css";
import Banner from "../../assets/images/motivational-banner.webp";
import { NavLink } from "react-router-dom";

function Motivational() {
  return (
    <>
      <div id="motivational" className="motivational-main-container">
        <NavLink>
          <img src={Banner} alt="" />
        </NavLink>
      </div>

      <div id="motivational" className="motivational-main-container2">
        <NavLink>
          <img src={Banner} alt="" />
        </NavLink>
      </div>
    </>
  );
}

export default Motivational;
