// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './screens/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Crea el root para React 18
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
