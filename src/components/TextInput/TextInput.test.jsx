import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<TextInput id='sample' />);
    const input = getByRole('textinput');
    expect(input).toBeInTheDocument();
  });

  it('should be able to type', () => {
    const { getByRole } = render(<TextInput id='sample' />);
    const input = getByRole('textinput');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input.value).toBe('Test');
  });

  it('should render the label', () => {
    const { getByText } = render(<TextInput label='Test Label' id='sample' />);
    const label = getByText('Test Label');
    expect(label).toBeInTheDocument();
  });
});
