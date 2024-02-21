// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import MotorcycleList from './components/main/MotorcycleList';
import Reservations from './components/reservations/Reservations';
import Delete from './components/delete/Delete';
import AddItem from './components/delete2/AddItem';
import Details from './components/details/Details';
import ReserveForm from './components/reservations/ReserveForm';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignup = (user) => {
    // For simplicity, let's just set the user as the current user
    setCurrentUser(user);
  };

  const handleLogin = (user) => {
    // For simplicity, let's just set the user as the current user
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        {currentUser ? (
          <NavigationPanel currentUser={currentUser} onLogout={handleLogout} />
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          </Routes>
        )}

        {currentUser && (
          <Routes>
            <Route path="/" element={<MotorcycleList />} />
            <Route path="/my-reservations" element={<Reservations />} />
            <Route path="/delete-motorcycle" element={<Delete />} />
            <Route path="/add-motorcycle" element={<AddItem />} />
            <Route path="/details" element={<Details />} />
            <Route path="/reserve-form" element={<ReserveForm />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
