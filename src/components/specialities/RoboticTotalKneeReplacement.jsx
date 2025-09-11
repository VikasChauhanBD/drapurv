import { React, useEffect } from "react";
import "./RoboticTotalKneeReplacement.css";
import AOS from "aos";
import "aos/dist/aos.css";
import EPS1 from "../../assets/images/patients-stories/english-ps-1.jpeg";
import EPS2 from "../../assets/images/patients-stories/english-ps-2.jpeg";
import EPS3 from "../../assets/images/patients-stories/english-ps-3.jpeg";
import EPS4 from "../../assets/images/patients-stories/english-ps-4.jpeg";
import EPS5 from "../../assets/images/patients-stories/english-ps-5.jpeg";

function RoboticTotalKneeReplacement() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  const paitentData = [
    {
      image: EPS1,
      name: "Patients 1",
    },
    {
      image: EPS2,
      name: "Patients 2",
    },
    {
      image: EPS3,
      name: "Patients 3",
    },
    {
      image: EPS4,
      name: "Patients 4",
    },
    {
      image: EPS5,
      name: "Patients 5",
    },
    {
      image: EPS1,
      name: "Patients 1",
      topic: "Complex and Revision Joint Replacements",
      about:
        "Complex and revision joint replacements are more complicated surgeries performed when a previous joint replacement fails, is infected, or when the original surgery is made difficult by severe bone damage or anatomical challenges. Revision surgeries require removing the old implant, which can involve significant bone loss, necessitating specialized implants with longer stems, the use of bone grafts or metal augments to rebuild the bone, and extensive pre-operative planning. These procedures demand a higher level of surgical expertise, specialized instruments, and longer operating times than primary joint replacements, carrying a higher risk of complications.",
    },

    {
      image: EPS1,
      name: "Patients 1",
      topic: "Arthroscopic ACL Reconstructions",
      about:
        "Arthroscopic ACL reconstruction is a minimally invasive surgical procedure that repairs a torn Anterior Cruciate Ligament (ACL) in the knee by using a graft from the patient's own body to replace the damaged ligament. A surgeon inserts a small camera (arthroscope) and instruments through tiny incisions to see the joint and perform the repair, which involves creating bone tunnels for the graft, securing it with screws or buttons, and allowing it to heal and integrate into the bone.",
    },
    {
      image: EPS1,
      name: "Patients 1",
      topic: "Shoulder/Rotator Cuff Surgeries",
      about:
        "Rotator cuff surgery repairs a torn rotator cuff by reattaching the damaged tendon to the arm bone, typically using arthroscopic (minimally invasive) or open techniques, with suture anchors to secure the tendon. Other options for severe injuries include tendon transfer or a reverse shoulder replacement. Recovery is a lengthy process, often taking up to a year or more, and involves a combination of rest and physical therapy to regain strength and function.",
    },

    {
      image: EPS1,
      name: "Patients 1",
      topic: "Complex Trauma & Pelvic-Acetabular Surgeries",
      about:
        "Complex trauma refers to severe, high-energy injuries, often involving pelvic and acetabular fractures, which are fractures of the pelvis and hip socket. These injuries, frequently caused by car accidents or falls, are serious and require immediate, specialized surgical treatment to stabilize the bones, restore alignment, and preserve function, according to drnikhilverma.com and Dr Nikhil Gadre. Surgeries may involve open reduction and internal fixation (ORIF) with plates and screws or, in severe cases, hip replacement.",
    },
    {
      image: EPS1,
      name: "Patients 1",
      topic: "Limb Deformity Corrections & Spine Surgeries",
      about:
        "Limb deformity correction surgery involves techniques like osteotomy (cutting and reshaping bones) and the use of external or internal fixators (like the Ilizarov frame) to gradually straighten or lengthen bones. Spine surgery, often for conditions like scoliosis, uses procedures such as spinal fusion to join vertebrae and correct abnormal curves. Both types of surgery aim to improve alignment, mobility, and relieve pain, utilizing specialized techniques to achieve accurate, functional, and cosmetic outcomes.",
    },
  ];

  return (
    <div id="robotic-total-knee-replacement" className="robotic-main-container">
      <h1 className="robotic-heading">Robotic Total Knee Replacement</h1>
      <p className="robotic-sub-heading">
        Robotic Total Knee Replacement (Robotic TKR) is an advanced form of knee
        replacement surgery where surgeons use robotic assistance for better
        accuracy and precision in implant placement. It combines the surgeon’s
        expertise with computer-assisted technology.
      </p>

      <div className="robotic-cards">
        {paitentData.map((data, index) => (
          <div key={index} className="robotic-card">
            {index % 2 === 0 ? (
              <>
                <div className="robotic-card-image">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="robotic-card-info">
                  <h4>{data.name}</h4>
                </div>
              </>
            ) : (
              <>
                <div className="robotic-card-info">
                  <h4>{data.name}</h4>
                </div>
                <div className="robotic-card-image">
                  <img src={data.image} alt={data.name} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoboticTotalKneeReplacement;
