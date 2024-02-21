// AddItem.jsx

import React, { useState } from 'react';
import './AddItem.css';

const AddItem = () => {
  const [motorcycleData, setMotorcycleData] = useState({
    name: '',
    color: '',
    weight: '',
    madeDate: '',
    madeCountry: '',
  });

  const handleAddMotorcycle = () => {
    setMotorcycleData({
      name: '',
      color: '',
      weight: '',
      madeDate: '',
      madeCountry: '',
    });
  };

  return (
    <div className="add-container">
      <h2>Add Motorcycle</h2>
      <div className="add-div">
        <label htmlFor="motorcycleName">
          Motorcycle Name:
          <input
            type="text"
            id="motorcycleName"
            value={motorcycleData.name}
            onChange={(e) => setMotorcycleData({ ...motorcycleData, name: e.target.value })}
          />
        </label>
        <label htmlFor="motorcycleColor">
          Motorcycle Color:
          <input
            type="text"
            id="motorcycleColor"
            value={motorcycleData.color}
            onChange={(e) => setMotorcycleData({ ...motorcycleData, color: e.target.value })}
          />
        </label>
        <label htmlFor="motorcycleWeight">
          Motorcycle Weight:
          <input
            type="text"
            id="motorcycleWeight"
            value={motorcycleData.weight}
            onChange={(e) => setMotorcycleData({ ...motorcycleData, weight: e.target.value })}
          />
        </label>
        <label htmlFor="motorcycleMadeDate">
          Motorcycle Made Date:
          <input
            type="date"
            id="motorcycleMadeDate"
            value={motorcycleData.madeDate}
            onChange={(e) => setMotorcycleData({ ...motorcycleData, madeDate: e.target.value })}
          />
        </label>
        <label htmlFor="motorcycleMadeCountry">
          Motorcycle Made Country:
          <input
            type="text"
            id="motorcycleMadeCountry"
            value={motorcycleData.madeCountry}
            onChange={(e) => setMotorcycleData({ ...motorcycleData, madeCountry: e.target.value })}
          />
        </label>
        <button type="button" className="add-button" onClick={handleAddMotorcycle}>
          Add Motorcycle
        </button>
      </div>
    </div>
  );
};

export default AddItem;
