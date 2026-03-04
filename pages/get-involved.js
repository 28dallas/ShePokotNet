import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function GetInvolved(){
  return (
    <div>
      <Head>
        <title>Get Involved — She Pokot Network</title>
        <meta name="description" content="Volunteer, partner, or support She Pokot Network." />
      </Head>

      <Header />
      <main id="main-content">
        <section className="page-hero" style={{backgroundImage: 'url(/new/photo_71_2026-03-03_11-10-37.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>Get Involved</h1>
            <p>Volunteer, partner, or support our mission in West Pokot.</p>
          </div>
        </section>

        <section className="getinvolved-section">
          <div className="container">
            <div className="getinvolved-grid">
              <div className="getinvolved-card">
                <h3>Volunteer</h3>
                <p>Join us on the ground for program delivery, mentoring, or events. Fill the short volunteer interest form and we'll follow up.</p>
                <Link href="mailto:info@shepokot.org?subject=Volunteer%20Interest" className="btn primary">Email to Volunteer</Link>
              </div>

              <div className="getinvolved-card">
                <h3>Partnerships</h3>
                <p>We partner with organizations and funders to scale impact. Send partnership enquiries and request our sponsor pack.</p>
                <a className="btn" href="/documents/fund-allocation-2024-summary.txt">Download Sponsor Pack</a>
                <a className="btn primary" href="mailto:info@shepokot.org?subject=Partnership%20Inquiry">Contact Partnerships</a>
              </div>

              <div className="getinvolved-card">
                <h3>Support</h3>
                <p>Make a donation to support our programs, or become a monthly donor.</p>
                <Link href="/donate" className="btn primary">Donate Now</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
