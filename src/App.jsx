import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/sideMenu/SideMenu";
import Header from "./components/header/Header";
import Meet from "./components/meet-sir/Meet";
import Surgeon from "./components/surgeon/Surgeon";
import VidyaJeevanClinic from "./components/vidya-jeevan/VidyaJeevanClinic";
import Specialities from "./components/specialities/Specialities";
import PatientsTestimonial from "./components/patients-testimonial/PatientsTestimonial";
import Education from "./components/medical-education/Education";
import EducationKnowMore from "./components/medical-education/EducationKnowMore";
import Motivational from "./components/motivational/Motivational";
import VidyaJeevan from "./components/vidya-jeevan/VidyaJeevan";
import StudentsTestimonial from "./components/students-testimonial/StudentsTestimonial";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <Router>
      <SideMenu />
      <section id="">
        <Header />
      </section>

      <section id="meet">
        <Meet />
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

      <section id="education">
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
    </Router>
  );
}

export default App;
