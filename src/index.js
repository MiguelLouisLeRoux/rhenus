import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Welcome from './welcome';
import reportWebVitals from './reportWebVitals';
import Dashboard from './dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/rhenus">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard/:dashboardValue" element={<Dashboard />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
);

reportWebVitals();