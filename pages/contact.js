import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact — She Pokot Network</title>
        <meta name="description" content="Get in touch with She Pokot Network." />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: 'url(/img/community.jpg)'}}>
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
                  <p><a href="tel:+254XXXXXXXXX">+254 XXX XXX XXX</a></p>
                </div>

                <div className="contact-item">
                  <h3>🔗 Follow Us</h3>
                  <nav className="social-links">
                    <a href="#" target="_blank" rel="noopener">Facebook</a>
                    <a href="#" target="_blank" rel="noopener">Twitter</a>
                    <a href="#" target="_blank" rel="noopener">Instagram</a>
                    <a href="#" target="_blank" rel="noopener">LinkedIn</a>
                  </nav>
                </div>
              </section>

              <section className="contact-form-card">
                <h2>Send us a Message</h2>
                <p>Have a question or inquiry? Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <label>
                    <span>Name *</span>
                    <input type="text" required />
                  </label>
                  
                  <label>
                    <span>Email *</span>
                    <input type="email" required />
                  </label>
                  
                  <label>
                    <span>Subject *</span>
                    <input type="text" required />
                  </label>
                  
                  <label>
                    <span>Message *</span>
                    <textarea rows="6" required></textarea>
                  </label>
                  
                  <button className="btn primary" type="submit">Send Message</button>
                </form>
              </section>
            </div>
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
