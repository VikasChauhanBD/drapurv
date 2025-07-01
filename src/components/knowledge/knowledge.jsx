import React from "react";
import "./knowledge.css";
import phoneImg from "../../assets/images/mobile-mockup.png";
// import phoneImg from "../../assets/images/mobile.png";
// import Education_CBA from "../../assets/images/education-cba.webp";

const Knowledge = () => (
  <section className="knowledge-main-container" id="knowledge">
    <div className="knowledge-inner-div">
      <div className="knowledge-phone-wrapper1">
        <img src={phoneImg} alt="Cerebellum mobile app interface" />
      </div>

      {/* <div className="knowledge-phone-wrapper2">
        <img src={Education_CBA} alt="Cerebellum mobile app interface" />
      </div> */}

      <div className="knowledge-hero-wrapper">
        <div className="knowledge-para">
          <p>
            <strong>
              Cerebellum Academy– Shaping the Clinicians of Tomorrow
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
      </div>
    </div>
  </section>
);

export default Knowledge;
