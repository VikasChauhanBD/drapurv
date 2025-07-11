import React, { useEffect, useRef } from "react";
import "./StudentsTestimonial.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import studentsData from "../../assets/data/studentsReviews";

function StudentsTestimonial() {
  const studentsListRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    let scrollInterval;

    const applyScrollEffect = () => {
      scrollInterval = setInterval(() => {
        if (studentsListRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            studentsListRef.current;

          // Scroll the container horizontally
          studentsListRef.current.scrollLeft += 1;

          // Check if the scroll has reached the end
          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            // Reset to the beginning
            studentsListRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    };

    applyScrollEffect();

    // Cleanup the interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div id="students-testimonial" className="studentTM-main-container">
      <div className="studentTM-content">
        <h1>Students Testimonial ❤️</h1>
        <div className="studentTM-cards" ref={studentsListRef}>
          {studentsData.map((data, index) => (
            <div key={index} className="studentTM-card">
              <div className="studentTM-image">
                <img src={data.image} alt="" />
              </div>
              <h3>{data.name}</h3>
              <p>
                <FaQuoteLeft />
                {data.review}
                <FaQuoteRight />
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/Vidya+Jeevan/@28.4743648,77.4996851,17z/data=!4m18!1m9!3m8!1s0x390cc1248e395885:0x9099a001358dfd8f!2sVidya+Jeevan!8m2!3d28.4743601!4d77.50226!9m1!1b1!16s%2Fg%2F11w7l3p8v1!3m7!1s0x390cc1248e395885:0x9099a001358dfd8f!8m2!3d28.4743601!4d77.50226!9m1!1b1!16s%2Fg%2F11w7l3p8v1?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
            "_blank"
          )
        }
        className="studentTM-btn"
        type="button"
      >
        Check For More Reviews
      </button>
    </div>
  );
}

export default StudentsTestimonial;
