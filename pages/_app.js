import '../styles/globals.css'
import Analytics from '../components/Analytics'
import SkipLink from '../components/SkipLink'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SkipLink />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
