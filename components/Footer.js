import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/about', label: 'Who We Are' },
    { href: '/programs', label: 'Our Work' },
    { href: '/impact', label: 'Impact Stories' },
    { href: '/news', label: 'News & Updates' },
    { href: '/transparency', label: 'Transparency & Reports' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const programLinks = [
    { href: '/programs/climate', label: 'Climate Justice' },
    { href: '/programs/girls', label: 'Girls & Women Empowerment' },
    { href: '/programs/livelihoods', label: 'Livelihoods & VSLAs' },
  ]

  const socialLinks = [
    { href: 'https://facebook.com/shepokot', label: 'Facebook', icon: 'f' },
    { href: 'https://twitter.com/shepokot', label: 'Twitter', icon: '𝕏' },
    { href: 'https://instagram.com/shepokot', label: 'Instagram', icon: '📷' },
    { href: 'https://linkedin.com/company/shepokot', label: 'LinkedIn', icon: 'in' },
    { href: 'https://youtube.com/@shepokot', label: 'YouTube', icon: '▶' },
  ]

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-inner">
          {/* Brand Column */}
          <div className="footer-column footer-brand">
            <Link href="/" className="footer-logo-link" aria-label="She Pokot Network Home">
              <img 
                src="/img/logo.png" 
                alt="She Pokot Network" 
                className="footer-logo"
                width="80"
                height="80"
              />
            </Link>
            <h3>She Pokot Network</h3>
            <p className="footer-mission">
              We follow a community-led approach in working with the poor and marginalized 
              to promote human transformation, seek climate justice, and bear witness to 
              the dignity of every woman and girl.
            </p>
            <div className="footer-social" aria-label="Social media links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column footer-links">
            <h4>Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Programs */}
          <div className="footer-column footer-programs">
            <h4>Our Programs</h4>
            <nav aria-label="Programs navigation">
              <ul>
                {programLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-column footer-contact">
            <h4>Contact Us</h4>
            <address>
              <div className="contact-item">
                <strong>📍 Office Address</strong>
                <p>West Pokot County<br />Kapenguria, Kenya</p>
              </div>
              <div className="contact-item">
                <strong>✉️ Email</strong>
                <p>
                  <a href="mailto:info@shepokot.org">info@shepokot.org</a>
                </p>
              </div>
              <div className="contact-item">
                <strong>📞 Phone</strong>
                <p>
                  <a href="tel:+254700000000">+254 700 000 000</a>
                </p>
              </div>
              <div className="contact-item">
                <strong>💬 WhatsApp</strong>
                <p>
                  <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h4>Stay Updated</h4>
              <p>Subscribe to receive updates on our impact and stories from the field.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="visually-hidden">Email address</label>
              <input 
                type="email" 
                id="footer-email"
                placeholder="Enter your email" 
                required 
                aria-describedby="newsletter-description"
              />
              <button type="submit" className="btn primary">Subscribe</button>
            </form>
            <p id="newsletter-description" className="visually-hidden">
              Enter your email to subscribe to our newsletter
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} She Pokot Network. A Registered Community Based Organization (CBO) in Kenya.</p>
          <nav className="footer-legal" aria-label="Legal links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #2a2a2a;
          color: white;
          padding: 0;
          margin-top: 3rem;
        }

        .footer-main {
          padding: 3rem 0;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 3rem;
          padding: 0 2rem;
        }

        .footer-column h4 {
          color: white;
          margin-top: 0;
          margin-bottom: 1.25rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-brand h3 {
          margin: 0 0 1rem;
          font-size: 1.25rem;
          color: white;
        }

        .footer-logo-link {
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .footer-logo {
          height: 70px;
          width: auto;
          object-fit: contain;
        }

        .footer-mission {
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.25rem;
        }

        .footer-social {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          display: inline-flex;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .social-link:hover {
          background: var(--burnt-ochre);
          color: white;
          transform: translateY(-3px);
        }

        .footer-links ul,
        .footer-programs ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li,
        .footer-programs li {
          margin: 0.6rem 0;
        }

        .footer-links a,
        .footer-programs a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
          display: inline-block;
          padding: 0.2rem 0;
        }

        .footer-links a:hover,
        .footer-programs a:hover {
          color: var(--burnt-ochre);
        }

        .footer-contact address {
          font-style: normal;
        }

        .contact-item {
          margin-bottom: 1.25rem;
        }

        .contact-item strong {
          display: block;
          color: white;
          margin-bottom: 0.35rem;
          font-size: 0.95rem;
        }

        .contact-item p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .contact-item a {
          color: var(--burnt-ochre);
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-item a:hover {
          color: white;
          text-decoration: underline;
        }

        /* Newsletter Section */
        .footer-newsletter {
          background: rgba(255, 255, 255, 0.05);
          padding: 2.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .newsletter-text {
          flex: 1;
          min-width: 250px;
        }

        .newsletter-text h4 {
          color: white;
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
        }

        .newsletter-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.75rem;
        }

        .newsletter-form input {
          padding: 0.75rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
          min-width: 250px;
        }

        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: var(--burnt-ochre);
          background: rgba(255, 255, 255, 0.15);
        }

        /* Bottom Bar */
        .footer-bottom {
          background: #1a1a1a;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .footer-legal a:hover {
          color: white;
        }

        /* Accessibility */
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .footer-inner {
            grid-template-columns: 1fr;
            padding: 0 1.5rem;
          }

          .footer-main {
            padding: 2rem 0;
          }

          .newsletter-content {
            flex-direction: column;
            align-items: stretch;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form input {
            min-width: auto;
          }

          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

