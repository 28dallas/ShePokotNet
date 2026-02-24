import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { t } from '../lib/i18n'

export default function Transparency() {
  const router = useRouter()
  const { locale = 'en' } = router.query
  const tr = (key) => t(locale, key)

  const reports = [
    {
      year: 2024,
      title: 'Annual Report 2024',
      description: 'Comprehensive overview of our programs, impact, and financial stewardship for 2024.',
      link: '/reports/2024-annual-report.pdf',
      highlights: ['850+ trees planted', '1,200+ girls reached', '45+ VSLAs formed']
    },
    {
      year: 2023,
      title: 'Annual Report 2023',
      description: 'Detailed report on our climate justice, girls\' empowerment, and livelihoods initiatives.',
      link: '/reports/2023-annual-report.pdf',
      highlights: ['600+ community members trained', '200+ hectares restored', '400+ direct beneficiaries']
    },
    {
      year: 2022,
      title: 'Annual Report 2022',
      description: 'Foundation year report documenting program launch and initial impact.',
      link: '/reports/2022-annual-report.pdf',
      highlights: ['Program launch', 'Community partnerships', 'First beneficiaries reached']
    }
  ]

  const fundAllocation = [
    { category: 'Programs & Direct Impact', percentage: 75, amount: '75%' },
    { category: 'Administration & Operations', percentage: 15, amount: '15%' },
    { category: 'Monitoring, Evaluation & Learning', percentage: 10, amount: '10%' }
  ]

  return (
    <div>
      <Head>
        <title>Transparency & Reports — She Pokot Network</title>
        <meta name="description" content="View She Pokot Network's annual reports, financial statements, and accountability documentation." />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: 'url(/img/community.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>Transparency & Accountability</h1>
            <p>Our commitment to financial integrity and community reporting</p>
          </div>
        </section>

        {/* Transparency Intro */}
        <section className="transparency-intro">
          <div className="container">
            <h2>We Are Accountable to You</h2>
            <p>Transparency is the foundation of trust. Like the world's leading international organizations, She Pokot Network is committed to the highest standards of financial integrity, impact measurement, and community reporting.</p>
            <p>Below you will find our annual reports, financial statements, CBO registration verification, and fund allocation information.</p>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="annual-reports">
          <div className="container">
            <h2>Annual Reports</h2>
            <div className="reports-grid">
              {reports.map((report, i) => (
                <div key={i} className="report-card">
                  <div className="report-year">{report.year}</div>
                  <h3>{report.title}</h3>
                  <p className="report-description">{report.description}</p>
                  <div className="report-highlights">
                    <strong>Key Highlights:</strong>
                    <ul>
                      {report.highlights.map((highlight, j) => (
                        <li key={j}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={report.link} className="btn primary" download>
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fund Allocation */}
        <section className="fund-allocation">
          <div className="container">
            <h2>How We Use Your Donation</h2>
            <p className="allocation-intro">We are committed to maximizing impact. Here's how donations are allocated:</p>
            
            <div className="allocation-grid">
              <div className="allocation-chart">
                <div className="allocation-bars">
                  {fundAllocation.map((item, i) => (
                    <div key={i} className="allocation-item">
                      <div className="allocation-label">{item.category}</div>
                      <div className="allocation-bar-container">
                        <div 
                          className="allocation-bar" 
                          style={{
                            width: item.percentage + '%',
                            backgroundColor: i === 0 ? 'var(--earthy-green)' : i === 1 ? 'var(--burnt-ochre)' : '#ccc'
                          }}
                        >
                          <span className="allocation-text">{item.amount}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="allocation-detail">
                <div className="detail-item">
                  <h4>🎯 Programs & Direct Impact: 75%</h4>
                  <p>The majority of donations directly fund climate restoration, girls' empowerment, and livelihood programs in West Pokot.</p>
                </div>
                <div className="detail-item">
                  <h4>⚙️ Administration & Operations: 15%</h4>
                  <p>Covers essential office, staffing, and operational costs to run our organization efficiently.</p>
                </div>
                <div className="detail-item">
                  <h4>📊 Monitoring & Learning: 10%</h4>
                  <p>Funds impact measurement, community feedback systems, and continuous program improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Documents */}
        <section className="financial-documents">
          <div className="container">
            <h2>Financial Documentation</h2>
            <div className="documents-grid">
              <div className="document-card">
                <div className="document-icon">📋</div>
                <h3>CBO Registration</h3>
                <p>Official registration certificate with Kenya NGO Board confirming our legal status as a Community Based Organization.</p>
                <a href="/documents/cbo-registration.pdf" className="doc-link" download>Download Certificate →</a>
              </div>
              <div className="document-card">
                <div className="document-icon">💰</div>
                <h3>Audited Financial Statements</h3>
                <p>Annual independent financial audits conducted by certified auditors to ensure accuracy and compliance.</p>
                <a href="/documents/audited-statements-2024.pdf" className="doc-link" download>Download Statements →</a>
              </div>
              <div className="document-card">
                <div className="document-icon">📊</div>
                <h3>Fund Allocation Report</h3>
                <p>Detailed breakdown of how donor funds are allocated across programs, administration, and monitoring.</p>
                <a href="/documents/fund-allocation-2024.pdf" className="doc-link" download>Download Report →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Accountability Principles */}
        <section className="accountability-principles">
          <div className="container">
            <h2>Our Accountability Principles</h2>
            <div className="principles-grid">
              <div className="principle-card">
                <h3>🤝 Community First</h3>
                <p>Communities define priorities. We listen, measure impact with them, and report back regularly on progress and challenges.</p>
              </div>
              <div className="principle-card">
                <h3>📈 Rigorous Measurement</h3>
                <p>We track impact against clear targets, conduct annual evaluations, and learn from what works and what doesn't.</p>
              </div>
              <div className="principle-card">
                <h3>💯 Financial Integrity</h3>
                <p>All donations are tracked meticulously, independently audited, and spent exactly as restricted by donors.</p>
              </div>
              <div className="principle-card">
                <h3>🗣️ Open Communication</h3>
                <p>We share both successes and challenges. Annual reports detail what we achieved and where we fell short.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Questions CTA */}
        <section className="questions-cta">
          <div className="container">
            <h2>Questions About Our Work?</h2>
            <p>We welcome questions and feedback about our programs and financial management. Please contact us directly.</p>
            <div className="cta-buttons">
              <a className="btn primary large" href="/contact">Contact Us</a>
              <a className="btn large" href="mailto:info@shepokot.org">Email Our Finance Team</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
