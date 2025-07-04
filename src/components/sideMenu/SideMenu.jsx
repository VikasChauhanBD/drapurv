import React, { useState, useEffect } from "react";
import "./SideMenu.css";
import Logo from "../../assets/images/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
// import SideBarBG from '../../assets/images/side-bar-bg.png'

function SideMenu() {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - 80; // 80 for navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    handleCloseNav();
  };

  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + scrollPosition;
        const height = section.offsetHeight;
        if (
          scrollPosition >= top - windowHeight * 0.5 &&
          scrollPosition < top + height - windowHeight * 0.5
        ) {
          setActiveLink(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeLink) {
      navigate(`/${activeLink}`);
    }
  }, [activeLink, navigate]);

  return (
    <div className="sidemenu-container">
      <div className="sidemenu-logo">
        <img src={Logo} alt="website logo" />
      </div>

      <nav className={showNav ? "mobile-nav-content" : "sidemenu-web"}>
        <div className="sidemenu-web-content-1">
          <NavLink
            to="#about"
            className={activeLink === "about"}
            onClick={() => scrollToSection("about")}
          >
            About
          </NavLink>

          <NavLink
            to="#leading-surgeon"
            className={activeLink === "leading-surgeon"}
            onClick={() => scrollToSection("leading-surgeon")}
          >
            Leading Surgeon
          </NavLink>

          <NavLink
            to="#specialities"
            className={activeLink === "specialities"}
            onClick={() => scrollToSection("specialities")}
          >
            Educator
          </NavLink>

          <NavLink
            to="#ec-cba"
            className={activeLink === "ec-cba"}
            onClick={() => scrollToSection("ec-cba")}
          >
            Entrepreneur
          </NavLink>

          <NavLink
            to="#motivational"
            className={activeLink === "motivational"}
            onClick={() => scrollToSection("motivational")}
          >
            Best Selling Author
          </NavLink>
        </div>

        <div className="sidemenu-web-content-2">
          <NavLink
            to="#vidya-jeevan-clinic"
            className={activeLink === "vidya-jeevan-clinic"}
            onClick={() => scrollToSection("vidya-jeevan-clinic")}
          >
            Vidya Jeevan Clinic
          </NavLink>

          <NavLink
            to="#vidya-jeevan-experience-center"
            className={activeLink === "vidya-jeevan-experience-center"}
            onClick={() => scrollToSection("vidya-jeevan-experience-center")}
          >
            Vidya Jeevan Experience Center
          </NavLink>

          <NavLink
            to="#gallery"
            className={activeLink === "gallery"}
            onClick={() => scrollToSection("gallery")}
          >
            Gallery
          </NavLink>
        </div>

        <div className="sidemenu-web-socials">
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
          {/* <NavLink to="" target="_blank">
            <FaPhone />
          </NavLink> */}
        </div>
      </nav>

      <div className="hamburger">
        <button className="hamburger-btn" onClick={handleButtonToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
