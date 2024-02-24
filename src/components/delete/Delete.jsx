import React, { useEffect } from 'react';
import './Delete.css';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/userSlice';
import { getMotorcycles, deleteMotorcycle } from '../../redux/motorcycleSlice';
import NavigationPanel from '../NavigationPanel';

const Delete = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);

  useEffect(() => {
    if (!currentUser) {
      dispatch(login());
    }

    dispatch(getMotorcycles(currentUser.token));
  }, [currentUser, dispatch]);

  if (!currentUser) return <Navigate to="/login" />;

  const handleDeleteClick = (motorcycleId) => {
    dispatch(deleteMotorcycle(motorcycleId));
  };

  return (
    <>
      <NavigationPanel />
      <div className="delete-container">
        <h2>Delete motorcycle</h2>
        <div className="delete-div">
          {motorcycles.map((motorcycle) => (
            <div key={motorcycle.id} className="delete-card">
              <p>
                Motorcycle name:
                {motorcycle.make}
              </p>
              <button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteClick(motorcycle.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Delete;
