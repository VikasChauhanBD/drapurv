import React from "react";
import Header from "../header/Header";
import About from "../about/About";
import Surgeon from "../surgeon/Surgeon";
import VidyaJeevanClinic from "../vidyaJeevan/VidyaJeevanClinic";
import Specialities from "../specialities/Specialities";
import PatientsTestimonial from "../patientsTestimonial/PatientsTestimonial";
import VidyaJeevanWarrior from "../vidyaJeevan/VidyaJeevanWarrior";
import Devoted from "../devoted/Devoted";
import Education from "../medicalEducation/Education";
import Motivational from "../motivational/Motivational";
import VidyaJeevan from "../vidyaJeevan/VidyaJeevan";
import StudentsTestimonial from "../studentsTestimonial/StudentsTestimonial";
import Gallery from "../gallery/Gallery";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Surgeon />
      <Specialities />
      <VidyaJeevanClinic />
      <PatientsTestimonial />
      <VidyaJeevanWarrior />
      <Devoted />
      <Education />
      <Motivational />
      <VidyaJeevan />
      <StudentsTestimonial />
      <Gallery />
    </div>
  );
}

export default Home;
