// ItemPreview.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemPreview from '../components/ItemPreview';

test('renders ItemPreview component without crashing when URL is missing', () => {
  const motorcycle = {
    name: 'Vespa',
    color: 'red',
    chassisNumber: 'A121B',
    bookingPricePerHour: 0.2e3,
    brand: 'Vespa',
    model: 'Electric',
    price: 0.2e4,
    imageLink: 'https://raw.githubusercontent.com/Graciano1997/files/main/giorniVespa.webp',
    description: 'Speed Motorcycle',
  };

  render(<ItemPreview url={motorcycle.imageLink} />);
});
