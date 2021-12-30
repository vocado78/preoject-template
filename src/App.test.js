import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';


describe('Component: App', () => {
  it('renders', () => {
    render(<App />);
    expect(screen.getByText('Hello Project Template!')).toBeInTheDocument();
  });
});
