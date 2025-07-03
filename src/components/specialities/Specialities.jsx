import { React, useEffect } from "react";
import "./Specialities.css";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import Bone1 from "../../assets/images/specialities-images/bone-1.png";
import Bone2 from "../../assets/images/specialities-images/bone-2.png";
import Bone3 from "../../assets/images/specialities-images/bone-3.png";
import Bone4 from "../../assets/images/specialities-images/bone-4.png";
import Bone5 from "../../assets/images/specialities-images/bone-5.png";
import Bone6 from "../../assets/images/specialities-images/bone-6.png";

function Specialities() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    if (!isTouchDevice()) {
      const categories = document.querySelectorAll(".tilt");
      categories.forEach((element) => {
        VanillaTilt.init(element, {
          max: 25,
          speed: 400,
          reverse: true,
          glare: true,
          scale: 1.1,
          "max-glare": 0.3,
        });
      });
    }
  }, []);

  const specialitiesData = [
    {
      image: Bone1,
      topic: "Robotic Total Knee Replacement",
    },
    {
      image: Bone2,
      topic: "Complex and Revision Joint Replacements",
    },
    {
      image: Bone3,
      topic: "Arthroscopic ACL Reconstructions",
    },
    {
      image: Bone4,
      topic: "Shoulder/Rotator Cuff Surgeries",
    },
    {
      image: Bone5,
      topic: "Complex Trauma & Pelvic-Acetabular Surgeries",
    },
    {
      image: Bone6,
      topic: "Limb Deformity Corrections & Spine Surgeries",
    },
  ];

  return (
    <div id="specialities" className="specialities-main-container">
      <h1>From Bones to Joints—Complete Orthopedic Solutions</h1>
      <div className="specialities-cards">
        <p className="specialities-subtitle">
          From Fractures to Robotic Joint Replacements—Complete Orthopedic
          Expertise <br /> Dr. Apurv Mehra combines years of surgical experience
          with advanced robotic technology to deliver precise care, faster
          recovery, and long-term results you can rely on
        </p>
        {specialitiesData.map((data, index) => (
          <div key={index} className="specialities-card tilt">
            <img src={data.image} alt="bone image" />
            <h5>{data.topic}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specialities;
