import React from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "../../assets/images/ec-cba.webp";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="ec-cba" className="education-main-container">
      <h1>Contributions to Medical Education</h1>

      <div className="education-card">
        <div className="education-content">
          <h2>Cerebellum Academy</h2>
          <p>
            Cerebellum Academy is the visionary creation of five of India’s most
            renowned medical educators — celebrated not just for their academic
            excellence, but also as prolific authors and powerful motivators who
            have inspired millions of medical aspirants.
          </p>
          <h2>eConceptual</h2>
          <p>
            eConceptual is a next-generation medical learning platform designed
            to empower postgraduate medical students with advanced clinical and
            surgical education. Built with a vision to bridge the gap between
            knowledge and real-world practice, eConceptual offers a dynamic and
            accessible learning environment guided by some of India’s most
            respected medical educators.
          </p>
        </div>

        <div className="education-image">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Education;
