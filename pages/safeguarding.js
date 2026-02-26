import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SafeguardingPolicy() {
  return (
    <div>
      <Head>
        <title>Safeguarding & Ethics — She Pokot Network</title>
        <meta
          name="description"
          content="She Pokot Network safeguarding, child protection, and PSEA commitments."
        />
      </Head>
      <Header />
      <main id="main-content" className="container">
        <h1>Safeguarding & Ethics</h1>
        <p>Last updated: February 26, 2026</p>

        <h2>Our Commitment</h2>
        <p>
          She Pokot Network is committed to protecting children, women, and all community members involved in our
          programs. Safeguarding is mandatory for staff, volunteers, and partners.
        </p>

        <h2>Child Protection</h2>
        <ul>
          <li>All staff and volunteers follow child-safe standards and reporting protocols.</li>
          <li>Parental or guardian consent is required for child participation records and media use.</li>
          <li>Concerns of abuse, neglect, or exploitation must be reported immediately.</li>
        </ul>

        <h2>PSEA: Zero Tolerance</h2>
        <p>
          She Pokot Network has zero tolerance for sexual exploitation, abuse, or harassment by staff, volunteers, or
          partners. Violations trigger disciplinary and legal action.
        </p>

        <h2>Ethical Standards</h2>
        <ul>
          <li>Respect for human rights and dignity.</li>
          <li>Integrity in handling funds and resources.</li>
          <li>Confidentiality of sensitive personal information.</li>
          <li>Accountability to communities, donors, and regulators.</li>
        </ul>

        <h2>Reporting Concerns</h2>
        <p>
          To report a safeguarding concern, contact{' '}
          <a href="mailto:info@shepokot.org">info@shepokot.org</a> and mark your message as
          &quot;Safeguarding Concern&quot;.
        </p>
      </main>
      <Footer />
    </div>
  )
}
