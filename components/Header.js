import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [router.pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Who We Are' },
    { href: '/programs', label: 'Our Work' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/impact', label: 'Impact' },
    { href: '/news', label: 'News' },
    { href: '/transparency', label: 'Transparency' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => router.pathname === path

  return (
    <header 
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
    >
      <div className="header-container">
        {/* Brand / Logo */}
        <Link href="/" className="brand" aria-label="She Pokot Network - Home">
          <img 
            src="/img/logo.png" 
            alt="She Pokot Network logo" 
            className="logo"
            width="90"
            height="90"
          />
          <div className="brand-text">
            <span className="brand-name">She Pokot</span>
            <span className="brand-tagline">Network</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link 
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  {isActive(link.href) && <span className="nav-indicator"></span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side - Donate Button */}
        <div className="header-actions">
          <Link href="/donate" className="donate-btn">
            <span className="donate-icon">♥</span>
            Donate Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav 
        id="mobile-menu"
        className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}
        role="navigation" 
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href} className="mobile-nav-item">
              <Link 
                href={link.href}
                className={`mobile-nav-link ${isActive(link.href) ? 'active' : ''}`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/donate" className="mobile-donate-btn">
          <span>♥</span> Donate Now
        </Link>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .site-header.scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
        }

        .site-header.scrolled .header-container {
          padding: 0.6rem 0;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          transition: padding 0.3s ease;
        }

        /* Brand */
        .brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          flex-shrink: 0;
          padding: 0.3rem 0;
        }

        .logo {
          width: 90px;
          height: 90px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          transition: transform 0.3s ease;
        }

        .brand:hover .logo {
          transform: scale(1.05);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }

        .brand-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        .brand-tagline {
          font-size: 0.95rem;
          color: #3B6B37;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        /* Desktop Navigation */
        .nav-desktop {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.25rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 0.6rem 1rem;
          text-decoration: none;
          color: #444;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 6px;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #3B6B37;
          background: rgba(59, 107, 55, 0.06);
        }

        .nav-link.active {
          color: #3B6B37;
          font-weight: 600;
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: #3B6B37;
          border-radius: 2px;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .donate-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #C27D31 0%, #b06f28 100%);
          color: white;
          padding: 0.65rem 1.4rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(194, 125, 49, 0.25);
        }

        .donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(194, 125, 49, 0.35);
        }

        .donate-icon {
          font-size: 1rem;
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-toggle .bar {
          display: block;
          width: 24px;
          height: 2px;
          background: #333;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-toggle.open .bar:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .mobile-toggle.open .bar:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.open .bar:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Navigation */
        .nav-mobile {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .nav-mobile.open {
          max-height: 400px;
          padding: 1rem 0;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0 1.5rem;
        }

        .mobile-nav-item {
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-nav-item:last-child {
          border-bottom: none;
        }

        .mobile-nav-link {
          display: block;
          padding: 1rem 0.5rem;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #3B6B37;
        }

        .mobile-donate-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: 1rem 1.5rem 0;
          padding: 1rem;
          background: linear-gradient(135deg, #C27D31 0%, #b06f28 100%);
          color: white;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
        }

        .mobile-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: -1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav-desktop {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .nav-mobile {
            display: block;
          }

          .mobile-overlay {
            display: block;
          }
        }

        @media (max-width: 600px) {
          .header-container {
            padding: 0.7rem 1rem;
          }

          .logo {
            width: 65px;
            height: 65px;
          }

          .brand-name {
            font-size: 1.3rem;
          }

          .brand-tagline {
            font-size: 0.8rem;
          }

          .donate-btn {
            padding: 0.55rem 1rem;
            font-size: 0.8rem;
          }

          .donate-btn span:first-child {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

