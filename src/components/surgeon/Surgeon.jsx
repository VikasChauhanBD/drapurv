import React from "react";
import "./Surgeon.css";
import { motion } from "motion/react";
import Image from "../../assets/images/surgeon-image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Surgeon() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="leading-surgeon" className="surgeon-main-container">
      <h1>Trusted Name in Robotic Knee & Hip Replacement </h1>
      <h2>Known for precision. Chosen for compassion & care.</h2>

      <div className="surgeon-content">
        <motion.div
          className="surgeon-image"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={Image} alt="surgeon image" />
        </motion.div>

        <motion.div
          className="surgeon-para"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
          <button class="surgeon-btn" type="button">
            Know More..
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Surgeon;
