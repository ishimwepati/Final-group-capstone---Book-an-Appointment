import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './MotorcycleList.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NavigationPanel from '../NavigationPanel';

const MotorcycleList = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <NavigationPanel />
      <div className="motorcycle-list-container">
        <div className="carousel-container">
          <FaChevronLeft className="carousel-arrow" />
          <p className="no-items-message">No items right now</p>
          <FaChevronRight className="carousel-arrow" />
        </div>
      </div>
    </>
  );
};

export default MotorcycleList;
