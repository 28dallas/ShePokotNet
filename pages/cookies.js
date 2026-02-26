import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CookiePolicy() {
  return (
    <div>
      <Head>
        <title>Cookie Policy — She Pokot Network</title>
        <meta name="description" content="Learn how She Pokot Network uses cookies and analytics preferences." />
      </Head>
      <Header />
      <main id="main-content" className="container">
        <h1>Cookie Policy</h1>
        <p>Last updated: February 26, 2026</p>

        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device to help websites work and understand usage patterns.</p>

        <h2>How We Use Cookies</h2>
        <ul>
          <li>Essential cookies required for core website functionality.</li>
          <li>Optional analytics cookies (for example Google Analytics) to understand site usage trends.</li>
        </ul>

        <h2>Your Choice</h2>
        <p>
          When you visit our site, you can accept or decline non-essential cookies through the consent banner. You can
          also clear cookies from your browser at any time.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about cookies or data usage, contact{' '}
          <a href="mailto:privacy@shepokotnetwork.org">privacy@shepokotnetwork.org</a>.
        </p>
      </main>
      <Footer />
    </div>
  )
}
