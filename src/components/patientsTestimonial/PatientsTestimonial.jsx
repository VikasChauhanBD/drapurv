import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./PatientsTestimonial.css";
import EPS1 from "../../assets/images/patients-stories/english-ps-1.jpeg";
import EPS2 from "../../assets/images/patients-stories/english-ps-2.jpeg";
import EPS3 from "../../assets/images/patients-stories/english-ps-3.jpeg";
import EPS4 from "../../assets/images/patients-stories/english-ps-4.jpeg";
import EPS5 from "../../assets/images/patients-stories/english-ps-5.jpeg";
import HPS1 from "../../assets/images/patients-stories/hindi-ps-1.jpeg";
import HPS2 from "../../assets/images/patients-stories/hindi-ps-2.jpeg";
import HPS3 from "../../assets/images/patients-stories/hindi-ps-3.jpeg";
import HPS4 from "../../assets/images/patients-stories/hindi-ps-4.jpeg";
import HPS5 from "../../assets/images/patients-stories/hindi-ps-5.jpeg";

const patientsEnglishData = [
  {
    image: EPS1,
  },
  {
    image: EPS2,
  },
  {
    image: EPS3,
  },
  {
    image: EPS4,
  },
  {
    image: EPS5,
  },
  {
    image: EPS1,
  },
  {
    image: EPS2,
  },
  {
    image: EPS3,
  },
  {
    image: EPS4,
  },
  {
    image: EPS5,
  },
];

const patientsHindiData = [
  {
    image: HPS1,
  },
  {
    image: HPS2,
  },
  {
    image: HPS3,
  },
  {
    image: HPS4,
  },
  {
    image: HPS5,
  },
  {
    image: HPS1,
  },
  {
    image: HPS2,
  },
  {
    image: HPS3,
  },
  {
    image: HPS4,
  },
  {
    image: HPS5,
  },
];

function PatientsTestimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="patients-testimonial" className="patient-swiper-container">
      <div className="patient-swiper-content1">
        <h1>Patient Stories ✨</h1>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
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
          // className="patient-swiper"
        >
          {patientsEnglishData.map((data, index) => (
            <SwiperSlide className="patient-swiper-slide" key={index}>
              <img src={data.image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="patient-swiper-content2">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
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
          // className="patient-swiper"
        >
          {patientsHindiData.map((data, index) => (
            <SwiperSlide className="patient-swiper-slide" key={index}>
              <img src={data.image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PatientsTestimonial;
