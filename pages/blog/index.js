import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getBlogPosts } from '../../lib/cms'

export default function Blog({ posts }) {
  const categories = ['All', 'Programs', 'Impact Stories', 'Climate Action', 'Community']
  
  return (
    <div>
      <Head>
        <title>Blog — She Pokot Network</title>
        <meta name="description" content="Stories, insights, and updates from She Pokot Network's work in West Pokot." />
      </Head>

      <Header />
      <main id="main-content">
        <section className="page-hero" style={{backgroundImage: 'url(/img/pexels-markusspiske-2990617.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>Our Blog</h1>
            <p>Stories, insights, and field updates from West Pokot</p>
          </div>
        </section>

        <section className="blog-section">
          <div className="container">
            <div className="blog-filters">
              {categories.map(cat => (
                <button key={cat} className="filter-btn">{cat}</button>
              ))}
            </div>

            <div className="blog-grid">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="blog-image-wrap">
                      <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                  </Link>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">{new Date(post.date).toLocaleDateString('en-KE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-footer">
                      <span className="blog-author">By {post.author}</span>
                      <Link href={`/blog/${post.slug}`} className="read-more">Read More →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .blog-section { padding: 3rem 0; background: #fafafa; }
        .blog-filters { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .filter-btn { padding: 0.5rem 1rem; border: 1px solid #ddd; background: white; border-radius: 20px; cursor: pointer; font-weight: 500; }
        .filter-btn:hover { background: var(--earthy-green); color: white; border-color: var(--earthy-green); }
        .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; }
        .blog-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); transition: transform 0.3s; }
        .blog-card:hover { transform: translateY(-4px); box-shadow: 0 4px 20px rgba(0,0,0,0.12); }
        .blog-image-wrap { position: relative; height: 220px; overflow: hidden; }
        .blog-content { padding: 1.5rem; }
        .blog-meta { display: flex; justify-content: space-between; margin-bottom: 0.75rem; font-size: 0.85rem; }
        .blog-category { background: rgba(59,107,55,0.1); color: var(--earthy-green); padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600; }
        .blog-date { color: #666; }
        .blog-card h3 { margin: 0 0 0.75rem; font-size: 1.25rem; line-height: 1.4; }
        .blog-card h3 a { color: #1a1a1a; text-decoration: none; }
        .blog-card h3 a:hover { color: var(--earthy-green); }
        .blog-card p { color: #555; line-height: 1.6; margin-bottom: 1rem; }
        .blog-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #eee; }
        .blog-author { font-size: 0.9rem; color: #666; }
        .read-more { color: var(--burnt-ochre); font-weight: 600; text-decoration: none; }
        .read-more:hover { text-decoration: underline; }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getBlogPosts()
  return { props: { posts } }
}
