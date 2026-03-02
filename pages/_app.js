import '../styles/globals.css'
import Analytics from '../components/Analytics'
import SkipLink from '../components/SkipLink'
import CookieBanner from '../components/CookieBanner'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SkipLink />
      <Analytics />
      <CookieBanner />
      <Component {...pageProps} />
    </>
  )
}
