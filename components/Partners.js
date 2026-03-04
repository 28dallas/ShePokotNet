export default function Partners({ logos = [] }) {
  return (
    <section className="partnership-section" aria-labelledby="partners-heading">
      <div className="container">
        <h2 id="partners-heading">Our Partners</h2>
        <div className="partners-grid">
          {logos.map((logo, i) => (
            <div key={i} className="partner-logo">
              <img src={logo} alt={`Partner ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
