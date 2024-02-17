import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import MotorcycleList from './components/MotorcycleList';
import Reservations from './components/reservations/Reservations';

const App = () => (
  <Router>
    <div className="app-container">
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<MotorcycleList />} />
        <Route path="/my-reservations" element={<Reservations />} />
      </Routes>
    </div>
  </Router>
);

export default App;
