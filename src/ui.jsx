export const ext = { target: '_blank', rel: 'noopener noreferrer' }

export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>
}

export function Section({ id, eyebrow, title, intro, alt, children }) {
  return (
    <section id={id} className={alt ? 'section alt' : 'section'}>
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {intro && <p className="lead">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

export function PageHead({ eyebrow, title, text }) {
  return (
    <div className="page-head">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </div>
  )
}
