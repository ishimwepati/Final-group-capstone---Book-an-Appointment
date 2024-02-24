import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMotorcycles } from '../../redux/motorcycleSlice';
import NavigationPanel from '../NavigationPanel';
import './Details.css';

const Details = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);

  useEffect(() => {
    if (!currentUser) {
      // Handle authentication if needed
      return;
    }

    // Check if motorcycles are already loaded, if not, fetch them
    if (motorcycles.length === 0) {
      dispatch(getMotorcycles(currentUser.token));
    }
  }, [currentUser, dispatch, motorcycles]);

  // Extract motorcycle ID from the URL
  const { pathname } = location;
  const motorcycleId = pathname.split('/details/')[1];

  // Find the corresponding motorcycle using the ID
  const motorcycle = motorcycles.find((m) => m.id.toString() === motorcycleId);

  // Log the motorcycle data to the console for debugging
  useEffect(() => {
    console.log('Motorcycle Data:', motorcycle);
  }, [motorcycle]);

  return (
    <>
      <NavigationPanel />
      <div className="details-container">
        <h2>Motorcycle Details</h2>
        <div className="details-div">
          {motorcycle && (
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <td>Motorcycle Name</td>
                  <td>{motorcycle.make}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{motorcycle.description}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>{motorcycle.color}</td>
                </tr>
              </tbody>
            </table>
          )}
          <button type="button" className="reservation-button">
            Make Reservation
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
