import React, { useState } from "react";
import "./Motivational.css";
import Image1 from "../../assets/images/motivational-images/motivational-image-1.png";
import Image2 from "../../assets/images/motivational-images/motivational-image-2.png";
import Image3 from "../../assets/images/motivational-images/motivational-image-3.png";
import Image4 from "../../assets/images/motivational-images/motivational-image-4.png";
import { NavLink } from "react-router-dom";

function Motivational() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageData = [
    {
      src: Image1,
      isSecond: false,
      link: "https://www.youtube.com/playlist?list=PLPlijGAHvv9_iuV44Em4aR696G7PnamHO",
    },
    {
      src: Image3,
      isSecond: true,
      link: "https://www.youtube.com/playlist?list=PLPlijGAHvv9_iuV44Em4aR696G7PnamHO",
    },
    {
      src: Image2,
      isSecond: false,
      link: "https://www.youtube.com/playlist?list=PLPlijGAHvv9_iuV44Em4aR696G7PnamHO",
    },
    {
      src: Image4,
      isSecond: true,
      link: "https://www.youtube.com/playlist?list=PLPlijGAHvv9_iuV44Em4aR696G7PnamHO",
    },
  ];

  return (
    <div id="motivational" className="motivational-main-container">
      <div className="motivational-inner-container">
        <div className="motivational-image-div1">
          {imageData.slice(0, 2).map((item, index) => (
            <div
              className={`image-wrapper ${
                item.isSecond ? "second-wrapper" : ""
              }`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <NavLink to={item.link} target="_blank">
                <img
                  src={item.src}
                  className="banner-wrapper"
                  alt="Motivational"
                />
              </NavLink>
              {hoveredIndex === index && (
                <div className="hover-message-static">Watch Now</div>
              )}
            </div>
          ))}
        </div>

        <div className="motivational-image-div2">
          {imageData.slice(2).map((item, index) => (
            <div
              className={`image-wrapper ${
                item.isSecond ? "second-wrapper" : ""
              }`}
              key={index + 2}
              onMouseEnter={() => setHoveredIndex(index + 2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <NavLink to={item.link} target="_blank">
                <img
                  src={item.src}
                  className="banner-wrapper"
                  alt="Motivational"
                />
              </NavLink>
              {hoveredIndex === index + 2 && (
                <div className="hover-message-static">Watch Now</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Motivational;
