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
      stats: 'Climate Resilience Pillar'
    },
    { 
      id: 'girls', 
      title: tr('girls_empowerment'), 
      desc: 'We create safe spaces where girls and women learn, lead, and claim their rights.',
      image: 'program-women.jpg',
      stats: 'Protection & Leadership Pillar'
    },
    { 
      id: 'livelihoods', 
      title: tr('livelihoods'), 
      desc: 'We build economic resilience through climate-smart agriculture and Village Savings & Loan Associations.',
      image: 'program-livelihoods.jpg',
      stats: 'Economic Resilience Pillar'
    }
  ]

  return (
    <div>
      <Head>
        <title>{tr('programs')} — She Pokot Network</title>
        <meta name="description" content="Our three core program pillars advancing climate justice and women's empowerment." />
      </Head>

      <Header />
      <main id="main-content">
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
              {programs.map((prog) => (
                <Link key={prog.id} href={`/programs/${prog.id}`} className="program-featured-card">
                  <div className="program-featured-image">
                    <img src={`/img/${prog.image}`} alt={prog.title} />
                    <div className="program-stat">{prog.stats}</div>
                  </div>
                  <div className="program-featured-content">
                    <h3>{prog.title}</h3>
                    <p>{prog.desc}</p>
                    <span className="learn-more">Learn More →</span>
                  </div>
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
                <p>Early-stage restoration work focused on community tree planting, drought adaptation, and indigenous knowledge.</p>
              </div>
              <div className="impact-box">
                <h4>Women's Empowerment</h4>
                <p>Safe-space mentorship, advocacy, and leadership development for girls and women across partner communities.</p>
              </div>
              <div className="impact-box">
                <h4>Economic Resilience</h4>
                <p>Savings-group support and livelihood skills to strengthen household resilience over time.</p>
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
