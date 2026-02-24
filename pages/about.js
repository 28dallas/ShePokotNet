import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { t } from '../lib/i18n'

export default function About() {
  const router = useRouter()
  const { locale = 'en' } = router.query
  const tr = (key) => t(locale, key)

  const values = [
    { icon: '👥', title: 'Grassroots Leadership', desc: 'We are led by the people we serve. Community voices shape every decision.' },
    { icon: '📊', title: 'Stewardship', desc: 'We are accountable to our donors and communities through rigorous transparency.' },
    { icon: '🌍', title: 'Climate Justice', desc: 'Those least responsible for climate change shouldn\'t suffer most. We act accordingly.' },
    { icon: '🤲', title: 'Inclusivity', desc: 'We serve without regard to religion, race, or ethnicity. All are welcome.' }
  ]

  const team = [
    { name: 'Evelyn Kipkemboi', role: 'Executive Director', image: 'grace.jpg' },
    { name: 'Jackline Kipkech', role: 'Program Manager', image: 'community.jpg' },
    { name: 'Rose Kemboi', role: 'Finance Officer', image: 'asha.jpg' }
  ]

  return (
    <div>
      <Head>
        <title>{tr('about')} — She Pokot Network</title>
        <meta name="description" content="Learn about She Pokot Network's mission, values, and leadership." />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: 'url(/img/hero-01.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>{tr('about')}</h1>
            <p>Who We Are & What Drives Us</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-story">
          <div className="container">
            <div className="story-layout">
              <div className="story-text">
                <h2>{tr('our_story')}</h2>
                <p>
                  She Pokot Network was founded to amplify the voices of women and girls in pastoralist communities facing the impacts of climate change, land degradation, and systemic inequity. Our organization is led by local women and youth who understand the unique challenges and opportunities in West Pokot County.
                </p>
                <p>
                  Through direct community engagement, we work to plant trees, restore degraded lands, advocate for girls' rights, and build sustainable livelihoods that respect local knowledge and empower families.
                </p>
                <p>
                  We believe that transformation happens when communities lead their own change. By centering local women's voices, respecting indigenous knowledge, and building local capacity, we create solutions that last.
                </p>
              </div>
              <div className="story-image">
                <img src="/img/community.jpg" alt="She Pokot Network community" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2>{tr('our_values')}</h2>
            <div className="values-grid">
              {values.map((value, i) => (
                <div key={i} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2>Leadership & Team</h2>
            <p className="section-intro">Our organization is led by committed women and youth from West Pokot County who bring lived experience and local expertise.</p>
            
            <div className="team-grid">
              {team.map((member, i) => (
                <div key={i} className="team-member">
                  <div className="member-image">
                    <img src={`/img/${member.image}`} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-item">
                <h3>Our Mission</h3>
                <p>
                  To follow a community-led approach in working with the poor and marginalized to promote human transformation, seek climate justice, and bear witness to the dignity of every woman and girl in West Pokot County, Kenya.
                </p>
              </div>
              <div className="mission-item">
                <h3>Our Vision</h3>
                <p>
                  A resilient West Pokot where every woman leads a climate-secure life and every girl is free from violence and harmful practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accountability Section */}
        <section className="accountability-section">
          <div className="container">
            <h2>Our Commitment to Transparency</h2>
            <div className="accountability-content">
              <p className="accountability-highlight">
                Transparency is our foundation. Like the world's leading organizations, we are committed to the highest standards of financial integrity and community reporting.
              </p>
              <p>
                We believe our donors and communities deserve to know exactly how their support creates impact. Every donation is tracked, every project is monitored, and every decision is made with accountability in mind.
              </p>
              <div className="accountability-links">
                <a href="/transparency" className="btn primary">View Financial Reports</a>
                <a href="/contact" className="btn">Request More Information</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <h2>Join Our Movement</h2>
            <p>Partner with us to support women-led climate action and transformation in West Pokot.</p>
            <div className="cta-buttons">
              <a className="btn primary large" href="/donate">Donate Now</a>
              <a className="btn large" href="/programs">Explore Our Work</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
