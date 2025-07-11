import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import "./MobileFooter.css";

function MobileFooter() {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isSocialMediaOpen, setSocialMediaOpen] = useState(false);

  return (
    <>
      <footer className="footer-mobile">
        <div className="footer-mobile-quick-links">
          <h2 onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}>
            Quick Links <span>{isQuickLinksOpen ? "▲" : "▼"}</span>
          </h2>
          {isQuickLinksOpen && (
            <ul>
              <li>About</li>
              <li>Leading Surgeon</li>
              <li>Educator</li>
              <li>Entrepreneur</li>
            </ul>
          )}
        </div>

        <div className="footer-mobile-social-media">
          <h2 onClick={() => setSocialMediaOpen(!isSocialMediaOpen)}>
            Social Media <span>{isSocialMediaOpen ? "▲" : "▼"}</span>
          </h2>
          {isSocialMediaOpen && (
            <div className="footer-mobile-social-media-links">
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
                to="https://www.linkedin.com/in/dr-apurv-mehra-22998917a/"
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
          )}
        </div>

        <div className="footer-mobile-contact-us">
          <h2>Get In Touch</h2>
          <div className="footer-mobile-contact-info">
            <FaMapLocationDot className="mobile-location-icon" />
            <h4>
              28 Vigyan Vihar, Surajmal Vihar, Adjacent to Yamuna Sports Complex
              Gate No.2, Delhi – 110092
            </h4>
          </div>
        </div>
      </footer>

      <footer className="lower-footer-mobile">
        <hr />
        <p>© 2025 Dr. Apurv Mehra</p>
      </footer>
    </>
  );
}

export default MobileFooter;
