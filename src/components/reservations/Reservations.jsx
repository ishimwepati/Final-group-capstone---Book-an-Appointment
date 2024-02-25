import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserReservations } from '../../redux/reserveSlice';
import NavigationPanel from '../NavigationPanel';
import './Reservations.css';

const Reservations = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reserve.reserves);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!currentUser) {
          navigate('/login');
        } else {
          await dispatch(getUserReservations(currentUser.id));
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchData();
  }, [currentUser, dispatch, navigate]);

  console.log('Reservations:', reservations);

  return (
    <>
      <NavigationPanel />
      <div className="reservations-container">
        <h2>My Reservations</h2>
        <div className="row">
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div key={reservation.id} className="reservation-card">
                <p>
                  Motorcycle:
                  {reservation.motorcycle.make}
                </p>
                <p>
                  City:
                  {reservation.city}
                </p>
                <p>
                  Date:
                  {reservation.reserve_date}
                </p>
              </div>
            ))
          ) : (
            <p>No reservations</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Reservations;
