import React from "react";
import "./About.css";
import Image from "../../assets/images/about-image.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="about" className="about-main-container">
      <div className="about-content">
        <div className="about-para">
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

          <button className="about-btn" type="button">
            Know More..
          </button>
        </div>

        <div className="about-image">
          <img src={Image} alt="about image" />
        </div>
      </div>
    </div>
  );
}

export default About;
