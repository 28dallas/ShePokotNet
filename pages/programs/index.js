import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { t } from '../../lib/i18n'

export default function Programs() {
  const router = useRouter()
  const { locale = 'en' } = router.query
  const tr = (key) => t(locale, key)

  const programs = [
    { 
      id: 'climate', 
      title: tr('climate_justice'), 
      desc: 'We restore degraded lands through tree planting, regenerative agriculture, and indigenous knowledge.',
      image: 'program-climate.jpg',
      stats: '50,000+ Trees Planted'
    },
    { 
      id: 'girls', 
      title: tr('girls_empowerment'), 
      desc: 'We create safe spaces where girls and women learn, lead, and claim their rights.',
      image: 'program-women.jpg',
      stats: '450+ Girls Reached'
    },
    { 
      id: 'livelihoods', 
      title: tr('livelihoods'), 
      desc: 'We build economic resilience through climate-smart agriculture and Village Savings & Loan Associations.',
      image: 'program-livelihoods.jpg',
      stats: '600+ VSLA Members'
    }
  ]

  return (
    <div>
      <Head>
        <title>{tr('programs')} — She Pokot Network</title>
        <meta name="description" content="Our three core program pillars advancing climate justice and women's empowerment." />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: 'url(/img/program-climate.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>{tr('programs')}</h1>
            <p>Three Pillars of Transformation</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="programs-intro">
          <div className="container">
            <h2>How We Create Change</h2>
            <p>We work across three interconnected pillars to drive lasting transformation in West Pokot County. Each program builds on the strengths of local women and communities, combining proven solutions with indigenous knowledge.</p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="programs-full">
          <div className="container">
            <div className="programs-grid-large">
              {programs.map((prog, idx) => (
                <Link key={prog.id} href={`/programs/${prog.id}`}>
                  <a className="program-featured-card">
                    <div className="program-featured-image">
                      <img src={`/img/${prog.image}`} alt={prog.title} />
                      <div className="program-stat">{prog.stats}</div>
                    </div>
                    <div className="program-featured-content">
                      <h3>{prog.title}</h3>
                      <p>{prog.desc}</p>
                      <span className="learn-more">Learn More →</span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Overview */}
        <section className="programs-impact">
          <div className="container">
            <h2>Our Collective Impact</h2>
            <div className="impact-boxes">
              <div className="impact-box">
                <h4>Environmental Restoration</h4>
                <p>Over 50,000 trees planted, 200+ households supported in climate adaptation, and indigenous knowledge preserved.</p>
              </div>
              <div className="impact-box">
                <h4>Women's Empowerment</h4>
                <p>600+ women organized in VSLAs, 450+ girls reached through mentorship, and 300+ women engaged in advocacy.</p>
              </div>
              <div className="impact-box">
                <h4>Economic Resilience</h4>
                <p>45 VSLAs active, average household income increased by 35%, and diverse livelihood skills developed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="programs-cta">
          <div className="container">
            <h2>Support Our Programs</h2>
            <p>Every contribution directly strengthens our ability to scale impact across these three pillars.</p>
            <div className="cta-buttons">
              <a className="btn primary large" href="/donate">Make a Donation</a>
              <a className="btn large" href="/impact">See Stories of Change</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
