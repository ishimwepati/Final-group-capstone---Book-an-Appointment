import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import MotorcycleList from './components/main/MotorcycleList';
import Reservations from './components/reservations/Reservations';
import Delete from './components/delete/Delete';
import Details from './components/details/Details';

const App = () => (
  <Router>
    <div className="app-container">
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<MotorcycleList />} />
        <Route path="/my-reservations" element={<Reservations />} />
        <Route path="/delete-motorcycle" element={<Delete />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  </Router>
);

export default App;
