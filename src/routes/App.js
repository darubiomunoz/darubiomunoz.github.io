import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import HomePage from '../pages/HomePage';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import EducationSkills from '../pages/EducationSkills';
import Contact from '../pages/Contact';
import UnderDevelopment from '../pages/UnderDevelopment';
import Page404 from '../pages/Page404';

const App = () => {
  return (
    <div className="app">
      <HomePage />
      <AboutMe />
      <Portfolio />
      <EducationSkills />
      <Contact />
    </div>
  );
}

export default App;