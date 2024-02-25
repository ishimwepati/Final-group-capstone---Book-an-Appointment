import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserReservations } from "../../redux/reserveSlice";
import { getMotorcycles } from "../../redux/motorcycleSlice";
import NavigationPanel from "../NavigationPanel";
import "./Reservations.css";

const Reservations = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reserve.reserves);
  const navigate = useNavigate();
  const authorization = useSelector((state) => state.user.requestHeader);
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!currentUser) {
          navigate("/login");
        } else {
          await dispatch(getUserReservations(currentUser.id));
          await dispatch(getMotorcycles(authorization));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentUser, dispatch, navigate]);
  console.log("Reservations:", reservations);
  return (
    <>
      <NavigationPanel />
      <div className="reservations-container">
        <h2>My Reservations</h2>
        {reservations.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Motorcycle Name</th>
                <th>City</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => {
                const motorcycle = motorcycles.find(
                  (m) => m.id === reservation.motorcycle_id
                );
                return (
                  <tr key={reservation.id}>
                    <td>{motorcycle ? motorcycle.make : "Unknown"}</td>
                    <td>{reservation.city}</td>
                    <td>{reservation.reserve_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No reservations</p>
        )}
      </div>
    </>
  );
};

export default Reservations;
