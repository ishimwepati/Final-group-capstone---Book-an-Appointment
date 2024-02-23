import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './Reservations.css';
import NavigationPanel from '../NavigationPanel';

const Reservations = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <NavigationPanel />
      <div className="reservations-container">
        <h2>My Reservations</h2>
        <div className="row">
          <p>Motorcycle name</p>
          <p>City</p>
          <p>Reserve date</p>
        </div>
      </div>
    </>
  );
};

export default Reservations;
