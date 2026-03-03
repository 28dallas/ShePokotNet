import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getEvents, getEventBySlug } from '../../lib/cms'

export default function EventDetail({ event }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('processing')
    try {
      const res = await fetch('/api/event-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, eventSlug: event.slug, eventTitle: event.title })
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div>
      <Head>
        <title>{event.title} — She Pokot Network</title>
        <meta name="description" content={event.excerpt} />
      </Head>

      <Header />
      <main id="main-content">
        <div className="event-detail">
          <div className="event-hero">
            <Image src={event.image} alt={event.title} fill priority style={{objectFit: 'cover'}} />
            <div className="event-hero-overlay"></div>
          </div>

          <div className="container">
            <div className="event-layout">
              <div className="event-main">
                <span className="event-type">{event.type}</span>
                <h1>{event.title}</h1>
                <div className="event-meta">
                  <div className="meta-item">
                    <strong>📅 Date:</strong>
                    <span>{new Date(event.date).toLocaleDateString('en-KE', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="meta-item">
                    <strong>🕐 Time:</strong>
                    <span>{event.time}</span>
                  </div>
                  <div className="meta-item">
                    <strong>📍 Location:</strong>
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="event-description" dangerouslySetInnerHTML={{ __html: event.content }} />
              </div>

              <aside className="event-sidebar">
                <div className="registration-card">
                  <h3>Register for this Event</h3>
                  {status === 'success' ? (
                    <div className="success-message">
                      <p>✓ Registration received! We'll contact you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <input type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                      <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                      <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                      <textarea placeholder="Any questions or special requirements?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows="3"></textarea>
                      <button type="submit" className="btn primary" disabled={status === 'processing'}>
                        {status === 'processing' ? 'Submitting...' : 'Register Now'}
                      </button>
                      {status === 'error' && <p className="error-message">Registration failed. Please try again.</p>}
                    </form>
                  )}
                </div>

                <div className="event-info-card">
                  <h4>Event Details</h4>
                  <ul>
                    <li><strong>Capacity:</strong> {event.capacity || 'Limited seats'}</li>
                    <li><strong>Cost:</strong> {event.cost || 'Free'}</li>
                    <li><strong>Language:</strong> {event.language || 'English & Swahili'}</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .event-hero { position: relative; height: 400px; margin-bottom: 3rem; }
        .event-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%); }
        .event-layout { display: grid; grid-template-columns: 1fr 350px; gap: 3rem; margin-bottom: 3rem; }
        .event-main h1 { font-size: 2.5rem; margin: 1rem 0; }
        .event-type { display: inline-block; background: var(--earthy-green); color: white; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
        .event-meta { display: flex; flex-direction: column; gap: 0.75rem; margin: 2rem 0; padding: 1.5rem; background: #f8f8f8; border-radius: 8px; }
        .meta-item { display: flex; gap: 0.5rem; }
        .meta-item strong { min-width: 120px; }
        .event-description { font-size: 1.1rem; line-height: 1.8; color: #333; }
        .event-description :global(h2) { margin: 2rem 0 1rem; color: var(--earthy-green); }
        .event-description :global(p) { margin-bottom: 1.5rem; }
        .event-sidebar { position: sticky; top: 100px; height: fit-content; }
        .registration-card, .event-info-card { background: white; border: 2px solid var(--earthy-green); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; }
        .registration-card h3, .event-info-card h4 { margin: 0 0 1rem; color: var(--earthy-green); }
        .registration-card form { display: flex; flex-direction: column; gap: 1rem; }
        .registration-card input, .registration-card textarea { padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; }
        .success-message { background: #d4edda; color: #155724; padding: 1rem; border-radius: 6px; text-align: center; }
        .error-message { color: #dc3545; font-size: 0.9rem; margin-top: 0.5rem; }
        .event-info-card ul { list-style: none; padding: 0; margin: 0; }
        .event-info-card li { padding: 0.5rem 0; border-bottom: 1px solid #eee; }
        .event-info-card li:last-child { border-bottom: none; }
        @media (max-width: 968px) {
          .event-layout { grid-template-columns: 1fr; }
          .event-sidebar { position: static; }
        }
      `}</style>
    </div>
  )
}

export async function getStaticPaths() {
  const events = await getEvents()
  return {
    paths: events.map(event => ({ params: { slug: event.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const event = await getEventBySlug(params.slug)
  return { props: { event } }
}
