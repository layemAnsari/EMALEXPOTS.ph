import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './input.css';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.title = "EMALEXPOTS.ph";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
