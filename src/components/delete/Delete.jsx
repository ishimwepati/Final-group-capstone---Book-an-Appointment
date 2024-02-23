import React from 'react';
import './Delete.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavigationPanel from '../NavigationPanel';

const Delete = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return <Navigate to="/login" />;
  return (
    <>
      <NavigationPanel />
      <div className="delete-container">
        <h2>Delete motorcycle</h2>
        <div className="delete-div">
          <p>Motorcycle name</p>
          <button type="button" className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Delete;
