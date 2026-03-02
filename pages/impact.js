import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getImpactStoriesFromCMS } from '../lib/cms'

export default function Impact({ stories }) {
  const featured = stories[0]
  const remainingStories = stories.slice(1)

  return (
    <div>
      <Head>
        <title>Impact Stories — She Pokot Network</title>
        <meta
          name="description"
          content="Impact stories from She Pokot Network programs in West Pokot, Kenya."
        />
      </Head>

      <Header />
      <main id="main-content">
        <section className="impact-hero" aria-label="Impact stories introduction">
          <div className="container">
            <p className="impact-kicker">Impact Stories</p>
            <h1>Community-Led Progress in West Pokot</h1>
            <p className="impact-subtitle">
              Stories below are managed through our content workflow and will later be connected to a live CMS.
            </p>
          </div>
        </section>

        {featured && (
          <section className="featured-impact" aria-label="Featured impact story">
            <div className="container">
              <article className="featured-card" aria-label={`Featured story: ${featured.title}`}>
                <div className="featured-image-wrap">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="featured-content">
                  <div className="meta-row">
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span>{featured.category}</span>
                  </div>
                  <h2>{featured.title}</h2>
                  <p className="intro">
                    <strong>{featured.person}</strong> ({featured.role}) - {featured.location}
                  </p>
                  <p>{featured.summary}</p>
                  <div className="outcome-box" aria-label="Story outcome">
                    <h3>Observed Outcome</h3>
                    <p>{featured.outcome}</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        <section className="impact-grid-section" aria-label="More impact stories">
          <div className="container">
            <h2>More Stories</h2>
            <div className="impact-grid">
              {remainingStories.map((story) => (
                <article key={story.id} className="impact-card" aria-label={`Story: ${story.title}`}>
                  <div className="impact-image-wrap">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                  </div>
                  <div className="impact-content">
                    <div className="meta-row">
                      <span>{formatDate(story.publishedAt)}</span>
                      <span>{story.category}</span>
                    </div>
                    <h3>{story.title}</h3>
                    <p className="intro">
                      <strong>{story.person}</strong> ({story.role}) - {story.location}
                    </p>
                    <p>{story.summary}</p>
                    <div className="outcome-box">
                      <h4>Observed Outcome</h4>
                      <p>{story.outcome}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-cta" aria-label="Impact page call to action">
          <div className="container">
            <h2>Support Community-Led Work</h2>
            <p>Your support helps us keep documenting progress and expanding practical programs in West Pokot.</p>
            <div className="cta-buttons">
              <Link className="btn primary large" href="/donate">
                Donate Now
              </Link>
              <Link className="btn large" href="/programs">
                Explore Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .impact-hero {
          background: #163024;
          color: #fff;
          padding: 6rem 0 3rem;
        }

        .impact-kicker {
          margin: 0 0 0.75rem;
          color: #f0c58c;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          font-size: 0.85rem;
        }

        .impact-hero h1 {
          margin: 0;
          line-height: 1.2;
          font-size: 2rem;
        }

        .impact-subtitle {
          margin: 0.9rem 0 0;
          color: rgba(255, 255, 255, 0.9);
          max-width: 760px;
        }

        .featured-impact {
          background: #f6f7f4;
          padding: 1.5rem 0 2rem;
        }

        .featured-card {
          background: #fff;
          border: 1px solid #d9dfd9;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .featured-image-wrap {
          position: relative;
          width: 100%;
          min-height: 280px;
        }

        .featured-content {
          padding: 1rem;
          color: #1e2b1f;
        }

        .featured-content h2 {
          margin: 0.45rem 0;
          color: #173324;
        }

        .impact-grid-section {
          background: #fff;
          padding: 2rem 0 3rem;
        }

        .impact-grid-section h2 {
          margin-top: 0;
          color: #173324;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .impact-card {
          border: 1px solid #d9dfd9;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07);
        }

        .impact-image-wrap {
          position: relative;
          width: 100%;
          min-height: 220px;
        }

        .impact-content {
          padding: 1rem;
          color: #1e2b1f;
        }

        .impact-content h3 {
          margin: 0.45rem 0;
          color: #173324;
        }

        .meta-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .meta-row span {
          display: inline-block;
          background: #edf2ee;
          color: #2f4732;
          border: 1px solid #d4ded5;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.24rem 0.5rem;
        }

        .intro {
          margin: 0;
          color: #24352a;
        }

        .impact-content p,
        .featured-content p {
          line-height: 1.65;
          color: #25362b;
        }

        .outcome-box {
          background: #f7faf7;
          border: 1px solid #d6e2d7;
          border-left: 4px solid #c27d31;
          border-radius: 8px;
          padding: 0.75rem;
          margin-top: 0.8rem;
        }

        .outcome-box h3,
        .outcome-box h4 {
          margin: 0 0 0.35rem;
          color: #173324;
          font-size: 1rem;
        }

        .outcome-box p {
          margin: 0;
        }

        @media (min-width: 768px) {
          .impact-hero h1 {
            font-size: 2.4rem;
          }

          .featured-card {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
          }

          .featured-image-wrap {
            min-height: 100%;
          }

          .impact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .impact-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
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
  const stories = await getImpactStoriesFromCMS()
  const sorted = [...stories].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

  return {
    props: {
      stories: sorted
    }
  }
}
