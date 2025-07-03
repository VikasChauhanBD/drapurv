import React from "react";
import "./Header.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BG1 from "../../assets/images/banner.png";
import BG2 from "../../assets/images/banner2.jpg";
import BG3 from "../../assets/images/banner3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [text] = useTypewriter({
    words: [
      "Motivational Speaker",
      "Bestselling Author of Medical PG Books",
      "Founder eConceptual",
      "Co-Founder Cerebellum",
    ],
    loop: {},
  });

  return (
    <div id="" className="header-container">
      <div className="header-banner">
        <Slider {...settings}>
          <img src={BG1} alt="" />
          <img src={BG2} alt="" />
          <img src={BG3} alt="" />
        </Slider>
        <div className="header-banner-content">
          <h1>DR. APURV MEHRA</h1>
          <h4>MBBS | MS | MD | DNB (Orthopaedics) | DIP.SCOT - Belgium</h4>
          <p>
            Leading Orthopedician & Robotic Joint Replacement Surgeon, Renowned
            Educator, Founder eConceptual, Co-Founder Cerebellum, Founder Vidya
            Jeevan Education Centre, Founder Vidya Jeevan Clinic for
            Orthopedics, Bestselling Author of Medical PG Books & Motivational
            Speaker
          </p>
          <h5 className="header-typeWriter">
            {text}
            <Cursor />
          </h5>
          <br />
          <button className="header-btn" type="button">
            Get Connected
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
