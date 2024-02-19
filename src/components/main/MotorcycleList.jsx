import React from 'react';
import './MotorcycleList.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MotorcycleList = () => (
  <div className="motorcycle-list-container">
    <div className="carousel-container">
      <FaChevronLeft className="carousel-arrow" />
      <p className="no-items-message">Itemes will be added shortly</p>
      <FaChevronRight className="carousel-arrow" />
    </div>
  </div>
);

export default MotorcycleList;
