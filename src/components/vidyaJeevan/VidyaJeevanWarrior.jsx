import React, { useRef, useState } from "react";
import "./VidyaJeevanWarrior.css";
// import Image1 from "../../assets/images/vidya-jeevan-images/warrior1.JPG";
import Image2 from "../../assets/images/vidya-jeevan-images/warrior2.JPG";
import Image3 from "../../assets/images/vidya-jeevan-images/warrior3.JPG";
import Image4 from "../../assets/images/vidya-jeevan-images/warrior4.JPG";
import Image5 from "../../assets/images/vidya-jeevan-images/warrior5.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const reelsData = [
  //   {
  //     id: 1,
  //     thumbnail: Image1,
  //     url: "https://www.youtube.com/embed/L0wKMQdOs5E",
  //   },
  {
    id: 2,
    thumbnail: Image2,
    url: "https://www.youtube.com/embed/v7ssDNA51fk",
  },
  {
    id: 3,
    thumbnail: Image3,
    url: "https://www.youtube.com/embed/NTR6tllW4WE",
  },
  {
    id: 4,
    thumbnail: Image4,
    url: "https://www.youtube.com/embed/1NE_HSfbCEM",
  },
  {
    id: 5,
    thumbnail: Image5,
    url: "https://www.youtube.com/embed/qZnKesoY5YY",
  },
];

function VidyaJeevanWarrior() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  const scrollRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".vjw-card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 20; // add gap
      const { scrollLeft } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="vidya-jeevan-warrior" className="vjw-main-container">
      <h1>VIDYA JEEVAN WARRIOR</h1>
      <div className="vjw-wrapper">
        <button className="vjw-btn left" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="vjw-cards" ref={scrollRef}>
          {reelsData
            .slice()
            .reverse()
            .map((reel) => (
              <div
                key={reel.id}
                className="vjw-card"
                onClick={() =>
                  setActiveVideo(activeVideo === reel.id ? null : reel.id)
                }
              >
                {activeVideo === reel.id ? (
                  <iframe
                    src={`${reel.url}?autoplay=1`}
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    title={`Reel ${reel.id}`}
                  ></iframe>
                ) : (
                  <>
                    <img src={reel.thumbnail} alt="Reel Thumbnail" />
                    <div className="vjw-play-icon">▶</div>
                  </>
                )}
              </div>
            ))}
        </div>

        <button className="vjw-btn right" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default VidyaJeevanWarrior;
