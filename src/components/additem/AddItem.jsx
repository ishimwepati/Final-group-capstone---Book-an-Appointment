import React, { useState } from 'react';
import axios from 'axios';
import './AddItem.css';

const countryOptions = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'DRCongo',
  'Nigeria',
  'SouthAfrica',
];

const AddItem = () => {
  const [motorcycleData, setMotorcycleData] = useState({
    description: '',
    color: '',
    image: '', // Add image if needed
    license_plate: '',
    available: true,
    price: 0.0,
    make: '',
    model: '',
    year: '',
  });

  const handleAddMotorcycle = () => {
    axios.post('http://your-rails-api-url/api/v1/motorcycles', { motorcycle: motorcycleData })
      .then(response => {
        console.log('Motorcycle added successfully:', response.data);
        // Add any additional logic or feedback to the user
        setMotorcycleData({
          description: '',
          color: '',
          image: '',
          license_plate: '',
          available: true,
          price: 0.0,
          make: '',
          model: '',
          year: '',
        });
      })
      .catch(error => {
        console.error('Error adding motorcycle:', error);
        // Handle errors or provide feedback to the user
      });
  };

  return (
    <div className="add-container">
      <h2>Add Motorcycle</h2>
      <div className="add-div">
        <label htmlFor="motorcycleDescription">
          Motorcycle Description:
          <input
            type="text"
            id="motorcycleDescription"
            value={motorcycleData.description}
            onChange={(e) => setMotorcycleData({ ...motorcycleData, description: e.target.value })}
          />
        </label>
        {/* Include other input fields as needed */}
        <button type="button" className="add-button" onClick={handleAddMotorcycle}>
          Add Motorcycle
        </button>
      </div>
    </div>
  );
};

export default AddItem;
