import React from "react";
import "./WhoWeAre.css";
import CBA_Logo from "../../assets/images/cba-logo.png";
import EC_logo from "../../assets/images/ec-logo.png";
import Logo from "../../assets/images/logo.png";

function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <div className="text-section">
        <h2>Who We Are</h2>
        <div className="text-block">
          <h4>Background</h4>
          <p>
            Trifold brochures have long been a type of material used to
            advertise brands, products, and services. The best way to maximize
            its use is to introduce what the brand has to offer with a brief or
            about section like this. Make sure to keep your introduction short
            but interesting enough to readers.
          </p>
        </div>
        <div className="text-block">
          <h4>Values</h4>
          <p>
            Trifold brochures have long been a type of material used to
            advertise brands, products, and services. The best way to maximize
            its use is to introduce what the brand has to offer with a brief or
            about section like this. Make sure to keep your introduction short
            but interesting enough to readers.
          </p>
        </div>
        <h3 className="visit-us">Visit us</h3>
      </div>

      <div className="visual-section">
        <img src={CBA_Logo} alt="Consultation" className="main-img" />
        <img src={EC_logo} alt="Doctor" className="side-img" />
        <div className="logo-box">
          <img src={Logo} alt="Logo" className="logo" />
          <p>
            Willowblane <br /> Healthcare
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
