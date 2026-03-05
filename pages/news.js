import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getNewsPostsFromCMS } from '../lib/cms'

export default function News({ posts }) {
  return (
    <div>
      <Head>
        <title>News & Resources — She Pokot Network</title>
        <meta name="description" content="Latest updates, stories, and resources from She Pokot Network." />
      </Head>

      <Header />
      <main id="main-content">
        <section className="page-hero" style={{backgroundImage: 'url(/new/photo_25_2026-03-03_11-10-37.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>News & Resources</h1>
            <p>Updates from our programs, partnerships, and field learning in West Pokot.</p>
          </div>
        </section>

        <section className="news-intro">
          <div className="container">
            <div className="story-strip" aria-label="Highlights">
              {posts.map((post, i) => (
                <article key={i} className="story-chip">
                  <div className="story-chip-image-wrap">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 767px) 33vw, 150px"
                      className="story-chip-image"
                    />
                  </div>
                  <span>{post.category}</span>
                </article>
              ))}
            </div>

            <div className="news-intro-card">
              <span className="news-kicker">Latest Brief</span>
              <h2>{posts[0].title}</h2>
              <p>{posts[0].excerpt}</p>
              <div className="meta-row">
                <span>{formatDate(posts[0].date)}</span>
                <span>{posts[0].category}</span>
              </div>
              <Link href="/contact" className="btn primary">Request Full Update</Link>
            </div>
          </div>
        </section>

        <section className="news-section">
          <div className="container">
            <h2>Recent Updates</h2>
            <div className="news-grid">
              {posts.slice(1).map((post, i) => (
                <article key={i} className="news-card">
                  <div className="news-image-wrap">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="news-image"
                    />
                  </div>
                  <div className="meta-row">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.category}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="social-actions" aria-label="Social actions">
                    <button type="button">Like</button>
                    <button type="button">Comment</button>
                    <button type="button">Share</button>
                  </div>
                  <Link href="/contact" className="news-link">Request Full Story</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="resources-section">
          <div className="container">
            <h2>Resources</h2>
            <div className="resources-grid">
              <Link href="/transparency" className="resource-card">
                <strong>Annual Reports</strong>
                <span>Governance and financial summaries</span>
              </Link>
              <Link href="/programs/climate" className="resource-card">
                <strong>Climate Justice Brief</strong>
                <span>Our climate resilience approach</span>
              </Link>
              <Link href="/programs/livelihoods" className="resource-card">
                <strong>VSLA Program Guide</strong>
                <span>How savings groups strengthen households</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .news-intro {
          background: #f8f8f6;
          padding: 3rem 0 1.5rem;
        }

        .story-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 0.8rem;
          margin-bottom: 1.25rem;
        }

        .story-chip {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          padding: 0.55rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .story-chip-image-wrap {
          position: relative;
          width: 100%;
          height: 80px;
          border-radius: 9px;
          overflow: hidden;
          margin-bottom: 0.45rem;
        }

        .story-chip-image {
          object-fit: cover;
          object-position: center;
        }

        .story-chip span {
          font-size: 0.78rem;
          color: #576573;
          font-weight: 700;
        }

        .news-intro-card {
          background: white;
          border: 1px solid #e5e5e5;
          border-left: 6px solid var(--burnt-ochre);
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        .news-kicker {
          display: inline-block;
          background: rgba(194, 125, 49, 0.12);
          color: var(--burnt-ochre);
          padding: 0.3rem 0.65rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-bottom: 0.9rem;
        }

        .news-intro-card h2 {
          margin: 0 0 0.75rem;
          color: #1f2d3d;
        }

        .news-intro-card p {
          margin: 0 0 1rem;
          color: #4d5966;
          line-height: 1.7;
        }

        .meta-row {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 1.1rem;
        }

        .meta-row span {
          display: inline-block;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          background: #f1f3f4;
          color: #5f6a75;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .news-section {
          background: white;
          padding: 2rem 0 3rem;
        }

        .news-section h2,
        .resources-section h2 {
          color: var(--earthy-green);
          margin-top: 0;
          margin-bottom: 1.25rem;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.2rem;
        }

        .news-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          padding: 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .news-image-wrap {
          position: relative;
          height: 185px;
          overflow: hidden;
        }

        .news-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .news-card:hover .news-image {
          transform: scale(1.04);
        }

        .news-card :global(.meta-row),
        .news-card h3,
        .news-card p,
        .news-card :global(.news-link),
        .news-card .social-actions {
          margin-left: 1rem;
          margin-right: 1rem;
        }

        .news-card h3 {
          margin: 0 0 0.65rem;
          color: #22313f;
          line-height: 1.35;
        }

        .news-card p {
          margin: 0 0 0.9rem;
          color: #51606d;
          line-height: 1.65;
        }

        .social-actions {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
        }

        .social-actions button {
          border: 1px solid #d8d8d8;
          background: #f8f9fa;
          color: #45525f;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 999px;
          padding: 0.28rem 0.65rem;
          cursor: pointer;
        }

        .social-actions button:hover {
          border-color: var(--burnt-ochre);
          background: rgba(194, 125, 49, 0.12);
        }

        .news-link {
          color: var(--earthy-green);
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .news-link:hover {
          text-decoration: underline;
        }

        .resources-section {
          background: #f8f8f6;
          border-top: 1px solid #ececec;
          padding: 2.5rem 0 3.5rem;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
        }

        .resource-card {
          display: block;
          background: white;
          border: 1px solid #dfdfdf;
          border-radius: 10px;
          padding: 1rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .resource-card strong {
          display: block;
          color: #233443;
          margin-bottom: 0.35rem;
        }

        .resource-card span {
          color: #606f7c;
          font-size: 0.92rem;
        }

        .resource-card:hover {
          border-color: var(--burnt-ochre);
          background: rgba(194, 125, 49, 0.06);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export async function getStaticProps() {
  const posts = await getNewsPostsFromCMS()
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return {
    props: {
      posts: sorted
    }
  }
}
