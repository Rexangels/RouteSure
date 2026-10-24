import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('RouteSure dashboard scaffold', () => {
  it('renders the product name and primary dashboard heading', () => {
    render(<App />);
    expect(screen.getByText('ADDRESS INTELLIGENCE')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /address intelligence, made clear/i })).toBeInTheDocument();
  });

  it('shows the address validation entry point', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /validate address/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open address lookup/i })).toBeInTheDocument();
  });

  it('renders the three demo metrics and recent activity rows', () => {
    render(<App />);
    expect(screen.getByText('Addresses checked')).toBeInTheDocument();
    expect(screen.getByText('Successful validations')).toBeInTheDocument();
    expect(screen.getByText('Deliveries supported')).toBeInTheDocument();
    const table = screen.getByRole('table');
    expect(within(table).getByText('Victoria Island, Lagos')).toBeInTheDocument();
    expect(within(table).getByText('Wuse II, Abuja')).toBeInTheDocument();
    expect(within(table).getByText('New Haven, Enugu')).toBeInTheDocument();
  });

  it('clearly labels the dashboard as a demo rather than live data', () => {
    render(<App />);
    expect(screen.getByText(/demo data only/i)).toBeInTheDocument();
    expect(screen.getByText(/development preview/i)).toBeInTheDocument();
  });

  it('shows the provider setup as the next integration step', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /connect your postcode provider/i })).toBeInTheDocument();
    expect(screen.getByText(/configure your NIPOST API credentials/i)).toBeInTheDocument();
  });
});
