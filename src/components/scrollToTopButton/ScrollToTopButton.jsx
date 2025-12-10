import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // instantly scroll to top
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaAngleDoubleUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
