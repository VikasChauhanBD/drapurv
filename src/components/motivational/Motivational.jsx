import React from "react";
import "./Motivational.css";
import Banner from "../../assets/images/motivational-banner.webp";
import { NavLink } from "react-router-dom";

function Motivational() {
  return (
    <div id="motivational" className="motivational-main-container">
      <NavLink
        to="https://www.youtube.com/playlist?list=PLPlijGAHvv9_iuV44Em4aR696G7PnamHO"
        target="_blank"
      >
        <img src={Banner} alt="" />
      </NavLink>
    </div>
  );
}

export default Motivational;
