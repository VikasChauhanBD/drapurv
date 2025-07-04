import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./PatientsTestimonial.css";
import Patients1 from "../../assets/images/patients-stories/ps-1.jpg";
import Patients2 from "../../assets/images/patients-stories/ps-2.jpg";
import Patients3 from "../../assets/images/patients-stories/ps-3.jpg";
import Patients4 from "../../assets/images/patients-stories/ps-4.jpg";
import Patients5 from "../../assets/images/patients-stories/ps-5.jpg";

const patientsData = [
  {
    image: Patients1,
  },
  {
    image: Patients2,
  },
  {
    image: Patients3,
  },
  {
    image: Patients4,
  },
  {
    image: Patients5,
  },
];

function PatientsTestimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="patients-testimonial" className="patient-swiper-container">
      <div className="patient-swiper-content">
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
          {patientsData.map((data, index) => (
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
