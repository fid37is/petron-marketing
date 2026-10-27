import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../catalog'
import { PageHead, ext } from '../ui.jsx'
import { p } from '../data'

export default function ProductsPage() {
  const [q, setQ] = useState('')
  const total = catalog.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.items.length, 0), 0)

  const view = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return catalog
    return catalog
      .map((c) => ({
        ...c,
        groups: c.groups
          .map((g) => ({
            ...g,
            items: g.items.filter(([n, d]) => `${n} ${d} ${c.title} ${g.name}`.toLowerCase().includes(term)),
          }))
          .filter((g) => g.items.length),
      }))
      .filter((c) => c.groups.length)
  }, [q])

  return (
    <>
      <PageHead
        eyebrow="Products"
        title="The complete Petron product range"
        text="Fuels, LPG, lubricants, industrial petroleum products and petrochemicals, all in one place."
      />
      <section className="section">
        <div className="wrap">
          <div className="catalog-tools">
            <label className="search">
              <span>Search {total} products</span>
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try Blaze, Gasul, 10W-40, jet fuel" />
            </label>
            <nav className="chips" aria-label="Product categories">
              {catalog.map((c) => (
                <a key={c.id} href={`#${c.id}`}>{c.title}</a>
              ))}
            </nav>
          </div>

          {view.length === 0 && <p className="lead">No products match “{q}”. Clear the search to see everything.</p>}

          {view.map((c) => (
            <div key={c.id} id={c.id} className="cat">
              <h2>{c.title}</h2>
              <p className="lead">{c.intro}</p>
              {c.groups.map((g) => (
                <div key={g.name} className="group">
                  <h3>{g.name}</h3>
                  <div className="items">
                    {g.items.map(([n, d]) => (
                      <article key={n} className="item">
                        <h4>{n}</h4>
                        <p>{d}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="note-box wide">
            <h3>Need specifications or availability?</h3>
            <p>
              Product data sheets (PDS) and safety data sheets (SDS) are published by Petron Corporation on petron.com.
              For orders, pricing and supply questions, contact the Petron team through{' '}
              <Link className="link" to="/#contact">our contact directory</Link> or email talk2us@petron.com.
            </p>
            <a className="link" href={p('/products/')} {...ext}>Product data sheets on petron.com ↗</a>
          </div>
        </div>
      </section>
    </>
  )
}
