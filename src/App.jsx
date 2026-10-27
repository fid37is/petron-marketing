import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import * as D from './data'
import { Eyebrow, Section, ext } from './ui.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import LeadershipPage from './pages/LeadershipPage.jsx'

const tabTarget = { Fuels: 'fuels', LPG: 'lpg', Lubricants: 'gasoline-oils', Industrial: 'industrial-fuels' }

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="util">
        <div className="wrap util-in">
          <a href={D.p('/locator/')} {...ext} className="locator">FIND THE NEAREST PETRON STATION</a>
          <div className="util-links">
            <a href={D.SITE} {...ext}>Official site: petron.com ↗</a>
            {D.social.map((s) => (
              <a key={s.label} href={s.href} {...ext}>{s.label}</a>
            ))}
          </div>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-in">
          <Link to="/" className="brand" aria-label="Petron Marketing home">
            <img src={D.LOGO} alt="Petron" />
            <span>Marketing</span>
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>Menu</button>
          <nav id="nav" className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}>
            {D.nav.map(([label, to]) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
            <a href={D.SITE} {...ext} className="nav-parent">petron.com ↗</a>
          </nav>
        </div>
      </header>
    </>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-l">
        <img src={D.LOGO} alt="Petron" />
        <span>MARKETING</span>
      </div>
      <div className="hero-r">
        <Eyebrow>{D.hero.eyebrow}</Eyebrow>
        <h1>{D.hero.title}</h1>
        <p>{D.hero.text}</p>
        <div className="cta">
          <Link className="btn" to="/products">View all products</Link>
          <a className="btn ghost" href={D.SITE} {...ext}>Go to petron.com ↗</a>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="About Petron" title="A vital partner in the country’s growth">
      <div className="stats">
        {D.stats.map((s) => (
          <div key={s.value} className="stat"><b>{s.value}</b><span>{s.label}</span></div>
        ))}
      </div>
      <div className="cols">
        <div>{D.about.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}</div>
        <div className="note-box">
          <h3>Petron Malaysia</h3>
          <p>{D.malaysia}</p>
          <a className="link" href="https://www.petron.com.my/web/" {...ext}>Visit petron.com.my ↗</a>
          <h3 style={{ marginTop: 18 }}>Learn more</h3>
          <a className="link" href={D.p('/who-we-are/')} {...ext}>Who We Are ↗</a><br />
          <a className="link" href={D.p('/who-we-are/our-history/')} {...ext}>Our History ↗</a><br />
          <a className="link" href={D.p('/who-we-are/our-facilities/')} {...ext}>Our Facilities ↗</a>
        </div>
      </div>
    </Section>
  )
}

function Products() {
  const tabs = Object.keys(D.products)
  const [tab, setTab] = useState(tabs[0])
  const cur = D.products[tab]
  return (
    <Section id="products" alt eyebrow="Products" title="World-class quality products" intro="Each of our products has been specially formulated to meet the needs and lifestyle of Filipino customers.">
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={t === tab} className={t === tab ? 'tab on' : 'tab'} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <p className="lead">{cur.intro}</p>
      <div className="grid">
        {cur.items.map((i) => (
          <article key={i.name} className="card">
            <span className="tag">{i.tag}</span>
            <h3>{i.name}</h3>
            <p>{i.text}</p>
          </article>
        ))}
      </div>
      <p className="more">
        <Link className="btn" to={`/products#${tabTarget[tab]}`}>View more {tab.toLowerCase()} products</Link>{' '}
        <Link className="btn ghost dark" to="/products">Browse the full range</Link>
      </p>
    </Section>
  )
}

function Cards() {
  return (
    <Section id="cards" eyebrow="Card solutions" title="Cards for every kind of customer">
      <div className="grid two">
        {D.cards.map((c) => (
          <article key={c.name} className="card">
            <h3>{c.name}</h3>
            <p>{c.text}</p>
            <ul>{c.facts.map((f) => <li key={f}>{f}</li>)}</ul>
            <a className="link" href={c.href} {...ext}>Learn more on petron.com ↗</a>
          </article>
        ))}
      </div>
    </Section>
  )
}

function CarCare() {
  const c = D.carCare
  return (
    <Section id="carcare" alt eyebrow="Car Care Center" title="Casa-like service, reasonable prices" intro={c.text}>
      <div className="grid two">
        <article className="card"><h3>Car Care Center services</h3><ul>{c.ccc.map((s) => <li key={s}>{s}</li>)}</ul></article>
        <article className="card"><h3>CCC Express services</h3><ul>{c.express.map((s) => <li key={s}>{s}</li>)}</ul></article>
      </div>
      <p className="lead" style={{ marginTop: 28 }}>{c.note}</p>
      <p>
        <a className="btn" href={c.href} {...ext}>Find a Car Care Center ↗</a>{' '}
        <a className="btn ghost dark" href={`mailto:${c.email}`}>{c.email}</a>
      </p>
    </Section>
  )
}

