export default function Sitemap() {
  const baseUrl = 'https://shepokot.org'
  const routes = [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/about', changefreq: 'monthly', priority: 0.8 },
    { path: '/programs', changefreq: 'monthly', priority: 0.8 },
    { path: '/programs/climate', changefreq: 'monthly', priority: 0.7 },
    { path: '/programs/girls', changefreq: 'monthly', priority: 0.7 },
    { path: '/programs/livelihoods', changefreq: 'monthly', priority: 0.7 },
    { path: '/impact', changefreq: 'monthly', priority: 0.8 },
    { path: '/news', changefreq: 'weekly', priority: 0.7 },
    { path: '/transparency', changefreq: 'monthly', priority: 0.8 },
    { path: '/donate', changefreq: 'monthly', priority: 0.9 },
    { path: '/contact', changefreq: 'monthly', priority: 0.7 },
    { path: '/privacy', changefreq: 'yearly', priority: 0.5 },
    { path: '/cookies', changefreq: 'yearly', priority: 0.5 },
    { path: '/terms', changefreq: 'yearly', priority: 0.5 },
    { path: '/safeguarding', changefreq: 'yearly', priority: 0.6 },
    { path: '/accessibility', changefreq: 'yearly', priority: 0.4 }
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return xml
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.write(Sitemap())
  res.end()
  return { props: {} }
}
