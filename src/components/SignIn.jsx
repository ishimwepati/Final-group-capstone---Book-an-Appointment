import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice';

const SignIn = () => {
  const [credential, setCredential] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  if (currentUser) return <Navigate to="/motorcycles" />;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(credential));
  };

  return (
    <div className="container mt-5">
      <form
        className="card p-4"
        style={{ border: '1.4px solid #000', borderRadius: '7px' }}
        method="post"
        onSubmit={handleLogin}
      >
        <h2 className="text-center mb-4">Sign in</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            onChange={(e) => setCredential({ ...credential, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={(e) => setCredential({ ...credential, password: e.target.value })}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
