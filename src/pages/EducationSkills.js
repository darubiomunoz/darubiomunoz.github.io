import React from "react";
import "./styles/EducationSkills.css";

const EducationSkills = () => {
  return (
    <div id="educationskills" className="educationskills">
      <section className="educationskills__container">
        <h3 className="educationskills__title" tabIndex="0">
          Education
        </h3>
        <p className="educationskills__subtitle mt-3" tabIndex="0">
          Continuous learning is a constant in my personal and professional
          development.
        </p>
        <ul className="educationskills__unorderedlist">
          <li className="educationskills__listitem--education">
            <h4 className="educationskills__institution">Platzi.com</h4>
            <p className="educationskills__career">Web Development</p>
            <p className="educationskills__date">2020 - 2021</p>
          </li>
          <li className="educationskills__listitem--education">
            <h4 className="educationskills__institution">
              Federico Santa María Technical University
            </h4>
            <p className="educationskills__career">
              Construction and management, Bachelor degree
            </p>
            <p className="educationskills__date">2012 - 2015</p>
          </li>
        </ul>
      </section>
      <section className="educationskills__container">
        <h3 className="educationskills__title mt-5" tabIndex="0">
          Skills
        </h3>
        <p className="educationskills__subtitle mt-3" tabIndex="0">
          I'd like to keep adding skills to this list in the coming months.
          Skills like React Native and Node.JS.
        </p>
        <li className="educationskills__listitem--skill">
          <p className="educationskills__skill">HTML</p>
          <p className="educationskills__skill">CSS</p>
          <p className="educationskills__skill">Bootstrap</p>
          <p className="educationskills__skill">SASS</p>
          <p className="educationskills__skill">JavaScript</p>
          <p className="educationskills__skill">React</p>
          <p className="educationskills__skill">React Router</p>
          <p className="educationskills__skill">JSX</p>
          <p className="educationskills__skill">Markdown</p>
          <p className="educationskills__skill">Mobile First</p>
          <p className="educationskills__skill">Responsive Design</p>
          <p className="educationskills__skill">Web Accessibility</p>
          <p className="educationskills__skill">NPM</p>
          <p className="educationskills__skill">SPA</p>
          <p className="educationskills__skill">English</p>
          <p className="educationskills__skill">French</p>
          <p className="educationskills__skill">Spanish</p>
        </li>
      </section>
    </div>
  );
};

export default EducationSkills;
