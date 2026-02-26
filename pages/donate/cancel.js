import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function DonationCancelled() {
  return (
    <div>
      <Head>
        <title>Donation Cancelled — She Pokot Network</title>
      </Head>
      <Header />
      <main id="main-content" className="container">
        <h1>Donation Cancelled</h1>
        <p>No payment was completed. You can try again whenever you are ready.</p>
        <p>
          <Link href="/donate" className="btn primary">Return to Donate</Link>
        </p>
      </main>
      <Footer />
    </div>
  )
}
