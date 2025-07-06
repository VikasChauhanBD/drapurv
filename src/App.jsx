import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollProgressBar from "./components/scrollProgressBar/ScrollProgressBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Surgeon from "./components/surgeon/Surgeon";
import VidyaJeevanClinic from "./components/vidyaJeevan/VidyaJeevanClinic";
import Specialities from "./components/specialities/Specialities";
import PatientsTestimonial from "./components/patientsTestimonial/PatientsTestimonial";
import Education from "./components/medicalEducation/Education";
import EducationKnowMore from "./components/medicalEducation/EducationKnowMore";
import Motivational from "./components/motivational/Motivational";
import VidyaJeevan from "./components/vidyaJeevan/VidyaJeevan";
import StudentsTestimonial from "./components/studentsTestimonial/StudentsTestimonial";
import Gallery from "./components/gallery/Gallery";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <Router>
      {/* <ScrollProgressBar /> */}

      <section id="">
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

      <section id="ec-cba">
        <Education />
      </section>

      <section id="education-know-more">
        <EducationKnowMore />
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

      <ScrollToTopButton />
    </Router>
  );
}

export default App;
