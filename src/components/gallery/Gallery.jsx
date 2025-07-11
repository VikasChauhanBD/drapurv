import React, { useEffect, useState } from "react";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import galleryData from "../../assets/data/galleryImagesData";

function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const isModalOpen = selectedGallery !== null;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setSelectedGallery(null);
  };

  return (
    <div id="gallery" className="gallery-main-container">
      <h1>Gallery</h1>

      {/* 📁 Folder View */}
      <div className="gallery-folder-list">
        {galleryData.map((gallery, index) => (
          <div
            key={index}
            className="gallery-folder"
            onClick={() => setSelectedGallery(index)}
          >
            <img
              src={gallery.images[0]}
              alt="thumbnail"
              className="folder-thumbnail"
            />
            <h2>{gallery.title}</h2>
          </div>
        ))}
      </div>

      {/* 🖼️ Popup Modal View */}
      {selectedGallery !== null && (
        <div className="gallery-modal-overlay">
          <div className="gallery-modal">
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <h2>{galleryData[selectedGallery].title}</h2>
            <div className="gallery-images-list">
              {galleryData[selectedGallery].images.map((img, i) => (
                <img key={i} src={img} alt={`gallery-${i}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
