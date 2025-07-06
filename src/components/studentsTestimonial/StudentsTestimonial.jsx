import React, { useEffect, useRef } from "react";
import "./StudentsTestimonial.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import studentsData from "../../assets/data/studentsReviews";

function StudentsTestimonial() {
  const studentsListRef = useRef(null);

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
    </div>
  );
}

export default StudentsTestimonial;
