import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyDonateButton({ 
  showAfterScroll = 300,
  buttonText = "Donate Now",
  buttonLink = "/donate"
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Show sticky button after scrolling certain amount
      setIsScrolled(scrollPosition > showAfterScroll)
      
      // Also show on scroll up (for better UX)
      if (scrollPosition > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showAfterScroll])

  // Don't render on donate page itself
  if (typeof window !== 'undefined' && window.location.pathname === '/donate') {
    return null
  }

  return (
    <>
      {/* Desktop Sticky Button */}
      <div 
        className={`sticky-donate-wrapper ${isVisible ? 'visible' : ''} ${isScrolled ? 'scrolled' : ''}`}
        role="complementary"
        aria-label="Quick donate"
      >
        <Link href={buttonLink} className="sticky-donate-btn">
          <span className="donate-icon">❤️</span>
          <span className="donate-text">{buttonText}</span>
        </Link>
      </div>

      {/* Mobile Floating Action Button */}
      <div 
        className={`mobile-fab ${isVisible ? 'visible' : ''}`}
        role="navigation"
        aria-label="Mobile donate"
      >
        <Link href={buttonLink} className="mobile-fab-btn">
          <span>❤️</span>
        </Link>
      </div>

      <style jsx>{`
        /* Desktop Sticky Button */
        .sticky-donate-wrapper {
          position: fixed;
          bottom: -100px;
          right: 2rem;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .sticky-donate-wrapper.visible {
          bottom: 2rem;
        }

        .sticky-donate-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #C27D31 0%, #a66828 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 4px 20px rgba(194, 125, 49, 0.4);
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .sticky-donate-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 30px rgba(194, 125, 49, 0.5);
        }

        .sticky-donate-btn:active {
          transform: translateY(-1px) scale(1.02);
        }

        .donate-icon {
          font-size: 1.25rem;
        }

        /* Scrolled state - more compact */
        .sticky-donate-wrapper.scrolled .sticky-donate-btn {
          padding: 0.875rem 1.5rem;
          font-size: 0.95rem;
        }

        /* Mobile Floating Action Button */
        .mobile-fab {
          position: fixed;
          bottom: -100px;
          right: 1.5rem;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .mobile-fab.visible {
          bottom: 1.5rem;
        }

        .mobile-fab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #C27D31 0%, #a66828 100%);
          color: white;
          border-radius: 50%;
          text-decoration: none;
          font-size: 1.5rem;
          box-shadow: 0 4px 20px rgba(194, 125, 49, 0.5);
          transition: all 0.3s ease;
        }

        .mobile-fab-btn:hover {
          transform: scale(1.1);
        }

        .mobile-fab-btn:active {
          transform: scale(0.95);
        }

        /* Show desktop, hide mobile on large screens */
        @media (min-width: 769px) {
          .mobile-fab {
            display: none;
          }
        }

        /* Show mobile, hide desktop on small screens */
        @media (max-width: 768px) {
          .sticky-donate-wrapper {
            display: none;
          }

          .mobile-fab {
            display: block;
          }
        }

        /* Pulse animation to draw attention */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(194, 125, 49, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(194, 125, 49, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(194, 125, 49, 0);
          }
        }

        .sticky-donate-btn {
          animation: pulse 2s infinite;
        }

        .sticky-donate-btn:hover {
          animation: none;
        }

        .mobile-fab-btn {
          animation: pulse 2s infinite;
        }

        .mobile-fab-btn:hover {
          animation: none;
        }
      `}</style>
    </>
  )
}

