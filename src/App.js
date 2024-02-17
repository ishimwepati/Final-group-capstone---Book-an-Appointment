// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import MotorcycleList from './components/MotorcycleList';
import './App.css'; // Create an App.css file for styling

const App = () => (
  <Router>
    <div className="app-container">
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<MotorcycleList />} />
      </Routes>
    </div>
  </Router>
);

export default App;
