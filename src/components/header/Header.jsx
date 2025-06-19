import React from "react";
import "./Header.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";

function Header() {
  const [text] = useTypewriter({
    words: [
      "Motivational Speaker",
      "Bestselling Author of Medical PG Books",
      "Founder eConceptual",
      "Co-Founder Cerebellum",
    ],
    loop: {},
  });

  return (
    <div id="" className="header-container">
      <div className="header-banner">
        <div className="header-banner-content">
          <h1>DR. APURV MEHRA</h1>
          <h4>MBBS | MS | MD | DNB (Orthopaedics) | DIP.SCOT - Belgium</h4>
          <p>
            Leading Orthopedician & Robotic Joint Replacement Surgeon, Renowned
            Educator, Founder eConceptual, Co-Founder Cerebellum, Founder Vidya
            Jeevan Education Centre, Founder Vidya Jeevan Clinic for
            Orthopedics, Bestselling Author of Medical PG Books & Motivational
            Speaker
          </p>
          <h5 className="header-typeWriter">
            {text}
            <Cursor />
          </h5>
          <br />
          {/* <NavLink>Get Connected</NavLink> */}
          <button class="header-glow-on-hover" type="button">
            Get Connected
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
