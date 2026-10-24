import { Activity, ArrowUpRight, MapPin, PackageCheck, Search, ShieldCheck, Truck } from 'lucide-react';
import AddressLookup from './AddressLookup';

const metrics = [
  { label: 'Addresses checked', value: '12,480', change: '+18.4%', icon: MapPin },
  { label: 'Successful validations', value: '11,932', change: '95.6% pass rate', icon: ShieldCheck },
  { label: 'Deliveries supported', value: '8,204', change: '+12.1%', icon: PackageCheck }
];
const recent = [
  { name: 'Victoria Island, Lagos', code: '101241', status: 'Verified', time: '2 min ago' },
  { name: 'Wuse II, Abuja', code: '900288', status: 'Verified', time: '14 min ago' },
  { name: 'New Haven, Enugu', code: '400221', status: 'Review needed', time: '38 min ago' }
];

export default function App() {
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark"><Truck size={21}/></span><span>Route<span className="accent">Sure</span><small>ADDRESS INTELLIGENCE</small></span></div>
      <nav><p className="nav-label">WORKSPACE</p><a className="active"><Activity size={17}/> Overview</a><a><MapPin size={17}/> Address lookup</a><a><PackageCheck size={17}/> Deliveries</a><a><ShieldCheck size={17}/> Validation rules</a></nav>
      <div className="sidebar-bottom"><div className="avatar">RS</div><div><strong>RouteSure Demo</strong><small>Starter workspace</small></div></div>
    </aside>
    <main className="main">
      <header><div><p className="eyebrow">MONDAY, OCTOBER 26, 2026</p><h1>Address intelligence, <span>made clear.</span></h1><p className="subhead">Validate Nigerian addresses and help every delivery find its way.</p></div><button className="primary" onClick={() => document.getElementById('address-query')?.focus()}><Search size={16}/> Validate address</button></header>
      <section className="hero">
        <div className="hero-copy"><span className="pill"><span className="dot"/> POSTCODE INTELLIGENCE</span><h2>Less guesswork.<br/>More successful deliveries.</h2><p>Standardise address data with a provider-backed postcode workflow built for Nigerian logistics teams.</p><button className="hero-button" onClick={() => document.getElementById('address-query')?.focus()}>Open address lookup <ArrowUpRight size={16}/></button></div>
        <div className="map-art"><div className="map-grid"/><div className="route-line"/><span className="pin pin-a"><MapPin size={20}/></span><span className="pin pin-b"><MapPin size={20}/></span><span className="map-label label-a">LAGOS</span><span className="map-label label-b">ABUJA</span><div className="map-card"><span className="dot"/><div><strong>Address confidence</strong><small>Provider validation · ready to integrate</small></div><b>95.6%</b></div></div>
      </section>
      <AddressLookup />
      <section className="metrics">{metrics.map(({ label, value, change, icon: Icon }) => <article className="metric" key={label}><div className="metric-top"><span>{label}</span><Icon size={18}/></div><strong>{value}</strong><small>{change}</small></article>)}</section>
      <section className="content-grid">
        <article className="panel"><div className="panel-head"><div><h3>Recent address checks</h3><p>Latest activity across your workspace</p></div><button className="text-button">View all <ArrowUpRight size={14}/></button></div><div className="table-wrap"><table><thead><tr><th>ADDRESS AREA</th><th>POSTCODE</th><th>STATUS</th><th>CHECKED</th></tr></thead><tbody>{recent.map(item => <tr key={item.code}><td><MapPin size={15}/>{item.name}</td><td className="code">{item.code}</td><td><span className={item.status === 'Verified' ? 'status' : 'status review'}>{item.status}</span></td><td className="time">{item.time}</td></tr>)}</tbody></table></div></article>
        <article className="panel next"><span className="next-icon"><ShieldCheck size={20}/></span><p className="eyebrow">NEXT STEP</p><h3>Connect your postcode provider</h3><p>Configure your NIPOST API credentials to replace demo activity with real address lookups.</p><div className="progress"><span/></div><small>Setup checklist · 1 of 4 complete</small><button className="text-button">View integration guide <ArrowUpRight size={14}/></button></article>
      </section>
      <footer>ROUTESURE <span>·</span> DEVELOPMENT PREVIEW <span className="footer-note">Demo data only — not live delivery information.</span></footer>
    </main>
  </div>;
}
