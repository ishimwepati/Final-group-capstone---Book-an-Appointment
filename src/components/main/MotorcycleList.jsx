import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getMotorcycles } from '../../redux/motorcycleSlice';
import NavigationPanel from '../NavigationPanel';
import './MotorcycleList.css';

const MotorcycleList = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const authorization = useSelector((state) => state.user.requestHeader);
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (authorization) {
      dispatch(getMotorcycles(authorization));
    }
  }, [authorization, dispatch]);

  if (!currentUser) return <Navigate to="/login" />;

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, motorcycles.length - 3));
  };

  return (
    <>
      <NavigationPanel />
      <div className="motorcycle-list-container">
        <div className="carousel-container">
          <FaChevronLeft
            className="carousel-arrow"
            onClick={handleLeftArrowClick}
          />
          {motorcycles && motorcycles.length === 0 ? (
            <p className="no-items-message">No motorcycles found</p>
          ) : (
            <ul className="motorcycle-list">
              {motorcycles
                && motorcycles
                  .slice(currentIndex, currentIndex + 3)
                  .map((motorcycle) => (
                    <li key={motorcycle.id} className="motorcycle-item">
                      {motorcycle && (
                        <Link
                          to={{
                            pathname: `/details/${motorcycle.id}`,
                            state: { motorcycle },
                          }}
                          className="motorcycle-link"
                        >
                          <div className="motorcycle-details">
                            <h3 className="motorcycle-name">
                              {motorcycle.make}
                            </h3>
                            <img src={motorcycle.image} alt={motorcycle.make} />
                          </div>
                        </Link>
                      )}
                    </li>
                  ))}
            </ul>
          )}
          <FaChevronRight
            className="carousel-arrow"
            onClick={handleRightArrowClick}
          />
        </div>
      </div>
    </>
  );
};

export default MotorcycleList;
