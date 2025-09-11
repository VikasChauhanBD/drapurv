import React from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "../../assets/images/ec-cba.webp";
import EducationKnowMore from "./EducationKnowMore";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="ec-cba" className="education-main-container">
      <h1>Legacy & Inspiration</h1>
      <h2>Built on Belief, Values & Purpose</h2>

      <div className="education-card">
        <div className="education-image">
          <img src={Image} alt="" />
        </div>

        <div className="education-content">
          <h3>Shaping Minds, Inspiring Generations</h3>
          <h4>- A Legacy of Learning </h4>
          <p>
            For Dr. Apurv Mehra, being a doctor has never been just about
            treating patients — it’s about{" "}
            <b>uplifting the entire medical community</b>, especially the next
            generation of doctors. Deeply influenced by the values instilled in
            him by his grandmother, Dr. Mehra has always believed that{" "}
            <b>knowledge must be shared, not stored</b> — and that true success
            lies in giving back.
            <br />
            <br />
            This belief led to the birth of two powerful educational platforms
            that are transforming how medicine is taught and learned in India:
          </p>
        </div>
      </div>

      <EducationKnowMore />
    </div>
  );
}

export default Education;
