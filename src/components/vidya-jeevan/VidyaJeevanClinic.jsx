import React, { useEffect } from "react";
import "./VidyaJeevanClinic.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
// import { FaMapLocationDot } from "react-icons/fa6";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import VJC1 from "../../assets/images/vidya-jeevan-images/vjc-1.JPG";
import VJC2 from "../../assets/images/vidya-jeevan-images/vjc-2.JPG";
import VJC3 from "../../assets/images/vidya-jeevan-images/vjc-3.JPG";
import VJC4 from "../../assets/images/vidya-jeevan-images/vjc-4.JPG";
import VJC5 from "../../assets/images/vidya-jeevan-images/vjc-5.JPG";
import VJC6 from "../../assets/images/vidya-jeevan-images/vjc-6.JPG";
import VJC7 from "../../assets/images/vidya-jeevan-images/vjc-7.JPG";
import VJC8 from "../../assets/images/vidya-jeevan-images/vjc-8.JPG";
import VJC9 from "../../assets/images/vidya-jeevan-images/vjc-9.JPG";

const clinicData = [
  {
    image: VJC1,
  },
  {
    image: VJC2,
  },
  {
    image: VJC3,
  },
  {
    image: VJC4,
  },
  {
    image: VJC5,
  },
  {
    image: VJC6,
  },
  {
    image: VJC7,
  },
  {
    image: VJC8,
  },
  {
    image: VJC9,
  },
];

function VidyaJeevanClinic() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="vidya-jeevan-clinic" className="vjc-main-container">
      <h1>Vidya Jeevan Clinic for Orthopedics</h1>
      <p className="vjc-subtitle">Most Trusted Centre for Ethical Practice </p>

      <div className="vjc-inner-container">
        <div className="vjc-card">
          <div className="vjc-content">
            <p className="vjc-text">
              At the heart of <strong>Dr. Apurv Mehra’s</strong> practice lies
              Vidya Jeevan Clinic — a space built not just to treat patients,
              but to truly listen, guide, and heal. Known for its ethical
              approach, personalized care, and advanced orthopaedic treatments,
              Vidya Jeevan is where expertise meets empathy.
            </p>
            <p className="vjc-text">
              Whether you're dealing with chronic pain, post-traumatic issues,
              or joint-related conditions, you’ll find honest opinions,
              world-class consultation, and compassionate guidance — all under
              one roof.
            </p>
            <button class="vjc-glow-on-hover" type="button">
              Book Your Appointment..
            </button>
          </div>

          <div className="vjc-images-swiper">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2,
                slideShadows: false,
              }}
              navigation={true}
              modules={[EffectCoverflow, Navigation, Autoplay]}
            >
              {clinicData.map((data, index) => (
                <SwiperSlide className="vjc-swiper-slide" key={index}>
                  <img src={data.image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* <div className="vjc-address">
          <div className="vjc-address-text">
            <h4>
              <FaMapLocationDot /> Address:
            </h4>
            <p>
              28 Vigyan Vihar, Surajmal Vihar, Adjacent to Yamuna Sports Complex
              Gate No.2, Delhi – 110092
            </p>
          </div>
          <div className="vjc-address-map">
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
        </div> */}
      </div>
    </div>
  );
}

export default VidyaJeevanClinic;
