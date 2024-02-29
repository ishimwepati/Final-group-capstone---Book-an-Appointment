import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addMotorcycle } from '../../redux/motorcycleSlice';
import NavigationPanel from '../NavigationPanel';
import './AddMotorcycle.css';

const AddMotorcycle = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const authorization = useSelector((state) => state.user.requestHeader);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    make: '',
    description: '',
    color: '',
    image: '',
    license_plate: '',
    price: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({
          ...formData,
          [name]: e.target.result, // Use the base64 data URI or blob URL here
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddMotorcycle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await dispatch(addMotorcycle(formData));
      window.URL = "/motorcycles"
    } catch (error) {
      setError('Failed to add motorcycle');
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) return <Navigate to="/login">Redirecting to login...</Navigate>;

  return (
    <>
      <NavigationPanel />
      <div className="motorcycle-list-container">
        <h2>Add motorcycle</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleAddMotorcycle}>
          <label htmlFor="make">Motorcycle name:</label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData.make}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="license_plate">License Plate:</label>
          <input
            type="text"
            id="license_plate"
            name="license_plate"
            value={formData.license_plate}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="image">Choose image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Motorcycle'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddMotorcycle;
