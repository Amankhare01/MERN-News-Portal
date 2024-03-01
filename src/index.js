import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import News from './components/News';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <News />
  </Router>
);
reportWebVitals();
