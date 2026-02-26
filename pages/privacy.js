import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy — She Pokot Network</title>
        <meta
          name="description"
          content="How She Pokot Network collects, uses, stores, and protects personal data under the Kenya Data Protection Act."
        />
      </Head>
      <Header />
      <main id="main-content" className="container">
        <h1>Privacy Policy</h1>
        <p>Last updated: February 26, 2026</p>

        <h2>Who We Are</h2>
        <p>
          She Pokot Network is a registered Community Based Organization (CBO) in West Pokot, Kenya. For personal
          data handled through this website and our services, She Pokot Network acts as the Data Controller.
        </p>

        <h2>What Data We Collect</h2>
        <ul>
          <li>Contact details such as name, email address, and phone number.</li>
          <li>Donation-related information such as payment method, amount, and transaction references.</li>
          <li>Website usage information collected through optional analytics cookies if you consent.</li>
        </ul>

        <h2>Why We Collect Data</h2>
        <ul>
          <li>To respond to inquiries and communicate about our programs.</li>
          <li>To deliver programs, advocacy, and safeguarding activities.</li>
          <li>To process and reconcile donations and produce accountability reports.</li>
          <li>To improve website performance and user experience.</li>
        </ul>

        <h2>Your Rights</h2>
        <p>Under the Kenya Data Protection Act, you may request to:</p>
        <ul>
          <li>Access your personal data.</li>
          <li>Correct inaccurate or incomplete data.</li>
          <li>Delete data where legally permissible.</li>
          <li>Object to or restrict specific processing in defined circumstances.</li>
          <li>Withdraw consent where processing relies on consent.</li>
        </ul>

        <h2>Data Sharing and Retention</h2>
        <p>
          We only share personal data with trusted service providers required for operations, such as payment
          processing and hosting. We retain data only for as long as necessary for legal, operational, and
          accountability purposes.
        </p>

        <h2>Contact for Data Concerns</h2>
        <p>
          Email: <a href="mailto:privacy@shepokotnetwork.org">privacy@shepokotnetwork.org</a>
        </p>
        <p>
          Full policy download:{' '}
          <a href="/documents/spn-data-protection-privacy-policy-v1.0.txt" download>
            SPN Data Protection and Privacy Policy (Version 1.0)
          </a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
