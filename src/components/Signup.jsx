import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../redux/userSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(newUser));
    setNewUser({
      name: '',
      email: '',
      password: '',
      role: 'user',
    });
    navigate('/login');
  };

  return (
    <section className="container mt-5">
      <div
        className="card p-4"
        style={{ border: '1.4px solid #000', borderRadius: '7px' }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={newUser.name}
              required
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  name: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={newUser.email}
              required
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={newUser.password}
              required
              onChange={(e) => {
                setNewUser({ ...newUser, password: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              className="form-control"
              id="role"
              value={newUser.role}
              onChange={(e) => {
                setNewUser({ ...newUser, role: e.target.value });
              }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="text-center">
            <button className="btn btn-primary" type="submit">
              Sign up
            </button>
            <span className="mx-2">Or</span>
            <button
              className="btn btn-secondary"
              onClick={() => {
                navigate('/login');
              }}
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
