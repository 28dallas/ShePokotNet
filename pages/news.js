import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function News() {
  const posts = [
    {
      title: '2,000 Trees Planted in January',
      date: '2026-02-10',
      excerpt: 'Community mobilization exceeded expectations with 2,000 additional trees planted in Q1.'
    },
    {
      title: 'VSLA Program Reaches 600 Members',
      date: '2026-01-30',
      excerpt: 'Our Village Savings and Loan Associations are now supporting 600 active members across 45 groups.'
    },
    {
      title: 'Anti-FGM Advocacy Campaign Launches',
      date: '2026-01-15',
      excerpt: 'A new community dialogue series aimed at ending harmful practices while honoring cultural identity.'
    }
  ]

  return (
    <div>
      <Head>
        <title>News & Resources — She Pokot Network</title>
        <meta name="description" content="Latest updates, stories, and resources from She Pokot Network." />
      </Head>

      <Header />
      <main className="container">
        <h1>News & Resources</h1>

        <section className="blog">
          {posts.map((post, i) => (
            <article key={i} className="post">
              <h2>{post.title}</h2>
              <p className="date">{new Date(post.date).toLocaleDateString()}</p>
              <p>{post.excerpt}</p>
              <a href="#">Read More</a>
            </article>
          ))}
        </section>

        <section>
          <h2>Resources</h2>
          <ul>
            <li><a href="#">2025 Annual Report (PDF)</a></li>
            <li><a href="#">Climate Justice in Arid Lands (Research Brief)</a></li>
            <li><a href="#">VSLA Handbook (Guide)</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
