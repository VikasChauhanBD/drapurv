import React from "react";
import "./VidyaJeevanClinic.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function VidyaJeevanClinic() {
  return (
    <div id="vidya-jeevan-clinic" className="vjc-main-container">
      <h1>Vidya Jeevan Clinic for Orthopedics</h1>

      <div className="vjc-inner-container">
        <p className="clinic-subtitle">
          <FaQuoteLeft /> Most Trusted Centre for Ethical Practice{" "}
          <FaQuoteRight />
        </p>
        <p className="clinic-text">
          At the heart of <strong>Dr. Apurv Mehra’s</strong> practice lies Vidya
          Jeevan Clinic — a space built not just to treat patients, but to truly
          listen, guide, and heal. Known for its ethical approach, personalized
          care, and advanced orthopaedic treatments, Vidya Jeevan is where
          expertise meets empathy.
        </p>
        <p className="clinic-text">
          Whether you're dealing with chronic pain, post-traumatic issues, or
          joint-related conditions, you’ll find honest opinions, world-class
          consultation, and compassionate guidance — all under one roof.
        </p>

        <div className="clinic-address">
          <div className="clinic-address-text">
            <h4>
              <FaMapLocationDot /> Address:
            </h4>
            <p>
              28 Vigyan Vihar, Surajmal Vihar, Adjacent to Yamuna Sports Complex
              Gate No.2, Delhi – 110092
            </p>
          </div>
          <div className="clinic-address-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.9415419599145!2d77.3114340761379!3d28.661468982764934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21f866f1b74d%3A0xb6f30db6d657b9f8!2sVidya%20Jeevan!5e0!3m2!1sen!2sin!4v1750243803954!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VidyaJeevanClinic;
