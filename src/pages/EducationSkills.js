import React from "react";
import "./styles/EducationSkills.css";

const EducationSkills = () => {
  return (
    <div id="educationskills" className="educationskills">
      <h3 className="educationskills__title" tabIndex="0">
        Education
      </h3>
      <p className="educationskills__subtitle mt-3" tabIndex="0">
        Continuous learning is a constant in my personal and professional development.
      </p>
      <h3 className="educationskills__title mt-5" tabIndex="0">
        Skills
      </h3>
      <p className="educationskills__subtitle mt-3" tabIndex="0">
        I'd like to keep adding skills to this list in the coming months. Skills like React Native and Node.JS.
      </p>
    </div>
  );
};

export default EducationSkills;
