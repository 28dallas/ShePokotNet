import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsOfUse() {
  return (
    <div>
      <Head>
        <title>Terms of Use — She Pokot Network</title>
        <meta name="description" content="Terms and conditions for using the She Pokot Network website and donation services." />
      </Head>
      <Header />
      <main id="main-content" className="container">
        <h1>Terms of Use</h1>
        <p>Last updated: February 26, 2026</p>

        <h2>Donations</h2>
        <p>
          Donations to She Pokot Network are used to support our mission and approved programs. Unless required by law,
          donations are non-refundable once processed.
        </p>

        <h2>Use of Website Content</h2>
        <p>
          All text, branding, photos, videos, and impact stories on this site are owned by or licensed to She Pokot
          Network. You may not reproduce or republish them for commercial purposes without written permission.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may include links to third-party sites. She Pokot Network is not responsible for the content,
          policies, or practices of external websites.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          We aim to keep information accurate and current, but provide website content on an &quot;as is&quot; basis.
          She Pokot Network is not liable for indirect losses arising from website use.
        </p>

        <h2>Contact</h2>
        <p>
          For legal or terms-related questions, email <a href="mailto:info@shepokot.org">info@shepokot.org</a>.
        </p>
      </main>
      <Footer />
    </div>
  )
}
