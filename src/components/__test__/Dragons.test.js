import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Dragons = () => (
  <div>
    <h1>Dragons</h1>
  </div>
);

describe('Dragons', () => {
  test('renders Dragons component', () => {
    render(<Dragons />);
    expect(screen.getByText('Dragons')).toBeInTheDocument();
  });
});
