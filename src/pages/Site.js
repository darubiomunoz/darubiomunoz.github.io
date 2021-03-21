import React from "react";
import "./styles/Site.css";

import HomePage from "../sections/HomePage";
import AboutMe from "../sections/AboutMe";
import Portfolio from "../sections/Portfolio";
import EducationSkills from "../sections/EducationSkills";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Site = () => {
  return (
    <div className="site">
      <HomePage />
      <AboutMe />
      <Portfolio />
      <EducationSkills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Site;
