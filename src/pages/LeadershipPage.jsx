import { Link } from 'react-router-dom'
import { PageHead, ext } from '../ui.jsx'
import * as D from '../data'

const ceo = D.management[0]
const routes = [
  {
    topic: 'Products, services and general feedback',
    who: 'Talk2Us',
    lines: ['Email: talk2us@petron.com', 'SMS: (+63) 919-160-7111', 'Hotlines: (+632) 8802-7777 · #PETRON (#738766)'],
  },
  {
    topic: 'Service station dealership and franchising',
    who: 'Network Development Group',
    lines: ['Email: Talk2Us@petron.com', 'Tel: #PETRON (#738766)', 'Luzon: Ground Floor, El Magnifico Building, Gen. Atienza St., San Antonio Village, Pasig 1605 Metro Manila', 'Visayas: Petron Mandaue Terminal, Looc, Mandaue City, Cebu', 'Mindanao: Petron Tagoloan Terminal, Casinglot, Tagoloan, Misamis Oriental'],
  },
  {
    topic: 'Car Care Center franchise',
    who: 'Petron Car Care Center',
    lines: ['Email: carcarecenter@petron.com'],
  },
  {
    topic: 'Petron cards',
    who: 'Card teams',
    lines: ['Value Card: petronvaluecard@petron.com', 'Fleet Card: PetronFleetCard@petron.com', 'e-Fuel Card: prepaidcard@petron.com', 'Hotline: (02) 8-802-7777'],
  },
  {
    topic: 'Investors and analysts',
    who: 'Investor Relations',
    lines: ['Email: investorrelations@petron.com', 'Tel: (632) 8-884-9200', '40 San Miguel Avenue, 1550 Mandaluyong City'],
  },
  {
    topic: 'Shareholder services',
    who: 'SMC Stock Transfer Service Corporation',
    lines: ['Tel: (632) 8-632-3450 to 52', 'Email: smc_stsc@sanmiguel.com.ph', 'Dividends, change of address, account status, lost or damaged stock certificates'],
  },
  {
    topic: 'Corporate Secretary and compliance',
    who: 'Atty. Jhoanna Jasmine M. Javier-Elacio',
    lines: ['Vice President, General Counsel and Corporate Secretary/Compliance Officer', 'Company tel: (632) 8-884-9200'],
  },
  {
    topic: 'Data privacy',
    who: 'Data Protection Officer',
    lines: ['Email: dataprotectionofficer@petron.com', 'Tel: (632) 8-884-9200'],
  },
]

export default function LeadershipPage() {
  return (
    <>
      <PageHead
        eyebrow="Leadership"
        title="Board of Directors and Management"
        text="Petron Corporation, 2026-2027. Find who leads Petron and the right office to contact."
      />

      <section className="section">
        <div className="wrap">
          <div className="spot">
            <div className="spot-name">{ceo[0]}</div>
            <div className="spot-role">{ceo[1]}</div>
          </div>

          <h2>Board of Directors</h2>
          <p className="lead">Twelve directors and three independent directors.</p>
          <div className="people">
            {D.board.map((n) => (
              <div key={n} className="person"><b>{n}</b><span>Director</span></div>
            ))}
            {D.independents.map((n) => (
              <div key={n} className="person ind"><b>{n}</b><span>Independent Director</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <h2>Management</h2>
          <table className="mgmt big">
            <tbody>
              {D.management.map(([n, r]) => (
                <tr key={n}><th scope="row">{n}</th><td>{r}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="more">
            <a className="link" href={D.p('/who-we-are/our-board-of-directors/')} {...ext}>See the complete, current list on petron.com ↗</a>
          </p>
        </div>
      </section>

      <section className="section" id="who-to-contact">
        <div className="wrap">
          <h2>Who to contact</h2>
          <p className="lead">
            Petron’s website does not publish direct emails or phone numbers for individual directors or officers.
            Reach the right team through the official channels below. The Corporate Secretary can direct board-related correspondence.
          </p>
          <div className="grid">
            {routes.map((r) => (
              <article key={r.topic} className="card">
                <span className="tag">{r.topic}</span>
                <h3>{r.who}</h3>
                <ul className="plain">{r.lines.map((l) => <li key={l}>{l}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="advisory"><b>Advisory.</b> {D.advisory}</div>
          <p className="more"><Link className="link" to="/#contact">All Petron contacts</Link></p>
        </div>
      </section>
    </>
  )
}
