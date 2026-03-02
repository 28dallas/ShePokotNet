import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import StickyDonateButton from '../components/StickyDonateButton'
import ImpactCounter from '../components/ImpactCounter'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null)

  const impactStats = [
    { target: 1, label: 'Registered CBO in West Pokot', color: '#3B6B37' },
    { target: 3, label: 'Core Program Pillars', color: '#C27D31' },
    { target: 1, label: 'Women-Led Local Team', color: '#3B6B37' },
    { target: 1, label: 'Commitment to Annual Public Reporting', color: '#C27D31' }
  ]

  const programs = [
    {
      id: 'climate',
      title: 'Climate Justice & Land Restoration',
      image: 'program-climate.jpg',
      excerpt: 'We restore degraded lands through tree planting and regenerative agriculture.',
      stats: 'Climate Resilience Focus'
    },
    {
      id: 'girls',
      title: 'Girls & Women Empowerment',
      image: 'program-women.jpg',
      excerpt: 'Mentorship, leadership training, and advocacy against gender-based violence.',
      stats: 'Protection & Leadership Focus'
    },
    {
      id: 'livelihoods',
      title: 'Livelihoods & VSLAs',
      image: 'program-livelihoods.jpg',
      excerpt: 'Village Savings & Loan Associations empower women economically.',
      stats: 'Economic Resilience Focus'
    }
  ]

  async function handleNewsletterSubmit(e) {
    e.preventDefault()
    setNewsletterStatus('processing')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'home' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Subscription failed')
      setNewsletterStatus('success')
      setEmail('')
    } catch (err) {
      setNewsletterStatus(err.message || 'Subscription failed')
    }
  }

  return (
    <div>
      <SEO 
        title="Home"
        description="She Pokot Network: local voices driving climate justice and dignity in West Pokot, Kenya. Empowering women, restoring land, transforming futures."
        type="website"
      />

      <Header />
      <main id="main-content">
        <Hero />

        {/* Who We Are Section */}
        <section className="who-we-are" aria-labelledby="who-we-are-heading">
          <div className="container">
            <div className="who-we-are-content">
              <div className="who-we-are-text">
                <h2 id="who-we-are-heading">Who We Are</h2>
                <p>
                  She Pokot Network is a grassroots women-led organization advancing climate justice and dignity for girls and women in pastoralist communities of West Pokot County, Kenya.
                </p>
                <p>
                  Through community-driven initiatives in climate restoration, economic empowerment, and advocacy, we are transforming futures and restoring hope.
                </p>
                <Link href="/about" className="btn primary">Learn Our Story</Link>
              </div>
              <div className="who-we-are-image">
                <img 
                  src="/img/community.jpg" 
                  alt="She Pokot Network community members together" 
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section - The Problem */}
        <section className="urgency-section" aria-labelledby="challenge-heading">
          <div className="container">
            <h2 id="challenge-heading">The Challenge We Face</h2>
            <div className="urgency-content">
              <div className="urgency-text">
                <p className="urgency-highlight">
                  In West Pokot, climate change isn't a future threat—it's a daily reality.
                </p>
                <p>
                  Recurrent droughts and systemic inequality leave women and girls most vulnerable. They face:
                </p>
                <ul className="urgency-list" role="list">
                  <li><strong>Climate Shocks:</strong> Recurring droughts devastate livelihoods and force families into survival mode.</li>
                  <li><strong>Gendered Vulnerability:</strong> When resources shrink, girls are pulled from school and subjected to harmful practices.</li>
                  <li><strong>Economic Marginalization:</strong> Limited access to credit, markets, and decision-making power keeps communities trapped in poverty.</li>
                  <li><strong>Limited Agency:</strong> Local voices—especially women's—are rarely heard in solutions that affect them most.</li>
                </ul>
                <p className="urgency-action">
                  <strong>We are changing that narrative.</strong> By placing women's leadership at the center, combining traditional knowledge with modern climate science, and building economic resilience, we create lasting transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section with Animation */}
        <ImpactCounter 
          stats={impactStats}
          duration={2500}
          suffix=""
        />

        {/* Programs Section */}
        <section className="programs-showcase" aria-labelledby="programs-heading">
          <div className="container">
            <h2 id="programs-heading">Our Work</h2>
            <p className="section-intro">We work across three interconnected pillars to drive lasting change.</p>
            
            <div className="programs-featured">
              {programs.map((prog, i) => (
                <article key={i} className="featured-program">
                  <div className="program-image-wrapper">
                    <img 
                      src={`/img/${prog.image}`} 
                      alt={prog.title}
                      width="400"
                      height="280"
                    />
                    <div className="program-overlay">
                      <h3>{prog.title}</h3>
                    </div>
                  </div>
                  <div className="program-content">
                    <p className="program-excerpt">{prog.excerpt}</p>
                    <span className="program-stat-badge">{prog.stats}</span>
                    <Link href={`/programs/${prog.id}`} className="btn">
                      Explore Program
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Story */}
        <section className="featured-story" aria-labelledby="story-heading">
          <div className="container">
            <h2 id="story-heading">Real Change, Real Stories</h2>
            <div className="story-featured">
              <div className="story-image">
                <img 
                  src="/img/grace.jpg" 
                  alt="Grace - Youth leader and mentor in West Pokot" 
                  width="600"
                  height="400"
                />
              </div>
              <div className="story-text">
                <h3>Grace: From Victim to Advocate</h3>
                <p>
                  Growing up in West Pokot, Grace faced pressure to accept FGM and child marriage. Through She Pokot Network's mentorship program and leadership training, she found her voice.
                </p>
                <p>
                  Today, Grace advocates against FGM and mentors younger girls in her village, creating a ripple of change.
                </p>
                <Link href="/impact" className="btn">See More Stories</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Field Gallery */}
        <section className="field-gallery" aria-labelledby="field-gallery-heading">
          <div className="container">
            <h2 id="field-gallery-heading">From the Field</h2>
            <p className="section-intro">Snapshots of community engagement and local leadership in action.</p>
            <div className="field-gallery-grid">
              <img src="/img/gallery-1.jpg" alt="Community members in a field training session" />
              <img src="/img/gallery-2.jpg" alt="Women participating in a group meeting" />
              <img src="/img/gallery-3.jpg" alt="Local team facilitating a community dialogue" />
              <img src="/img/gallery-4.jpg" alt="Participants in a livelihood activity" />
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section className="donation-cta" aria-labelledby="donate-heading">
          <div className="container">
            <h2 id="donate-heading">Support Our Mission</h2>
            <p>Your contribution directly empowers women, restores land, and transforms futures in West Pokot.</p>
            <div className="cta-buttons">
              <Link className="btn primary large" href="/donate">
                Donate Now
              </Link>
              <Link className="btn large" href="/programs">
                Learn About Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter" aria-labelledby="newsletter-heading">
          <div className="container">
            <div className="newsletter-content">
              <h3 id="newsletter-heading">Stay Updated</h3>
              <p>Subscribe to receive updates on our impact and stories from the field.</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="home-email" className="visually-hidden">Email address</label>
                <input 
                  type="email" 
                  id="home-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required 
                />
                <button type="submit" className="btn primary">Subscribe</button>
              </form>
              {newsletterStatus === 'success' && (
                <p role="status">Subscription received. Thank you.</p>
              )}
              {newsletterStatus && newsletterStatus !== 'success' && newsletterStatus !== 'processing' && (
                <p role="alert">{newsletterStatus}</p>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyDonateButton />
    </div>
  )
}
