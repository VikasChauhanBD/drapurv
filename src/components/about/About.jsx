import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import Image from "../../assets/images/about-image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="about" className="about-main-container">
      <h1>Renowned for Precision in Robotic Joint Replacement</h1>

      <div className="about-content">
        <motion.div
          className="about-image"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={Image} alt="about image" />
        </motion.div>

        <motion.div
          className="about-para"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <NavLink>Know More..</NavLink> */}
          <button class="glow-on-hover" type="button">
            Know More..
          </button>
          <p>
            Dr. Apurv Mehra is one of India’s foremost orthopaedic surgeons,
            with over 22 years of experience in advanced orthopaedic care. He
            specializes in robotic knee replacement, complex joint surgeries,
            and trauma management. Currently serving at Max Super Specialty
            Hospital, Patparganj, he has made significant contributions to the
            field of orthopaedics and medical education.
            <br />
            <br />
            Dr. Mehra is known for his unwavering commitment to ethical medical
            practice, ensuring 100% transparency with his patients. He believes
            that trust is the foundation of doctor-patient relationships and
            prioritizes clear communication, providing patients with a complete
            understanding of their treatment options. His patient-first approach
            ensures that every individual receives honest, compassionate, and
            evidence-based care.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
