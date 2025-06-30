import React from "react";
import "./EducationKnowMore.css";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Education_CBA from "../../assets/images/education-cba.webp";
import Education_EC from "../../assets/images/education_ec.webp";
import { useEffect } from "react";

function EducationKnowMore() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="education-know-more" className="educationKM-main-container">
      <div className="educationKM-content1">
        <motion.div
          className="educationKM-image1"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={Education_EC} alt="education image" />
        </motion.div>

        <motion.div
          className="educationKM-para1"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>eConceptual</strong> – India’s Leading MedTech Platform for
            Residency Students Founded with a vision by Dr. Apurv Mehra,
            eConceptual is a pioneering initiative created to empower India’s
            postgraduate medical residents with world-class clinical and
            surgical training. With expert mentorship from India’s most
            respected faculty, the platform aims to shape globally competent
            doctors—professionals who not only lead in India but stand tall on
            the global stage through exceptional skill and academic excellence.
          </p>
          <button class="educationKM-glow-on-hover" type="button">
            Know More..
          </button>
        </motion.div>
      </div>

      <div className="educationKM-content2">
        <motion.div
          className="educationKM-para2"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>Cerebellum Academy</strong> – Shaping the Clinicians of
            Tomorrow Founded by pioneering faculty, Cerebellum Academy is a
            dedicated platform for NEETPG, INICET, and FMGE aspirants. In an era
            of rising competition and self-doubt, we focus on building strong
            medical concepts, strategic problem-solving skills, and clinical
            confidence—equipping future doctors not just to clear exams, but to
            lead as compassionate, competent clinicians.
          </p>
          <button class="educationKM-glow-on-hover" type="button">
            Know More..
          </button>
        </motion.div>

        <motion.div
          className="educationKM-image2"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={Education_CBA} alt="education image" />
        </motion.div>
      </div>
    </div>
  );
}

export default EducationKnowMore;
