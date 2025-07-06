import React, { useEffect, useState } from "react";
import "./ScrollProgressBar.css";

const ScrollProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollTop}%` }}>
        <div className={`progress-dot ${scrollTop > 0 ? "visible" : ""}`} />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
