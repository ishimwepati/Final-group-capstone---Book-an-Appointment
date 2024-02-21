// Signup.js

import React, { useState } from 'react';

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
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
