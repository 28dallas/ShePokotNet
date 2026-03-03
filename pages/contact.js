import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', website: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('processing')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Unable to send message')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '', website: '' })
    } catch (err) {
      setStatus(err.message || 'Unable to send message')
    }
  }

  return (
    <div>
      <Head>
        <title>Contact — She Pokot Network</title>
        <meta name="description" content="Get in touch with She Pokot Network." />
      </Head>

      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: 'url(/new/photo_15_2026-03-03_11-10-37.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you</p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid-large">
              <section className="contact-info-card">
                <h2>Contact Information</h2>
                
                <div className="contact-item">
                  <h3>📍 Address</h3>
                  <p>West Pokot County<br />Kenya</p>
                </div>

                <div className="contact-item">
                  <h3>✉️ Email</h3>
                  <p><a href="mailto:info@shepokot.org">info@shepokot.org</a></p>
                </div>

                <div className="contact-item">
                  <h3>📞 Phone</h3>
                  <p><a href="tel:+254700000000">+254 700 000 000</a></p>
                </div>

                <div className="contact-item">
                  <h3>🔗 Follow Us</h3>
                  <nav className="social-links">
                    <a href="https://facebook.com/shepokot" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/shepokot" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com/shepokot" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com/company/shepokot" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </nav>
                </div>
              </section>

              <section className="contact-form-card">
                <h2>Send us a Message</h2>
                <p>Have a question or inquiry? Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <label>
                    <span>Name *</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>
                  
                  <label>
                    <span>Email *</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </label>
                  
                  <label>
                    <span>Subject *</span>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </label>
                  
                  <label>
                    <span>Message *</span>
                    <textarea
                      rows="6"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    ></textarea>
                  </label>
                  
                  <button className="btn primary" type="submit" disabled={status === 'processing'}>
                    {status === 'processing' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'success' && <p role="status">Message sent successfully. We will reply soon.</p>}
                  {status && status !== 'success' && status !== 'processing' && <p role="alert">{status}</p>}
                </form>
              </section>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="contact-section">
          <div className="container">
            <section className="contact-form-card">
              <h2>Find Us on the Map</h2>
              <p>West Pokot County, Kenya</p>
              <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020834.9713170367!2d34.62185890459207!3d1.8948713754461302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178247e414a72f33%3A0x63bd5be869cf4ce0!2sWest%20Pokot%20County!5e0!3m2!1sen!2ske!4v1772100646373!5m2!1sen!2ske"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of West Pokot County"
                ></iframe>
              </div>
            </section>
          </div>
        </section>

        {/* Office Hours */}
        <section className="office-hours">
          <div className="container">
            <h2>Office Hours</h2>
            <p>We're available Monday to Friday, 8:30am - 5:00pm EAT (East Africa Time)</p>
            <p style={{color: '#999', fontStyle: 'italic'}}>Response times may be delayed during community field activities.</p>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="contact-cta">
          <div className="container">
            <h2>Interested in Partnership?</h2>
            <p>We welcome collaborations with organizations, donors, and individuals aligned with our mission.</p>
            <a className="btn primary large" href="mailto:info@shepokot.org?subject=Partnership%20Inquiry">Explore Partnership</a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
