import { render, screen } from '@testing-library/react';
import HelpDrawer from './help-drawer';

test('renders help drawer', () => {
  render(<HelpDrawer />);
  const cmp = screen.getByText(/HelpDrawer/i);
  expect(cmp).toBeInTheDocument();
});
