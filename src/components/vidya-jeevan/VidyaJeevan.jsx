import { React, useEffect } from "react";
import "./VidyaJeevan.css";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";
// import VidyaImage1 from "../../assets/images/vj-main-image.png";
// import VidyaImage1 from "../../assets/images/vidya-jeevan-images/vj-main-image-2.jpg";
// import VidyaImage1 from "../../assets/images/vidya-jeevan-images/vj-main-image-5.png";
// import VidyaImage2 from "../../assets/images/vidya-jeevan-images/vj-main-image-4.png";
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
      {/* <div className="vidya-main-image">
        <img src={VidyaImage1} alt="" />
        <img src={VidyaImage2} alt="" />
      </div> */}

      <div className="vidya-content">
        <motion.div
          className="vidya-image"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={VidyaImage} alt="vidya image" />
        </motion.div>

        <motion.div
          className="vidya-para"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
          <button class="vidya-btn" type="button">
            Know More..
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default VidyaJeevan;
