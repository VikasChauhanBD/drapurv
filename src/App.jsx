import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/sideMenu/SideMenu";
import Header from "./components/header/Header";
import About from "./components/about/About";
import VidyaJeevanClinic from "./components/vidya-jeevan/VidyaJeevanClinic";
import Categories from "./components/categories/Categories";
import PatientsTestimonial from "./components/patients-testimonial/PatientsTestimonial";
import Education from "./components/medical-education/Education";
import EducationKnowMore from "./components/medical-education/EducationKnowMore";
import VidyaJeevan from "./components/vidya-jeevan/VidyaJeevan";
import StudentsTestimonial from "./components/students-testimonial/StudentsTestimonial";
import Gallery from "./components/gallery/Gallery";
import WhoWeAre from "./components/testing/WhoWeAre";

function App() {
  return (
    <Router>
      <SideMenu />
      <section id="">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="vidya-jeevan-clinic">
        <VidyaJeevanClinic />
      </section>

      <section id="categories">
        <Categories />
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

    // <div className="App">
    //   <WhoWeAre />
    // </div>
  );
}

export default App;
