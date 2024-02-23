import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom';

test('renders with Redux store', () => {
  render(
    <Provider store={store}>
      <div>Test component with Redux store</div>
    </Provider>,
  );

  const testComponent = screen.getByText(/Test component with Redux store/i);
  expect(testComponent).toBeInTheDocument();
});
