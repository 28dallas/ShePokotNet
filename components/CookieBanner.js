import { useEffect, useState } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'spn_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(COOKIE_KEY)
    if (!saved) setVisible(true)
  }, [])

  const saveConsent = (value) => {
    window.localStorage.setItem(COOKIE_KEY, value)
    window.dispatchEvent(new Event('spn-cookie-consent-changed'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p>
        We use optional analytics cookies to improve this website. You can accept or decline non-essential cookies.
        Read our <Link href="/cookies">Cookie Policy</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn primary" onClick={() => saveConsent('accepted')}>
          Accept
        </button>
        <button type="button" className="btn" onClick={() => saveConsent('declined')}>
          Decline
        </button>
      </div>
      <style jsx>{`
        .cookie-banner {
          position: fixed;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          z-index: 10001;
          background: #1f1f1f;
          color: #fff;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
        }
        .cookie-banner p {
          margin: 0;
          line-height: 1.5;
        }
        .cookie-banner :global(a) {
          color: #f0c58c;
        }
        .cookie-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        @media (min-width: 900px) {
          .cookie-banner {
            max-width: 760px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  )
}
