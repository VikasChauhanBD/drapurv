import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-socials">
        <NavLink
          to="https://x.com/i/flow/login?redirect_after_login=%2FApurvDr"
          target="_blank"
        >
          <SiX />
        </NavLink>
        <NavLink to="https://www.facebook.com/drapurvmehra/" target="_blank">
          <FaFacebook />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/dr-apurv-mehra-22998917a/%20"
          target="_blank"
        >
          <FaLinkedin />
        </NavLink>
        <NavLink
          to="https://www.youtube.com/channel/UCGwlKO8kzkcc6Bt1u-wsppQ"
          target="_blank"
        >
          <FaYoutube />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/apurv.mehra/?hl=en"
          target="_blank"
        >
          <FaInstagram />
        </NavLink>
      </div>
      <hr />
      <p>© 2025 Dr. Apurv Mehra</p>
    </div>
  );
}

export default Footer;
