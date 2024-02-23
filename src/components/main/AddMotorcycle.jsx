import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getMotorcycles } from '../../redux/motorcycleSlice';
import NavigationPanel from '../NavigationPanel';
import './MotorcycleList.css';

const AddMotorcycle = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const authorization = useSelector((state) => state.user.requestHeader);
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);
  useEffect(() => {
    if (authorization) {
      dispatch(getMotorcycles(authorization));
    }
  }, [authorization, dispatch]);

  if (!currentUser) return <Navigate to="/login">Redirecting to login...</Navigate>;

  return (
    <>
      <NavigationPanel />
      <div className="motorcycle-list-container">Add your motorcylces</div>
    </>
  );
};

export default AddMotorcycle;
