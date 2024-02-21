import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice';

const SignIn = () => {
  const [credential, setCredential] = useState({ email: '', password: '' });
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, message } = useSelector((state) => state.user);

  if (currentUser) return <Navigate to="/motorcycles" />;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(credential));
  };

  return (
    <form method="post" onSubmit={handleLogin}>
      <div className="flexV">
        <label htmlFor="email">
          Email
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setCredential({ ...credential, email: e.target.value })}
            required
          />
        </label>
      </div>

      <div className="flexV">
        <label htmlFor="password">
          Password
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setCredential({ ...credential, password: e.target.value })}
            required
          />
        </label>
      </div>

      <div>
        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navegate('/signup');
          }}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignIn;
