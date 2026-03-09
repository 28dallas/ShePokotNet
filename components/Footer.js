import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/about', label: 'Who We Are' },
    { href: '/programs', label: 'Our Work' },
    { href: '/impact', label: 'Impact Stories' },
    { href: '/news', label: 'News & Updates' },
    { href: '/transparency', label: 'Transparency' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const programLinks = [
    { href: '/programs/climate', label: 'Climate Justice' },
    { href: '/programs/girls', label: 'Girls & Women' },
    { href: '/programs/livelihoods', label: 'Livelihoods' },
  ]

  const socialLinks = [
    {
      href: 'https://www.instagram.com/shepokot?igsh=cW5mNmtla3AyeWRt&utm_source=qr',
      label: 'Instagram',
      iconSrc: '/icons/instagram.png',
    },
    {
      href: 'https://www.tiktok.com/@she.pokot.network?_r=1&_t=ZS-94XlFn2gEez',
      label: 'TikTok',
      iconSrc: '/icons/tiktok.png',
    },
    {
      href: 'https://www.linkedin.com/in/she-pokot-network-4a41a03b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      label: 'LinkedIn',
      iconSrc: '/icons/linkedin.png',
    },
    {
      href: 'https://x.com/shepokotnetwork?s=11&t=p5G71GPpSaLVeLwVufgKZw',
      label: 'X (Twitter)',
      iconSrc: '/icons/x.png',
    },
    {
      href: 'https://www.facebook.com/share/1AjPeor2cS/?mibextid=wwXIfr',
      label: 'Facebook',
      iconSrc: '/icons/facebook.png',
    },
  ]

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-main">
        <div className="container">
          {/* Top Section */}
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="footer-logo-link" aria-label="She Pokot Network Home">
                <img src="/img/logo.png" alt="She Pokot Network" className="footer-logo" />
              </Link>
              <h3>She Pokot Network</h3>
              <p className="footer-tagline">
                Empowering women and girls through community-led transformation, climate justice, and human dignity.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className="social-link" aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <img src={social.iconSrc} alt="" className="social-icon" />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}><Link href={link.href}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h4>Our Programs</h4>
                <ul>
                  {programLinks.map((link, index) => (
                    <li key={index}><Link href={link.href}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h4>Get In Touch</h4>
                <ul className="contact-list">
                  <li>📍 West Pokot County<br />Kapenguria, Kenya</li>
                  <li>✉️ <a href="mailto:info@shepokot.org">info@shepokot.org</a></li>
                  <li>📞 <a href="tel:+254762089003">0762089003</a></li>
                  <li>💬 <a href="https://wa.me/254762089003" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <p>© {currentYear} She Pokot Network. All rights reserved. Registered CBO, West Pokot, Kenya.</p>
            <div className="footer-legal">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/safeguarding">Safeguarding</Link>
              <Link href="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #1a1d23;
          color: #e5e7eb;
          margin-top: 4rem;
        }

        .footer-main {
          padding: 4rem 0 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          max-width: 380px;
        }

        .footer-logo-link {
          display: inline-block;
          margin-bottom: 1rem;
        }

        .footer-logo {
          height: 70px;
          width: auto;
        }

        .footer-brand h3 {
          font-size: 1.5rem;
          margin: 0 0 1rem;
          color: white;
        }

        .footer-tagline {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }

        .footer-social {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon {
          width: 20px;
          height: 20px;
        }

        .social-link:hover {
          background: #c27d31;
          transform: translateY(-2px);
        }

        .footer-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .footer-col h4 {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin: 0 0 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col li {
          margin-bottom: 0.75rem;
        }

        .footer-col a {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: #c27d31;
        }

        .contact-list li {
          color: #9ca3af;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .contact-list a {
          color: #c27d31;
        }

        .contact-list a:hover {
          color: #d89a4d;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 2rem 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .footer-legal a:hover {
          color: #c27d31;
        }

        @media (max-width: 968px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-nav {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-main {
            padding: 3rem 0 1.5rem;
          }

          .footer-nav {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .footer-legal {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
