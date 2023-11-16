import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<TextInput />);
    const input = getByRole('textinput');
    expect(input).toBeInTheDocument();
  });

  it('should be able to type', () => {
    const { getByRole } = render(<TextInput />);
    const input = getByRole('textinput');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input.value).toBe('Test');
  });

  it('should render the label', () => {
    const { getByText } = render(<TextInput label='Test Label' />);
    const label = getByText('Test Label');
    expect(label).toBeInTheDocument();
  });
});
