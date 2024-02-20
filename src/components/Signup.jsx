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
    role: 'user', // Set default role to 'user'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(newUser));
    setNewUser({
      name: '',
      email: '',
      password: '',
      role: 'user', // Reset role to 'user' after signup
    });
    navigate('/login');
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name
              <br />
              <input
                type="text"
                name="name"
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
            </label>
          </div>

          <div>
            <label htmlFor="email">
              Email
              <br />
              <input
                type="email"
                name="email"
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
            </label>
          </div>

          <div>
            <label htmlFor="password">
              Password
              <br />
              <input
                type="password"
                name="password"
                id="password"
                value={newUser.password}
                required
                onChange={(e) => {
                  setNewUser({ ...newUser, password: e.target.value });
                }}
              />
            </label>
          </div>

          <div>
            <label htmlFor="role">
              <h4>Role</h4>
              <select
                name="role"
                id="role"
                value={newUser.role}
                onChange={(e) => {
                  setNewUser({ ...newUser, role: e.target.value });
                }}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>

          <div>
            <button id="signUp" type="submit">
              Sign up
            </button>
            Or
            <button
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
