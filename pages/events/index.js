import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getEvents } from '../../lib/cms'

export default function Events({ upcomingEvents, pastEvents }) {
  return (
    <div>
      <Head>
        <title>Events — She Pokot Network</title>
        <meta name="description" content="Join our community events, workshops, and gatherings in West Pokot." />
      </Head>

      <Header />
      <main id="main-content">
        <section className="page-hero" style={{backgroundImage: 'url(/img/pexels-rdne-6646944.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>Events & Gatherings</h1>
            <p>Join us in building resilient communities</p>
          </div>
        </section>

        <section className="events-section">
          <div className="container">
            <h2>Upcoming Events</h2>
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <article key={event.slug} className="event-card upcoming">
                  <div className="event-date-badge">
                    <span className="day">{new Date(event.date).getDate()}</span>
                    <span className="month">{new Date(event.date).toLocaleDateString('en-KE', { month: 'short' })}</span>
                  </div>
                  <div className="event-image">
                    <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="event-content">
                    <span className="event-type">{event.type}</span>
                    <h3><Link href={`/events/${event.slug}`}>{event.title}</Link></h3>
                    <div className="event-details">
                      <span>📅 {new Date(event.date).toLocaleDateString('en-KE', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>🕐 {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                    <p>{event.excerpt}</p>
                    <Link href={`/events/${event.slug}`} className="btn primary">Register Now</Link>
                  </div>
                </article>
              ))}
            </div>

            {pastEvents.length > 0 && (
              <>
                <h2 style={{marginTop: '3rem'}}>Past Events</h2>
                <div className="past-events-grid">
                  {pastEvents.map(event => (
                    <article key={event.slug} className="event-card past">
                      <div className="event-image-small">
                        <Image src={event.image} alt={event.title} fill sizes="200px" />
                      </div>
                      <div className="event-info">
                        <h4><Link href={`/events/${event.slug}`}>{event.title}</Link></h4>
                        <span className="event-date-small">{new Date(event.date).toLocaleDateString('en-KE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className="event-location-small">{event.location}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .events-section { padding: 3rem 0; background: #fafafa; }
        .events-section h2 { color: var(--earthy-green); margin-bottom: 2rem; }
        .events-grid { display: grid; gap: 2rem; }
        .event-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); position: relative; }
        .event-card.upcoming { display: grid; grid-template-columns: 200px 1fr; gap: 1.5rem; padding: 1.5rem; }
        .event-date-badge { position: absolute; top: 1rem; left: 1rem; background: var(--burnt-ochre); color: white; padding: 0.75rem; border-radius: 8px; text-align: center; z-index: 10; }
        .event-date-badge .day { display: block; font-size: 2rem; font-weight: 700; line-height: 1; }
        .event-date-badge .month { display: block; font-size: 0.9rem; text-transform: uppercase; }
        .event-image { position: relative; height: 200px; border-radius: 8px; overflow: hidden; }
        .event-content { display: flex; flex-direction: column; gap: 0.75rem; }
        .event-type { display: inline-block; background: rgba(59,107,55,0.1); color: var(--earthy-green); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600; width: fit-content; }
        .event-content h3 { margin: 0; font-size: 1.5rem; }
        .event-content h3 a { color: #1a1a1a; text-decoration: none; }
        .event-content h3 a:hover { color: var(--earthy-green); }
        .event-details { display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.9rem; color: #555; }
        .event-content p { color: #666; line-height: 1.6; }
        .past-events-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
        .event-card.past { display: flex; gap: 1rem; padding: 1rem; }
        .event-image-small { position: relative; width: 100px; height: 100px; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
        .event-info { display: flex; flex-direction: column; gap: 0.25rem; }
        .event-info h4 { margin: 0; font-size: 1.1rem; }
        .event-info h4 a { color: #1a1a1a; text-decoration: none; }
        .event-info h4 a:hover { color: var(--earthy-green); }
        .event-date-small, .event-location-small { font-size: 0.85rem; color: #666; }
        @media (max-width: 768px) {
          .event-card.upcoming { grid-template-columns: 1fr; }
          .event-image { height: 180px; }
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const events = await getEvents()
  const now = new Date()
  const upcomingEvents = events.filter(e => new Date(e.date) >= now)
  const pastEvents = events.filter(e => new Date(e.date) < now).slice(0, 6)
  return { props: { upcomingEvents, pastEvents } }
}
