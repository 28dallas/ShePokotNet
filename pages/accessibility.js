import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AccessibilityStatement() {
  return (
    <div>
      <Head>
        <title>Accessibility Statement — She Pokot Network</title>
        <meta name="description" content="Accessibility statement for the She Pokot Network website." />
      </Head>
      <Header />
      <main id="main-content" className="container">
        <h1>Accessibility Statement</h1>
        <p>
          She Pokot Network is committed to making this website accessible to all users, including people using
          assistive technologies.
        </p>
        <p>
          If you face accessibility barriers, contact <a href="mailto:info@shepokot.org">info@shepokot.org</a> so we
          can assist and improve.
        </p>
      </main>
      <Footer />
    </div>
  )
}
