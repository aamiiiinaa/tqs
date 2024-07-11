import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
import {Contact } from "../components/Contact";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import FeedbackForm from "../components/FeedbackForm";



function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
      <HomePage />
      </section>
      
      <section id="courses">
        <Course />
      </section>
      
      <section id="about-us">
        <Aboutus />
      </section>

      <section id="gallery">
        <Gallery />
      </section>
   
      <section id="testimonial">
        <Testimonial />
      </section>
  
      <FeedbackForm />
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;
