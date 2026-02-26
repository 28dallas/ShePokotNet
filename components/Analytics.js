import { useEffect } from 'react'

export default function AnalyticsScript() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (!gaId) return

    const hasConsent = () => {
      if (typeof window === 'undefined') return false
      return window.localStorage.getItem('spn_cookie_consent') === 'accepted'
    }

    const loadAnalytics = () => {
      if (!hasConsent()) return
      if (document.getElementById('spn-ga-script')) return

      const script1 = document.createElement('script')
      script1.id = 'spn-ga-script'
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.id = 'spn-ga-inline'
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', { page_path: window.location.pathname });
      `
      document.head.appendChild(script2)
    }

    loadAnalytics()
    window.addEventListener('spn-cookie-consent-changed', loadAnalytics)
    return () => window.removeEventListener('spn-cookie-consent-changed', loadAnalytics)
  }, [])
  return null
}