function Partner() {
  return (
    <Section id="partner" eyebrow="Join the industry leader" title="Partner with Petron">
      <div className="grid">
        {D.partner.map((x) => (
          <article key={x.title} className="card">
            <h3>{x.title}</h3>
            <p>{x.text}</p>
            {x.lines.length > 0 && <ul>{x.lines.map((l) => <li key={l}>{l}</li>)}</ul>}
            <a className="link" href={x.href} {...ext}>{x.cta} ↗</a>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Foundation() {
  const f = D.foundation
  return (
    <section id="foundation" className="section alt">
      <div className="wrap">
        <Eyebrow>Petron Foundation Inc.</Eyebrow>
        <h2>Fuel HOPE</h2>
        <div className="cols">
          <div>
            <p>{f.text}</p>
            <ul className="pills">{f.programs.map((x) => <li key={x}>{x}</li>)}</ul>
            <a className="btn" href={f.href} {...ext}>Petron Foundation on petron.com ↗</a>
          </div>
          <div className="stats one">
            {f.stats.map((s) => (
              <div key={s.value} className="stat"><b>{s.value}</b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LeadershipTeaser() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Who leads Petron" intro="Petron Corporation Board of Directors and Management, 2026-2027.">
      <div className="grid">
        {D.management.slice(0, 3).map(([n, r]) => (
          <article key={n} className="card"><h3>{n}</h3><p>{r}</p></article>
        ))}
      </div>
      <p className="more">
        <Link className="btn" to="/leadership">View the Board of Directors and who to contact</Link>
      </p>
    </Section>
  )
}

function News() {
  return (
    <Section id="news" alt eyebrow="From the Petron newsroom" title="Latest news">
      <div className="grid">
        {D.news.map((n) => (
          <article key={n.href} className="card">
            <span className="tag">{n.date}</span>
            <h3>{n.title}</h3>
            <p>{n.text}</p>
            <a className="link" href={n.href} {...ext}>Read more on petron.com ↗</a>
          </article>
        ))}
      </div>
      <p className="more"><a className="btn" href={D.p('/newsroom/')} {...ext}>Petron Newsroom ↗</a></p>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch with Petron" intro="Official contact details, as listed on petron.com.">
      <div className="grid">
        {D.contacts.map((c) => (
          <article key={c.title} className="card">
            <h3>{c.title}</h3>
            <ul className="plain">{c.lines.map((l) => <li key={l}>{l}</li>)}</ul>
            {c.href && <a className="link" href={c.href} {...ext}>{c.cta} ↗</a>}
          </article>
        ))}
      </div>
      <div className="advisory"><b>Advisory.</b> {D.advisory}</div>
    </Section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Cards />
      <CarCare />
      <Partner />
      <Foundation />
      <LeadershipTeaser />
      <News />
      <Contact />
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="fcols">
          <div>
            <img src={D.LOGO} alt="Petron" className="flogo" />
            <p>Petron Corporation is the largest oil company in the Philippines, and a leading player in Malaysia.</p>
            <a className="btn" href={D.SITE} {...ext}>Visit the parent site: petron.com ↗</a>
          </div>
          <div>
            <h4>This site</h4>
            <ul>
              <li><Link to="/products">All products</Link></li>
              <li><Link to="/leadership">Board of Directors</Link></li>
              <li><Link to="/leadership#who-to-contact">Who to contact</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
            <h4 style={{ marginTop: 18 }}>On petron.com</h4>
            <ul>{D.parentLinks.slice(0, 6).map(([l, h]) => <li key={h}><a href={h} {...ext}>{l}</a></li>)}</ul>
          </div>
          <div>
            <h4>More on petron.com</h4>
            <ul>{D.parentLinks.slice(6).map(([l, h]) => <li key={h}><a href={h} {...ext}>{l}</a></li>)}</ul>
          </div>
          <div>
            <h4>Head office</h4>
            <p>San Miguel Corp. Head Office Complex<br />40 San Miguel Avenue<br />1550 Mandaluyong City<br />(632) 8-884-9200</p>
            <p>talk2us@petron.com</p>
            <h4>Follow Petron</h4>
            <ul>{D.social.map((s) => <li key={s.label}><a href={s.href} {...ext}>{s.label}</a></li>)}</ul>
          </div>
        </div>
        <div className="bottom">
          <span>Petron and its logo are trademarks of Petron Corporation. All content is sourced from petron.com. Please confirm product details, promotions and contacts on the official website.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
