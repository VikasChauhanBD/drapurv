import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import FooterIcon from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-icons-div">
          <img src={FooterIcon} alt="" />
        </div>

        <div className="footer-quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>About</li>
            <li>Leading Surgeon</li>
            <li>Educator</li>
            <li>Entrepreneur</li>
            {/* <li> Best Selling Author</li>
          <li>Vidya Jeevan Clinic</li>
          <li>Vidya Jeevan Experience Center</li>
          <li>Gallery</li> */}
          </ul>
        </div>

        <div className="footer-social-media">
          <h2>Social Media</h2>
          <div className="footer-social-media-links">
            <NavLink
              to="https://x.com/i/flow/login?redirect_after_login=%2FApurvDr"
              target="_blank"
            >
              <SiX />
              <span>X</span>
            </NavLink>
            <NavLink
              to="https://www.facebook.com/drapurvmehra/"
              target="_blank"
            >
              <FaFacebook />
              <span>Facebook</span>
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/dr-apurv-mehra-22998917a/%20"
              target="_blank"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </NavLink>
            <NavLink
              to="https://www.youtube.com/channel/UCGwlKO8kzkcc6Bt1u-wsppQ"
              target="_blank"
            >
              <FaYoutube />
              <span>Youtube</span>
            </NavLink>
            <NavLink
              to="https://www.instagram.com/apurv.mehra/?hl=en"
              target="_blank"
            >
              <FaInstagram />
              <span>Instagram</span>
            </NavLink>
          </div>
        </div>

        <div className="footer-contact-us">
          <h2>Get In Touch</h2>

          <div className="footer-contact-info">
            <FaMapLocationDot className="location-icon" />
            <h4>
              28 Vigyan Vihar, Surajmal Vihar, Adjacent to Yamuna Sports Complex
              Gate No.2, Delhi – 110092
            </h4>
          </div>
        </div>
      </footer>

      <footer className="lower-footer">
        <hr />
        <p>© 2025 Dr. Apurv Mehra</p>
      </footer>
    </>
  );
}

export default Footer;
