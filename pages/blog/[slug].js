import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getBlogPosts, getBlogPostBySlug } from '../../lib/cms'

export default function BlogPost({ post, relatedPosts }) {
  return (
    <div>
      <Head>
        <title>{post.title} — She Pokot Network</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Header />
      <main id="main-content">
        <article className="blog-post">
          <div className="post-hero">
            <Image src={post.image} alt={post.title} fill priority style={{objectFit: 'cover'}} />
            <div className="post-hero-overlay"></div>
          </div>
          
          <div className="container">
            <div className="post-header">
              <span className="post-category">{post.category}</span>
              <h1>{post.title}</h1>
              <div className="post-meta">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('en-KE', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime || '5 min read'}</span>
              </div>
            </div>

            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="post-share">
              <h4>Share this story</h4>
              <div className="share-buttons">
                <button className="share-btn facebook">Facebook</button>
                <button className="share-btn twitter">Twitter</button>
                <button className="share-btn linkedin">LinkedIn</button>
                <button className="share-btn whatsapp">WhatsApp</button>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="related-posts">
                <h3>Related Stories</h3>
                <div className="related-grid">
                  {relatedPosts.map(related => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="related-card">
                      <div className="related-image">
                        <Image src={related.image} alt={related.title} fill sizes="300px" />
                      </div>
                      <h4>{related.title}</h4>
                      <span>{new Date(related.date).toLocaleDateString('en-KE', { month: 'short', day: 'numeric' })}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />

      <style jsx>{`
        .post-hero { position: relative; height: 400px; margin-bottom: 3rem; }
        .post-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%); }
        .post-header { max-width: 800px; margin: 0 auto 2rem; text-align: center; }
        .post-category { display: inline-block; background: var(--earthy-green); color: white; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
        .post-header h1 { font-size: 2.5rem; margin: 0 0 1rem; line-height: 1.2; }
        .post-meta { display: flex; gap: 0.5rem; justify-content: center; color: #666; font-size: 0.9rem; }
        .post-content { max-width: 800px; margin: 0 auto 3rem; font-size: 1.1rem; line-height: 1.8; color: #333; }
        .post-content :global(h2) { margin: 2rem 0 1rem; font-size: 1.8rem; color: var(--earthy-green); }
        .post-content :global(h3) { margin: 1.5rem 0 0.75rem; font-size: 1.4rem; }
        .post-content :global(p) { margin-bottom: 1.5rem; }
        .post-content :global(img) { max-width: 100%; height: auto; border-radius: 8px; margin: 2rem 0; }
        .post-share { max-width: 800px; margin: 0 auto 3rem; padding: 2rem; background: #f8f8f8; border-radius: 12px; text-align: center; }
        .post-share h4 { margin: 0 0 1rem; }
        .share-buttons { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        .share-btn { padding: 0.6rem 1.2rem; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; color: white; }
        .share-btn.facebook { background: #1877f2; }
        .share-btn.twitter { background: #1da1f2; }
        .share-btn.linkedin { background: #0a66c2; }
        .share-btn.whatsapp { background: #25d366; }
        .related-posts { max-width: 1000px; margin: 0 auto 3rem; }
        .related-posts h3 { margin-bottom: 1.5rem; text-align: center; }
        .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .related-card { display: block; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-decoration: none; transition: transform 0.3s; }
        .related-card:hover { transform: translateY(-4px); }
        .related-image { position: relative; height: 180px; }
        .related-card h4 { padding: 1rem 1rem 0.5rem; margin: 0; color: #1a1a1a; font-size: 1.1rem; }
        .related-card span { display: block; padding: 0 1rem 1rem; color: #666; font-size: 0.85rem; }
        @media (max-width: 768px) {
          .post-hero { height: 300px; }
          .post-header h1 { font-size: 1.8rem; }
          .post-content { font-size: 1rem; }
        }
      `}</style>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getBlogPosts()
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug(params.slug)
  const allPosts = await getBlogPosts()
  const relatedPosts = allPosts.filter(p => p.slug !== params.slug && p.category === post.category).slice(0, 3)
  return { props: { post, relatedPosts } }
}
