import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DonateForm from '../components/DonateForm'

export default function Donate() {
  return (
    <div>
      <Head>
        <title>Donate — She Pokot Network</title>
        <meta name="description" content="Support She Pokot Network's work in West Pokot County, Kenya." />
      </Head>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: 'url(/img/hero-01.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>Support Our Mission</h1>
            <p>Your gift creates lasting change for women and communities in West Pokot</p>
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="donation-tiers">
          <div className="container">
            <h2>Choose Your Level of Impact</h2>
            <p className="section-subtitle">Select a giving level that fits your capacity. Or give a custom amount.</p>
            
            <div className="tiers-grid">
              <div className="tier-card">
                <div className="tier-amount">KSH 1,500</div>
                <div className="tier-usd">~ $12 USD</div>
                <div className="tier-impact">
                  <strong>Provide a Dignity Kit for a Girl in School</strong>
                  <p>Includes uniform materials, hygiene products, and school supplies to keep girls in school during their menstrual cycle.</p>
                </div>
                <a className="btn secondary" href="#donate-form">Donate KSH 1,500</a>
              </div>

              <div className="tier-card featured">
                <div className="tier-amount">KSH 5,000</div>
                <div className="tier-usd">~ $40 USD</div>
                <div className="tier-impact">
                  <strong>Plant & Protect 10 Indigenous Trees</strong>
                  <p>Funds seedling production, planting, and 3-year protection to restore degraded lands and combat climate change.</p>
                </div>
                <a className="btn primary" href="#donate-form">Donate KSH 5,000</a>
              </div>

              <div className="tier-card">
                <div className="tier-amount">KSH 15,000</div>
                <div className="tier-usd">~ $120 USD</div>
                <div className="tier-impact">
                  <strong>Help a Women's Group Start a VSLA</strong>
                  <p>Launches a Village Savings & Loan Association, enabling 20+ women to save, access credit, and build economic resilience.</p>
                </div>
                <a className="btn secondary" href="#donate-form">Donate KSH 15,000</a>
              </div>
            </div>

            <div className="custom-amount">
              <p><strong>Other Amount?</strong> Scroll down to donate any custom amount via M-Pesa, Stripe, or PayPal.</p>
            </div>
          </div>
        </section>

        {/* M-Pesa Donation */}
        <section className="donation-methods" id="donate-form">
          <div className="container">
            <h2>Make Your Donation</h2>
            <div className="method-grid">
              <div className="method">
                <h3>💳 M-Pesa (Kenya)</h3>
                <p>Quick and convenient mobile money payments via M-Pesa.</p>
                <DonateForm />
              </div>

              <div className="method">
                <h3>🌐 Other Payment Methods</h3>
                <p>We also accept donations via Stripe (credit/debit cards) and PayPal for international donors.</p>
                <p style={{color: '#666', fontSize: '.95rem'}}>Contact us at <a href="mailto:info@shepokot.org">info@shepokot.org</a> for alternative payment options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="partnership-section">
          <div className="container">
            <h2>Looking to Create Impact at Scale?</h2>
            <div className="partnership-content">
              <div className="partnership-text">
                <p>Are you an organization, foundation, or donor looking to create significant impact in West Pokot? She Pokot Network provides the <strong>local expertise, community relationships, and ground presence</strong>. You provide the scale and resources.</p>
                <p>We've successfully partnered with international NGOs, government agencies, and foundations to expand our reach. Let's collaborate to build a West Pokot County where women lead, land thrives, and communities flourish.</p>
                <a className="btn primary" href="/contact">Explore Partnership Opportunities</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Give Section */}
        <section className="why-give">
          <div className="container">
            <h2>Why Your Donation Matters</h2>
            <div className="why-grid">
              <div className="why-item">
                <h4>🌍 Local Leadership</h4>
                <p>100% led and managed by West Pokot women. Your donation supports local solutions.</p>
              </div>
              <div className="why-item">
                <h4>📊 Transparent Impact</h4>
                <p>We measure and report on every aspect of our work. See exactly where your donation goes.</p>
              </div>
              <div className="why-item">
                <h4>🤝 Community-Driven</h4>
                <p>Communities define priorities. Your support funds what communities identify as most critical.</p>
              </div>
              <div className="why-item">
                <h4>💰 Efficient Operations</h4>
                <p>Lean operations mean more of your donation goes directly to programs and impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-items">
              <div className="faq-item">
                <h4>Is my donation tax-deductible?</h4>
                <p>She Pokot Network is registered as a Community Based Organization (CBO) with the Kenya NGO Board. Check with your tax advisor regarding deductibility.</p>
              </div>
              <div className="faq-item">
                <h4>How do you use donations?</h4>
                <p>Donations support our three core programs: climate restoration, girls' empowerment, and livelihoods. See our transparency page for detailed financial reports.</p>
              </div>
              <div className="faq-item">
                <h4>Do you accept recurring donations?</h4>
                <p>Yes! Monthly giving helps us plan and scale impact. Contact us at info@shepokot.org to set up a recurring donation.</p>
              </div>
              <div className="faq-item">
                <h4>Can I donate in a different currency?</h4>
                <p>We accept donations in KES (Kenya Shillings) via M-Pesa, and USD via Stripe and PayPal. Contact us for other currencies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You CTA */}
        <section className="thank-you-section">
          <div className="container">
            <h2>Thank You for Your Compassion</h2>
            <p>Every donation, no matter the size, contributes to building a West Pokot County where women lead, land thrives, and communities flourish.</p>
            <a className="btn primary large" href="/impact">See Stories of Impact</a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
