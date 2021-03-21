import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Site from '../pages/Site';
import UnderDevelopment from '../pages/UnderDevelopment';
import Page404 from '../pages/Page404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Site} />
        <Route exact path="/underdevelopment" component={UnderDevelopment} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;