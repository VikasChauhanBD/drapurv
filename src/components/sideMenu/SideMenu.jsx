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
        <div className="sidemenu-web-content">
          <NavLink
            to="#about"
            className={activeLink === "about"}
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="#education"
            className={activeLink === "education"}
            onClick={() => scrollToSection("education")}
          >
            LEADING EDUCATOR
          </NavLink>

          <NavLink
            to="#education-know-more"
            className={activeLink === "education-know-more"}
            onClick={() => scrollToSection("education-know-more")}
          >
            ENTREPRENEUR
          </NavLink>

          <NavLink
            to="#best-selling-author"
            className={activeLink === "best-selling-author"}
            onClick={() => scrollToSection("best-selling-author")}
          >
            BEST SELLING AUTHOR
          </NavLink>

          <NavLink
            to="#vidya-jeevan-clinic"
            className={activeLink === "vidya-jeevan-clinic"}
            onClick={() => scrollToSection("vidya-jeevan-clinic")}
          >
            VIDYA JEEVAN CLINIC
          </NavLink>

          <NavLink
            to="#vidya-jeevan-experience-center"
            className={activeLink === "vidya-jeevan-experience-center"}
            onClick={() => scrollToSection("vidya-jeevan-experience-center")}
          >
            VIDYA JEEVAN EXPERIENCE CENTER
          </NavLink>

          <NavLink
            to="#contact"
            className={activeLink === "contact"}
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
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
          <NavLink to="" target="_blank">
            <FaPhone />
          </NavLink>
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
