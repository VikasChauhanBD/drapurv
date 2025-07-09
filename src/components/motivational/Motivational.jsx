import React, { useState } from "react";
import "./Motivational.css";
import Banner from "../../assets/images/motivational-banner.webp";
import { NavLink } from "react-router-dom";

function Motivational() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div id="motivational" className="motivational-main-container">
      <NavLink
        to="https://www.youtube.com/playlist?list=PLPlijGAHvv9_iuV44Em4aR696G7PnamHO"
        target="_blank"
        className="banner-link"
      >
        <div
          className="banner-wrapper"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
        >
          <img src={Banner} alt="Motivational Banner" />
          {showMessage && (
            <div
              className="hover-message cursor-follow"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            >
              Watch Now
            </div>
          )}
        </div>
      </NavLink>
    </div>
  );
}

export default Motivational;
