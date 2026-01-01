import React, { useState, useEffect } from "react";
import "./VideoPopup.css";

const VideoPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isPopupOpen) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isPopupOpen]);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("video-popup-overlay")) {
      closePopup();
    }
  };

  if (!isPopupOpen) return null;

  return (
    <div className="video-popup-overlay" onClick={handleOverlayClick}>
      <div className="video-popup-container">
        <button
          className="video-close-btn"
          onClick={closePopup}
          title="Close Video"
        >
          &times;
        </button>
        <div className="video-popup-wrapper">
          <iframe
            src="https://www.youtube.com/embed/eUTCZKFu5q0?autoplay=1&mute=1&start=1&enablejsapi=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          />
        </div>
        <div className="video-unmute-hint">
          <p>🔇 Click on the video to unmute</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
