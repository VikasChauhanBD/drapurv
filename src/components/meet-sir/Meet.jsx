import React from "react";
import "./Meet.css";
import { motion } from "motion/react";
import Image from "../../assets/images/meet-image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Meet() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="meet" className="meet-main-container">
      <div className="meet-content">
        <motion.div
          className="meet-para"
          initial={{ opacity: 0.2, y: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Meet</h2>
          <h1>Dr. Apurv Mehra</h1>
          <p>
            At the heart of every successful surgery and every confident step a
            patient takes after recovery, is the quiet commitment of a doctor
            who truly cares. Dr. Apurv Mehra is one such name—trusted not just
            for his skill in robotic knee and hip replacements, but for the
            comfort, reassurance, and honesty he brings to every patient
            interaction.
            <br />
            <br />
            For over 15 years, he has been more than just a surgeon. He’s been a
            teacher, a mentor, and an inspiration to countless young
            doctors—many of whom chose orthopedics simply because of him. Known
            for blending the precision of modern technology with the warmth of
            human connection, Dr. Mehra believes healing begins the moment a
            patient feels heard.
            <br />
            <br />
            Whether in the operating room, a classroom, or through his words
            that move minds and hearts, Dr. Mehra continues to impact lives
            every day—not just by restoring movement, but by bringing back
            confidence, dignity, and hope.
          </p>

          <button className="meet-btn" type="button">
            Know More..
          </button>
        </motion.div>

        <motion.div
          className="meet-image"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={Image} alt="meet image" />
        </motion.div>
      </div>
    </div>
  );
}

export default Meet;
