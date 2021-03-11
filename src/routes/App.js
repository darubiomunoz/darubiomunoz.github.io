import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from '../pages/HomePage';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import UnderDevelopment from '../pages/UnderDevelopment';
import Page404 from '../pages/Page404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/underdevelopment" component={UnderDevelopment} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;