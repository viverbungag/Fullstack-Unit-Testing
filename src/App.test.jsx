import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the App', () => {
    const { getByRole, getAllByRole } = render(<App />);
    const button = getByRole('button');
    const inputs = getAllByRole('textinput');
    expect(button).toBeInTheDocument();
    expect(inputs.length).toBe(2);
  });

  it('should enable the button if two textboxes were typed', () => {
    const { getByRole, getAllByRole } = render(<App />);
    const button = getByRole('button');
    const inputs = getAllByRole('textinput');
    fireEvent.change(inputs[0], { target: { value: 'Test1' } });
    fireEvent.change(inputs[1], { target: { value: 'Test2' } });
    expect(button).not.toBeDisabled();
  });
});
