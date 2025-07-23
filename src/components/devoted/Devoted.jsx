import React, { useState } from "react";
import "./Devoted.css";
import Image1 from "../../assets/images/about-image.webp";
import Image2 from "../../assets/images/no1-cba.png";
import Image3 from "../../assets/images/best-surgeon-images/surgeon2.png";
import Image4 from "../../assets/images/education_ec.webp";
import Image5 from "../../assets/images/best-surgeon-images/surgeon4.png";

function Devoted() {
  const [selectedDevoted, setSelectedDevoted] = useState(1);

  const handleDevotedChange = (id) => {
    setSelectedDevoted(id);
  };

  const devotedData = [
    {
      id: 1,
      title: "A Globally Acclaimed Educator",
      content:
        "Dr. Apurv Mehra is recognized both nationally and internationally as a leading faculty in orthopaedics. Known for his clarity, energy, and student-first approach, he has taught and mentored thousands of medical aspirants across India and beyond. His sessions go beyond theory — helping students believe in themselves, push their limits, and dream bigger.",
      image: Image1,
    },
    {
      id: 2,
      title: "Teaching with Heart & Humour",
      content:
        "What truly sets Dr. Mehra apart is his <b>unique style of teaching</b> — a powerful mix of knowledge, humor, and heart. His legendary Ortho Dhoom Dhadaka lectures have become a rite of passage for PG aspirants, widely recommended by toppers year after year. He doesn’t just teach medicine — he inspires a mindset, a discipline, and a sense of purpose.",
      image: Image2,
    },
    {
      id: 3,
      title: "Author of Trusted Bestsellers",
      content:
        "A gifted communicator on and off the stage, Dr. Mehra is also the author of several <b>international bestsellers</b>, including Orthopedics Quick Review, NEET PG: The Next Level, and AIIMS: The Precise Version. These books are valued by students across South-East Asia for their clarity, precision, and exam relevance.",
      image: Image3,
    },
    {
      id: 4,
      title: "Founder of Transformative Platforms",
      content:
        "As a visionary entrepreneur, Dr. Mehra co - founded <b>Cerebellum Academy</b> and <b>eConceptual</b> — two platforms that have redefined how medical students learn in the digital age. These initiatives provide <b>cutting-edge content, real-world mentorship</b>, and a deeply <b>motivational learning environment</b>, bridging the gap between theory and clinical practice.",
      image: Image4,
    },
    {
      id: 5,
      title: "More Than a Mentor — A Movement",
      content:
        "For many students, Dr. Apurv Mehra is more than just a teacher — he’s a <b>mentor, a role model, and a spark that ignites change</b>. His ability to connect, uplift, and guide with sincerity has created a lasting impact that reaches far beyond classrooms and textbooks. His mission is simple yet profound: <b>to give back, through education, all that he has received.</b>",
      image: Image5,
    },
  ];

  return (
    <div id="devoted" className="devoted-main-container">
      <h1>A Life Devoted to Learning & Leading</h1>
      <h2>Learning as a mission. Leading as a legacy</h2>

      <div className="devoted-inner-container">
        {/* Devoted Titles + Content */}
        <div className="devoted-list-container">
          {devotedData.map((data) => (
            <div
              key={data.id}
              className={`devoted-item ${
                selectedDevoted === data.id
                  ? "active-devoted-item"
                  : "border-gray-300"
              }`}
              onClick={() => handleDevotedChange(data.id)}
            >
              <div className="devoted-header">
                <h4
                  className={`devoted-title ${
                    selectedDevoted === data.id ? "text-purple" : "text-black"
                  }`}
                >
                  {data.title}
                </h4>
              </div>

              {selectedDevoted === data.id && (
                <div
                  className="active-devoted-content"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Devoted Image */}
        <div className="devoted-image-container">
          <div className="devoted-image-wrapper">
            <div className="devoted-image-inner">
              {devotedData.map((data) => (
                <img
                  key={data.id}
                  src={data.image}
                  alt={`devoted ${data.id}`}
                  className={`devoted-image ${
                    selectedDevoted === data.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Devoted Indicators */}
            <div className="devoted-indicators">
              {devotedData.map((data) => (
                <span
                  key={data.id}
                  className={`devoted-indicator ${
                    selectedDevoted === data.id ? "bg-blue-500" : "bg-white-700"
                  }`}
                  onClick={() => handleDevotedChange(data.id)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devoted;
