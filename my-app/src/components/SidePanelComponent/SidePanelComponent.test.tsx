import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SidePanelComponent from './SidePanelComponent';

describe('<SidePanelComponent />', () => {
  test('it should mount', () => {
    render(<SidePanelComponent />);
    
    const sidePanelComponent = screen.getByTestId('SidePanelComponent');

    expect(sidePanelComponent).toBeInTheDocument();
  });
});