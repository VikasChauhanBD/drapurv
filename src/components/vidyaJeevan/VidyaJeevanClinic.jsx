import React, { useEffect } from "react";
import "./VidyaJeevanClinic.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import VJC from "../../assets/images/vidya-jeevan-images/vjc.webp";
import { motion } from "motion/react";

function VidyaJeevanClinic() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="vidya-jeevan-clinic" className="vjc-main-container">
      <h1>Vidya Jeevan Clinic for Orthopedics</h1>
      <p className="vjc-subtitle">Most Trusted Centre for Ethical Practice </p>

      <div className="vjc-card">
        <motion.div
          className="vjc-content"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="vjc-text">
            At the heart of <strong>Dr. Apurv Mehra’s</strong> practice lies
            Vidya Jeevan Clinic — a space built not just to treat patients, but
            to truly listen, guide, and heal. Known for its ethical approach,
            personalized care, and advanced orthopaedic treatments, Vidya Jeevan
            is where expertise meets empathy.
          </p>
          <p className="vjc-text">
            Whether you're dealing with chronic pain, post-traumatic issues, or
            joint-related conditions, you’ll find honest opinions, world-class
            consultation, and compassionate guidance — all under one roof.
          </p>
          <button className="vjc-btn" type="button">
            Book Your Appointment..
          </button>
        </motion.div>

        <motion.div
          className="vjc-image"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={VJC} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default VidyaJeevanClinic;
