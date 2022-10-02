import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsComponent from './ProductsComponent';

describe('<ProductsComponent />', () => {
  test('it should mount', () => {
    render(<ProductsComponent />);
    
    const productsComponent = screen.getByTestId('ProductsComponent');

    expect(productsComponent).toBeInTheDocument();
  });
});