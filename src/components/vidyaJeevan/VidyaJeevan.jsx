import { React, useEffect } from "react";
import "./VidyaJeevan.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VidyaImage from "../../assets/images/vidya-jeevan-images/vj-image.png";

function VidyaJeevan() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="vidya-jeevan-experience-center" className="vidya-main-container">
      <h1>Vidya Jeevan</h1>
      <h2>
        A dedicated Learning Hub For NEETPG, INICET and Orthopedics Residency
        Students
      </h2>

      <div className="vidya-content">
        <div className="vidya-image">
          <img src={VidyaImage} alt="vidya image" />
        </div>

        <div className="vidya-para">
          <p>
            A focused learning hub designed exclusively for NEET PG and INICET
            aspirants.Vidyajeevan empowers future doctors to maximize their
            potential in India’s most competitive medical entrance exams. A
            specialized platform for orthopedic residency students seeking
            hands-on clinical excellence. Mentored by some of India’s most
            respected orthopedic pioneers, this initiative bridges academic
            knowledge with real-world surgical exposure and advanced procedural
            training.
          </p>
          <button className="vidya-btn" type="button">
            Know More..
          </button>
        </div>
      </div>
    </div>
  );
}

export default VidyaJeevan;
