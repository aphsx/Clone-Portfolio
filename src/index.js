import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import your global CSS
import App from './App';  // Import your App component

// Create a root element and render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
