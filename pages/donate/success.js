import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function DonationSuccess() {
  return (
    <div>
      <Head>
        <title>Donation Successful — She Pokot Network</title>
      </Head>
      <Header />
      <main id="main-content" className="container">
        <h1>Thank You for Your Donation</h1>
        <p>Your contribution has been received. Your support helps women and girls in West Pokot.</p>
        <p>
          <Link href="/impact" className="btn primary">See Impact Stories</Link>
        </p>
      </main>
      <Footer />
    </div>
  )
}
