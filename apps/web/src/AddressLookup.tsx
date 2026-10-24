import { FormEvent, useState } from 'react';
import { AlertCircle, LoaderCircle, Search } from 'lucide-react';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/$/, '');
type LookupState = 'idle' | 'loading' | 'success' | 'error';

export default function AddressLookup() {
  const [query, setQuery] = useState('');
  const [state, setState] = useState<LookupState>('idle');
  const [result, setResult] = useState<unknown>(null);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanQuery = query.trim();
    if (cleanQuery.length < 2) {
      setState('error');
      setMessage('Enter at least 2 characters to search.');
      setResult(null);
      return;
    }

    setState('loading');
    setMessage('');
    setResult(null);
    try {
      const params = new URLSearchParams({ q: cleanQuery });
      const response = await fetch(`${API_BASE_URL}/v1/search/autocomplete?${params.toString()}`, {
        headers: { Accept: 'application/json' }
      });
      const payload: unknown = await response.json();
      if (!response.ok) {
        const detail = typeof payload === 'object' && payload !== null && 'detail' in payload
          ? String((payload as { detail: unknown }).detail)
          : 'The address provider could not complete this search.';
        throw new Error(detail);
      }
      setResult(payload);
      setState('success');
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error ? error.message : 'Unable to reach RouteSure. Check your connection and try again.');
    }
  }

  return <section className="lookup-panel panel" aria-labelledby="lookup-title">
    <div className="panel-head lookup-head">
      <div><p className="eyebrow">ADDRESS LOOKUP</p><h3 id="lookup-title">Search a Nigerian address</h3><p>Search through the RouteSure API adapter. Results depend on configured provider access.</p></div>
      <span className="lookup-tag">API preview</span>
    </div>
    <form className="lookup-form" onSubmit={handleSubmit}>
      <label htmlFor="address-query">Address, area or postcode</label>
      <div className="lookup-controls">
        <div className="lookup-input-wrap"><Search size={17} aria-hidden="true"/><input id="address-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. Wuse II, Abuja" autoComplete="street-address" /></div>
        <button className="primary lookup-submit" type="submit" disabled={state === 'loading'}>{state === 'loading' ? <><LoaderCircle size={16} className="spin"/> Searching…</> : <><Search size={16}/> Search address</>}</button>
      </div>
      <p className="lookup-hint">Do not enter sensitive customer details in this development preview.</p>
    </form>
    {state === 'error' && <div className="lookup-error" role="alert"><AlertCircle size={17}/><span>{message}</span></div>}
    {state === 'success' && <div className="lookup-result" aria-live="polite"><div className="result-heading"><strong>Provider response received</strong><span>Raw JSON preview</span></div><pre>{JSON.stringify(result, null, 2)}</pre><p>Response fields are shown as returned by the adapter. Confirm the official NIPOST schema before treating a result as verified.</p></div>}
  </section>;
}
