import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavigationPanel.css';
import logo from '../images/logo.png';

const NavigationPanel = () => (
  <div className="navigation-panel">
    <img src={logo} alt="Logo" className="logo" />
    <h5>SwiftBike Reserves</h5>
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Motorcycles
          </NavLink>
        </li>
        <li>
          <NavLink to="/reserve" activeClassName="active">
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-reservations" activeClassName="active">
            My Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-motorcycle" activeClassName="active">
            Add Motorcycle
          </NavLink>
        </li>
        <li>
          <NavLink to="/delete-motorcycle" activeClassName="active">
            Delete Motorcycle
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-out" activeClassName="active">
            Sign out
          </NavLink>
        </li>
      </ul>
      <div className="social-icons">
        <FaFacebook />
        <FaGithub className="github" />
        <FaLinkedin />
      </div>
    </nav>
  </div>
);

export default NavigationPanel;
