import React, { useState, useEffect } from 'react';
import './ReserveForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavigationPanel from '../NavigationPanel';
import { addReservation } from '../../redux/reserveSlice';
import { getMotorcycles } from '../../redux/motorcycleSlice';

const ReserveForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);
  const authorization = useSelector((state) => state.user.requestHeader);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authorization) {
      dispatch(getMotorcycles(authorization));
    }
  }, [authorization, dispatch]);

  const [formData, setFormData] = useState({
    reserve_date: '',
    motorcycle_id: '',
    city: '',
    reserve_time: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation({ reservation: formData }))
      .unwrap()
      .then(() => {
        setMessage('Reservation created successfully');
      })
      .catch(() => {
        setMessage('Failed to create reservation');
      });
  };

  if (!currentUser) return <Navigate to="/login" />;

  return (
    <>
      <NavigationPanel />
      <div className="reserve-form-container">
        <h2>Your Motorcycle, Your Adventure</h2>
        <p>
          Select from our array of motorcycles and book your test ride
          effortlessly. Whether you&apos;re a seasoned rider or a beginner,
          choose your date, pick the perfect bike, and set the wheels in motion
          for an exciting journey. Start your motorcycle story with us!
        </p>
        {message && <p>{message}</p>}
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label htmlFor="date">Select your date:</label>
          <input
            type="date"
            id="date"
            name="reserve_date"
            value={formData.reserve_date}
            onChange={handleChange}
          />
          <label htmlFor="time">Select your time:</label>
          <input
            type="time"
            id="time"
            name="reserve_time"
            value={formData.reserve_time}
            onChange={handleChange}
          />
          <label htmlFor="motorcycle">Select a motorcycle:</label>
          <select
            id="motorcycle"
            name="motorcycle_id"
            value={formData.motorcycle_id}
            onChange={handleChange}
          >
            {motorcycles.map((motorcycle) => (
              <option key={motorcycle.id} value={motorcycle.id}>
                {motorcycle.make}
                {' '}
                -
                {motorcycle.model}
              </option>
            ))}
          </select>
          <label htmlFor="city">Select your city:</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select your city</option>
            <option value="Mawlamyaing">Mawlamyaing</option>
            <option value="Yangon">Yangon</option>
            <option value="Taung Gyi">Taunggyi</option>
            <option value="Mandalay">Mandalay</option>
          </select>
          <button type="submit">Book</button>
        </form>
      </div>
    </>
  );
};

export default ReserveForm;
