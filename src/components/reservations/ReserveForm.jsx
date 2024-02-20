import React from 'react';
import './ReserveForm.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavigationPanel from '../NavigationPanel';

const ReserveForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <NavigationPanel />
      <div className="reserve-form-container">
        <h2>Your Motorcycle, Your Adventure</h2>
        <p>
          Select from our array of motorcycles and book your test ride effortlessly.
          Whether you&apos;re a seasoned rider or a beginner, choose your date, pick
          the perfect bike, and set the wheels in motion for an exciting journey.
          Start your motorcycle story with us!
        </p>
        <form className="reservation-form">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="date">Select your date:</label>
          <input type="date" id="date" name="date" />

          <label htmlFor="motorcycle">Select a motorcycle:</label>
          <select id="motorcycle" name="motorcycle">
            <option value="" disabled>
              Select a motorcycle
            </option>
          </select>

          <label htmlFor="city">Select your city:</label>
          <select id="city" name="city">
            <option value="" disabled>
              Select your city
            </option>
          </select>
          {/* eslint-enable jsx-a11y/label-has-associated-control */}
          <button type="submit">Book</button>
        </form>
      </div>
    </>
  );
};

export default ReserveForm;
