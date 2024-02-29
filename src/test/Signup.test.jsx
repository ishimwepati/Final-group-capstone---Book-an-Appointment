import '@testing-library/jest-dom/';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/store';
import Signup from '../components/Signup';

describe('Login component', () => {
  test('should render login page', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Signup />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });
});
