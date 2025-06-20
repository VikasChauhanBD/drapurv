import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./PatientsTestimonial.css";
import Gallery1 from "../../assets/images/gallery-images/gallery1.png";
import Gallery2 from "../../assets/images/gallery-images/gallery2.png";
import Gallery3 from "../../assets/images/gallery-images/gallery3.png";
import Gallery4 from "../../assets/images/gallery-images/gallery4.png";
import Gallery5 from "../../assets/images/gallery-images/gallery5.png";
import Gallery6 from "../../assets/images/gallery-images/gallery6.png";

const patientsData = [
  {
    image: Gallery1,
  },
  {
    image: Gallery2,
  },
  {
    image: Gallery3,
  },
  {
    image: Gallery4,
  },
  {
    image: Gallery5,
  },
  {
    image: Gallery6,
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
