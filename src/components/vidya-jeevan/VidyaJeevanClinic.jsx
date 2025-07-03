import React, { useEffect } from "react";
import "./VidyaJeevanClinic.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import VJC from "../../assets/images/vidya-jeevan-images/vjc.webp";

function VidyaJeevanClinic() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="vidya-jeevan-clinic" className="vjc-main-container">
      <h1>Vidya Jeevan Clinic for Orthopedics</h1>
      <p className="vjc-subtitle">Most Trusted Centre for Ethical Practice </p>

      <div className="vjc-card">
        <div className="vjc-content">
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
        </div>

        <div className="vjc-image">
          <img src={VJC} alt="" />
        </div>
      </div>
    </div>
  );
}

export default VidyaJeevanClinic;
