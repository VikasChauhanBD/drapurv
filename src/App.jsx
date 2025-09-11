import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollProgressBar from "./components/scrollProgressBar/ScrollProgressBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Surgeon from "./components/surgeon/Surgeon";
import VidyaJeevanClinic from "./components/vidyaJeevan/VidyaJeevanClinic";
import Specialities from "./components/specialities/Specialities";
import PatientsTestimonial from "./components/patientsTestimonial/PatientsTestimonial";
import VidyaJeevanWarrior from "./components/vidyaJeevan/VidyaJeevanWarrior";
import Devoted from "./components/devoted/Devoted";
import Education from "./components/medicalEducation/Education";
import Motivational from "./components/motivational/Motivational";
import VidyaJeevan from "./components/vidyaJeevan/VidyaJeevan";
import StudentsTestimonial from "./components/studentsTestimonial/StudentsTestimonial";
import Gallery from "./components/gallery/Gallery";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import Footer from "./components/footer/Footer";
import MobileFooter from "./components/mobileFooter/MobileFooter";
import RoboticTotalKneeReplacement from "./components/specialities/RoboticTotalKneeReplacement";
import useSectionRoute from "./hooks/useSectionRoute";

// ---------- Home Page ----------
function Home() {
  const sectionIds = [
    " ",
    "about",
    "leading-surgeon",
    "specialities",
    "vidya-jeevan-clinic",
    "patients-testimonial",
    "vidya-jeevan-warrior",
    "learning-and-leading",
    "ec-cba",
    "motivational",
    "vidya-jeevan-experience-center",
    "students-testimonial",
    "gallery",
  ];

  // 👇 activates URL update on scroll
  useSectionRoute(sectionIds);

  return (
    <>
      <section id=" ">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="leading-surgeon">
        <Surgeon />
      </section>

      <section id="specialities">
        <Specialities />
      </section>

      <section id="vidya-jeevan-clinic">
        <VidyaJeevanClinic />
      </section>

      <section id="patients-testimonial">
        <PatientsTestimonial />
      </section>

      <section id="vidya-jeevan-warrior">
        <VidyaJeevanWarrior />
      </section>

      <section id="learning-and-leading">
        <Devoted />
      </section>

      <section id="ec-cba">
        <Education />
      </section>

      <section id="motivational">
        <Motivational />
      </section>

      <section id="vidya-jeevan-experience-center">
        <VidyaJeevan />
      </section>

      <section id="students-testimonial">
        <StudentsTestimonial />
      </section>

      <section id="gallery">
        <Gallery />
      </section>
    </>
  );
}

// ---------- App ----------
function App() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:sectionId" element={<Home />} />
        <Route path="/testing" element={<RoboticTotalKneeReplacement />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
      <MobileFooter />
    </BrowserRouter>
  );
}

export default App;
