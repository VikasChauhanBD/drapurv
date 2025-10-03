import React from "react";
import "./MarqueeLine.css";

export default function CacheAlertMarquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <marquee className="marquee-text">
          ⚠️ If you're facing any issues with the website, please clear your
          browser cache and refresh the page
        </marquee>
      </div>
    </div>
  );
}
