export default function Testimonials({ items = [] }) {
  return (
    <section className="testimonials" aria-label="Testimonials">
      <div className="container">
        <h2>Stories of Change</h2>
        <div className="testimonials-grid">
          {items.map((t, i) => (
            <blockquote key={i} className="testimonial">
              <p>“{t.quote}”</p>
              <footer>— {t.author}{t.role ? `, ${t.role}` : ''}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
