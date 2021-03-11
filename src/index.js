import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'web-vitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './routes/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);