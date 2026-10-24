import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import AddressLookup from './AddressLookup';

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe('AddressLookup', () => {
  it('renders the search form', () => {
    render(<AddressLookup />);
    expect(screen.getByRole('heading', { name: /search a nigerian address/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/address, area or postcode/i)).toBeInTheDocument();
  });

  it('rejects a query shorter than two characters without making a request', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    render(<AddressLookup />);
    fireEvent.change(screen.getByLabelText(/address, area or postcode/i), { target: { value: 'a' } });
    fireEvent.click(screen.getByRole('button', { name: /search address/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent(/at least 2 characters/i);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends the trimmed query and renders a provider response', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ results: [{ postcode: '900288' }] }) });
    vi.stubGlobal('fetch', fetchMock);
    render(<AddressLookup />);
    fireEvent.change(screen.getByLabelText(/address, area or postcode/i), { target: { value: '  Wuse II, Abuja  ' } });
    fireEvent.click(screen.getByRole('button', { name: /search address/i }));
    expect(await screen.findByText(/provider response received/i)).toBeInTheDocument();
    expect(screen.getByText(/900288/)).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toContain('q=Wuse+II%2C+Abuja');
  });

  it('shows a safe message when the API responds with an error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, json: async () => ({ detail: 'Postcode provider request failed' }) }));
    render(<AddressLookup />);
    fireEvent.change(screen.getByLabelText(/address, area or postcode/i), { target: { value: 'Abuja' } });
    fireEvent.click(screen.getByRole('button', { name: /search address/i }));
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/postcode provider request failed/i));
  });

  it('handles a network failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network unavailable')));
    render(<AddressLookup />);
    fireEvent.change(screen.getByLabelText(/address, area or postcode/i), { target: { value: 'Lagos' } });
    fireEvent.click(screen.getByRole('button', { name: /search address/i }));
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/network unavailable/i));
  });
});
