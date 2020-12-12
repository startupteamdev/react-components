import { render, screen } from '@testing-library/react';
import HelpDrawer from './help-drawer';
import React from 'react';

test('renders help drawer', () => {
  render(<HelpDrawer />);
  const cmp = screen.getByText(/HelpDrawer/i);
  expect(cmp).toBeInTheDocument();
});
