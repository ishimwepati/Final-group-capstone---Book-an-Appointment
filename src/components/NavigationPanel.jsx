import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavigationPanel.css';
import logo from '../images/logo.png';

const NavigationPanel = () => (
  <div className="navigation-panel">
    <img src={logo} alt="Logo" className="logo" />
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Motorcycles
          </NavLink>
        </li>
        <li>
          <NavLink to="/reserve" activeclassname="active">
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-reservations" activeclassname="active">
            My Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-motorcycle" activeclassname="active">
            Add Motorcycle
          </NavLink>
        </li>
        <li>
          <NavLink to="/delete-motorcycle" activeclassname="active">
            Delete Motorcycle
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-out" activeclassname="active">
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
