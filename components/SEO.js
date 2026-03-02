import Head from 'next/head'

export default function SEO({ 
  title = 'She Pokot Network',
  description = 'Empowering women and girls in West Pokot, Kenya through climate justice, education, and economic empowerment.',
  image = '/img/hero-01.jpg',
  url = '',
  type = 'website',
  author = '',
  publishedTime = '',
  modifiedTime = '',
  schema = null
}) {
  const siteName = 'She Pokot Network'
  const twitterHandle = '@shepokot'
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shepokot.org'
  const canonicalUrl = url || baseUrl
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`
  
  // Default organization schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "She Pokot Network",
    "description": "A grassroots women-led organization advancing climate justice and dignity for girls and women in pastoralist communities of West Pokot County, Kenya.",
    "url": "https://shepokot.org",
    "logo": "https://shepokot.org/img/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kapenguria",
      "addressRegion": "West Pokot County",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiries",
      "email": "info@shepokot.org",
      "telephone": "+254700000000"
    },
    "sameAs": [
      "https://facebook.com/shepokot",
      "https://twitter.com/shepokot",
      "https://instagram.com/shepokot"
    ]
  }

  const finalSchema = schema || defaultSchema

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title} | {siteName}</title>
      <meta name="title" content={`${title} | ${siteName}`} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Article specific OG tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={`${title} | ${siteName}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:site" content={twitterHandle} />
      <meta property="twitter:creator" content={twitterHandle} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
      />

      {/* Favicon */}
      <link rel="icon" href="/img/logo.png" sizes="any" />
      <link rel="apple-touch-icon" href="/img/logo.png" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#3B6B37" />
    </Head>
  )
}
