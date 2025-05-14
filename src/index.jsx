import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import i18n from './i18n';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
