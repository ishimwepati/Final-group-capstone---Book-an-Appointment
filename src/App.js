import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import MotorcycleList from './components/main/MotorcycleList';
import AddMotorcycle from './components/main/AddMotorcycle';
import Reservations from './components/reservations/Reservations';
import Delete from './components/delete/Delete';
import Details from './components/details/Details';
import ReserveForm from './components/reservations/ReserveForm';
import Signup from './components/Signup';

const App = () => (
  <div className="app">
    <div id="mainContainer">
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/motorcycles" element={<MotorcycleList />} />
        <Route exact path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route exact path="/my-reservations" element={<Reservations />} />
        <Route exact path="/delete-motorcycle" element={<Delete />} />
        <Route path="/details/:motorcycleId" element={<Details />} />
        <Route exact path="/reserve" element={<ReserveForm />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  </div>
);

export default App;
