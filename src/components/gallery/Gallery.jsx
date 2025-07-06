import { React, useEffect } from "react";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery1 from "../../assets/images/gallery-images/gallery1.png";
import Gallery2 from "../../assets/images/gallery-images/gallery2.png";
import Gallery3 from "../../assets/images/gallery-images/gallery3.png";
import Gallery4 from "../../assets/images/gallery-images/gallery4.png";
import Gallery5 from "../../assets/images/gallery-images/gallery5.png";
import Gallery6 from "../../assets/images/gallery-images/gallery6.jpg";
import Gallery7 from "../../assets/images/gallery-images/gallery7.jpg";
import Gallery8 from "../../assets/images/gallery-images/gallery8.JPG";

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="gallery" className="gallery-main-container">
      {/* <div className="gallery-inner-container"> */}
      <h1>Gallery</h1>
      <div className="gallery-images">
        <img src={Gallery1} alt="" />
        <img src={Gallery2} alt="" />
        <img src={Gallery3} alt="" />
        <img src={Gallery4} alt="" />
        <img src={Gallery5} alt="" />
        <img src={Gallery6} alt="" />
        <img src={Gallery7} alt="" />
        <img src={Gallery8} alt="" />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Gallery;
