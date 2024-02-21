// Login.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate input if needed

    // Call the onLogin function from the parent component (App.js)
    onLogin({ username, password });

    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="loginUsername">
        Username:
        <input
          type="text"
          id="loginUsername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="loginPassword">
        Password:
        <input
          type="password"
          id="loginPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
