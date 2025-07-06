import React from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "../../assets/images/ec-cba.webp";
import { motion } from "motion/react";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="ec-cba" className="education-main-container">
      <h1>Contributions to Medical Education</h1>

      <div className="education-card">
        <div className="education-content">
          <motion.h2
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cerebellum Academy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cerebellum Academy is the visionary creation of five of India’s most
            renowned medical educators — celebrated not just for their academic
            excellence, but also as prolific authors and powerful motivators who
            have inspired millions of medical aspirants.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            eConceptual
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            eConceptual is a next-generation medical learning platform designed
            to empower postgraduate medical students with advanced clinical and
            surgical education. Built with a vision to bridge the gap between
            knowledge and real-world practice, eConceptual offers a dynamic and
            accessible learning environment guided by some of India’s most
            respected medical educators.
          </motion.p>
        </div>

        <motion.div
          className="education-image"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
