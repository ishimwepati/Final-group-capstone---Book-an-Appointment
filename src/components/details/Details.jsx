import React from 'react';
import './Details.css';

const Details = () => (
  <div className="details-container">
    <h2>Motorcycle name</h2>
    <div className="details-div">
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Motorcycle name</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </td>
          </tr>
          <tr>
            <td>Fee</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="reservation-button">
        Make Reservation
      </button>
    </div>
  </div>
);

export default Details;
