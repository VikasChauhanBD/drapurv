import React from "react";
import "./EducationKnowMore.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Education_EC from "../../assets/images/education_ec.webp";
import phoneImg from "../../assets/images/new-mock-up.png";
import { useEffect } from "react";

function EducationKnowMore() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="education-know-more" className="educationKM-main-container">
      <div className="educationKM-content1">
        <div className="educationKM-hero-wrapper1">
          <div className="educationKM-para1">
            <p>
              <strong>
                <span>eConceptual</span>
              </strong>{" "}
              – India’s Leading MedTech Platform for Residency Students Founded
              with a vision by Dr. Apurv Mehra, eConceptual is a pioneering
              initiative created to empower India’s postgraduate medical
              residents with world-class clinical and surgical training. With
              expert mentorship from India’s most respected faculty, the
              platform aims to shape globally competent doctors—professionals
              who not only lead in India but stand tall on the global stage
              through exceptional skill and academic excellence.
            </p>
          </div>
        </div>

        <div className="educationKM-image1">
          <img src={Education_EC} alt="education image" />
        </div>
      </div>

      <div className="educationKM-content2">
        <div className="educationKM-image2">
          <img src={phoneImg} alt="Cerebellum mobile app interface" />
        </div>

        <div className="educationKM-hero-wrapper2">
          <div className="educationKM-para2">
            <p>
              <strong>
                <span>Cerebellum Academy</span> – Shaping the Clinicians of
                Tomorrow
              </strong>{" "}
              Founded by pioneering faculty, Cerebellum Academy is a dedicated
              platform for NEET‑PG, INICET, and FMGE aspirants. In an era of
              rising competition & self‑doubt, We focus on building strong
              medical concepts & problem‑solving skills. We foster clinical
              confidence - equipping future doctors not just to clear exams,but
              to lead as compassionate, competent clinicians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationKnowMore;
