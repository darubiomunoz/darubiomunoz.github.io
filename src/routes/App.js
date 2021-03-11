import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

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
        <Route exact path="/" component={UnderDevelopment} />
        <Route exact path="/aboutme" component={UnderDevelopment} />
        <Route exact path="/portfolio" component={UnderDevelopment} />
        <Route exact path="/resume" component={UnderDevelopment} />
        <Route exact path="/contact" component={UnderDevelopment} />
        <Route exact path="/underdevelopment" component={UnderDevelopment} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;