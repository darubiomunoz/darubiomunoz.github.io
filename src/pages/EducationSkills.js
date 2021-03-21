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
            <h4 className="educationskills__institution" tabIndex="0">
              Platzi.com
            </h4>
            <p className="educationskills__career" tabIndex="0">
              Web Development
            </p>
            <p className="educationskills__date" tabIndex="0">
              2020 - 2021
            </p>
          </li>
          <li className="educationskills__listitem--education">
            <h4 className="educationskills__institution" tabIndex="0">
              Federico Santa María Technical University
            </h4>
            <p className="educationskills__career" tabIndex="0">
              Construction and management, Bachelor degree
            </p>
            <p className="educationskills__date" tabIndex="0">
              2012 - 2015
            </p>
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
          <p className="educationskills__skill" tabIndex="0">
            HTML
          </p>
          <p className="educationskills__skill" tabIndex="0">
            CSS
          </p>
          <p className="educationskills__skill" tabIndex="0">
            Bootstrap
          </p>
          <p className="educationskills__skill" tabIndex="0">
            SASS
          </p>
          <p className="educationskills__skill" tabIndex="0">
            JavaScript
          </p>
          <p className="educationskills__skill" tabIndex="0">
            React
          </p>
          <p className="educationskills__skill" tabIndex="0">
            React Router
          </p>
          <p className="educationskills__skill" tabIndex="0">
            JSX
          </p>
          <p className="educationskills__skill" tabIndex="0">
            Markdown
          </p>
          <p className="educationskills__skill" tabIndex="0">
            Mobile First
          </p>
          <p className="educationskills__skill" tabIndex="0">
            Responsive Design
          </p>
          <p className="educationskills__skill" tabIndex="0">
            Web Accessibility
          </p>
          <p className="educationskills__skill" tabIndex="0">
            NPM
          </p>
          <p className="educationskills__skill" tabIndex="0">
            SPA
          </p>
          <p className="educationskills__skill" tabIndex="0">
            English
          </p>
          <p className="educationskills__skill" tabIndex="0">
            French
          </p>
          <p className="educationskills__skill" tabIndex="0">
            Spanish
          </p>
        </li>
      </section>
    </div>
  );
};

export default EducationSkills;
