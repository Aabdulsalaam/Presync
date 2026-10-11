import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('renders the headline', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Built for reliable attendance tracking and reporting/i })).toBeInTheDocument();
  });
});
