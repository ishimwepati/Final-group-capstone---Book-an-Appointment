import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import DeleteItem from '../components/DeteteItem';
import store from '../redux/store';

describe('DeleteItem component', () => {
  test('renders DeleteItem component', () => {
    const motorcycle = { id: 1, name: 'Test Motorcycle' };

    const { getByText } = render(
      <Provider store={store}>
        <DeleteItem motorcycle={motorcycle} />
        ,
      </Provider>,
    );

    expect(getByText('Test Motorcycle')).toBeInTheDocument();
  });
});
