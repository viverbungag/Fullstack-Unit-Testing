import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import { vi } from 'vitest';

describe('Button', () => {
  it('should render the button', () => {
    const { getByRole } = render(<Button />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should be clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const { getByRole } = render(<Button disabled />);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should render the text inside the button correctly', () => {
    const { getByRole } = render(<Button>Test Button</Button>);
    const button = getByRole('button');
    expect(button.textContent).toBe('Test Button');
  });
});
