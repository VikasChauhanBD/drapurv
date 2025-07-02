import React from "react";
import "./knowledge.css";
import phoneImg from "../../assets/images/mobile-mockup.png";
import { motion } from "motion/react";
// import phoneImg from "../../assets/images/mobile.png";
// import Education_CBA from "../../assets/images/education-cba.webp";

const Knowledge = () => (
  <section className="knowledge-main-container" id="knowledge">
    <div className="knowledge-inner-div">
      <motion.div
        className="knowledge-phone-wrapper1"
        initial={{ opacity: 0.2, y: -100 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={phoneImg} alt="Cerebellum mobile app interface" />
      </motion.div>

      {/* <div className="knowledge-phone-wrapper2">
        <img src={Education_CBA} alt="Cerebellum mobile app interface" />
      </div> */}

      <motion.div
        className="knowledge-hero-wrapper"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="knowledge-para">
          <p>
            <strong>
              <span>Cerebellum Academy</span> – Shaping the Clinicians of
              Tomorrow
            </strong>{" "}
            Founded by pioneering faculty, Cerebellum Academy is a dedicated
            platform for NEET‑PG, INICET, and FMGE aspirants. In an era of
            rising competition & self‑doubt, We focus on building strong medical
            concepts & problem‑solving skills. We foster clinical confidence -
            equipping future doctors not just to clear exams,but to lead as
            compassionate, competent clinicians.
          </p>
        </div>
        {/* <img
          src={heroImg}
          className="knowledge-hero-image"
          alt="Cerebellum ranked No. 1 with leading faculty"
        /> */}
      </motion.div>
    </div>
  </section>
);

export default Knowledge;
