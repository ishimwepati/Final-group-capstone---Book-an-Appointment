// Signup.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Validate input if needed

    // Call the onSignup function from the parent component (App.js)
    onSignup({ username, password });

    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Signup</h2>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
};

Signup.propTypes = {
  onSignup: PropTypes.func.isRequired,
};

export default Signup;
