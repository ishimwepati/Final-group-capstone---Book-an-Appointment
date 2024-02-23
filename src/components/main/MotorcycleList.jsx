import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getMotorcycles } from '../../redux/motorcycleSlice';
import NavigationPanel from '../NavigationPanel';
import './MotorcycleList.css';

const MotorcycleList = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const authorization = useSelector((state) => state.user.requestHeader);
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);
  useEffect(() => {
    if (authorization) {
      dispatch(getMotorcycles(authorization));
    }
  }, [authorization, dispatch]);

  if (!currentUser) return <Navigate to="/login" />;

  return (
    <>
      <NavigationPanel />
      <div className="motorcycle-list-container">
        <div className="carousel-container">
          <FaChevronLeft className="carousel-arrow" />
          {motorcycles && motorcycles.length === 0 ? (
            <p className="no-items-message">No motorcycles found</p>
          ) : (
            <ul className="motorcycle-list">
              {motorcycles
                && motorcycles.map((motorcycle) => (
                  <li key={motorcycle.id} className="motorcycle-item">
                    <div className="motorcycle-details">
                      <h3 className="motorcycle-name">
                        {motorcycle.motorcycle_name}
                      </h3>
                      <p className="motorcycle-description">
                        {motorcycle.description}
                      </p>
                      <p className="motorcycle-description">
                        {motorcycle.image}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          )}
          <FaChevronRight className="carousel-arrow" />
        </div>
      </div>
    </>
  );
};

export default MotorcycleList;
