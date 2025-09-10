import React, { useRef, useState } from "react";
import "./VidyaJeevanWarrior.css";
// import Image1 from "../../assets/images/vidya-jeevan-images/warrior1.JPG";
// import Image2 from "../../assets/images/vidya-jeevan-images/warrior2.JPG";
import Image3 from "../../assets/images/vidya-jeevan-images/warrior3.JPG";
import Image4 from "../../assets/images/vidya-jeevan-images/warrior4.JPG";
import Image5 from "../../assets/images/vidya-jeevan-images/warrior5.JPG";

const reelsData = [
  //   {
  //     id: 1,
  //     thumbnail: Image1,
  //     url: "https://www.youtube.com/embed/L0wKMQdOs5E",
  //   },
  //   {
  //     id: 2,
  //     thumbnail: Image2,
  //     url: "https://www.youtube.com/embed/4MgO2rcY7io",
  //   },
  {
    id: 3,
    thumbnail: Image3,
    url: "https://www.youtube.com/embed/dxxGFB208uE",
  },
  {
    id: 4,
    thumbnail: Image4,
    url: "https://www.youtube.com/embed/BTF6rDAwN1U",
  },
  {
    id: 5,
    thumbnail: Image5,
    url: "https://www.youtube.com/embed/gBHSSXj3Y-I",
  },
];

function VidyaJeevanWarrior() {
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
    <section id="vidya-jeevan-warrior" className="vjw-main-container">
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
    </section>
  );
}

export default VidyaJeevanWarrior;
