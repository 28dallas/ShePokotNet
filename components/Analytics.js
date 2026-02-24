import { useEffect } from 'react'

export default function AnalyticsScript() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
      `
      document.head.appendChild(script2)
    }
  }, [])
  return null
}
