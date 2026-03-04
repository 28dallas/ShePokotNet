const mockBlogPosts = [
  {
    slug: 'climate-resilience-west-pokot',
    title: 'Building Climate Resilience in West Pokot',
    excerpt: 'How communities are adapting to climate challenges through local action.',
    content: '<p>Communities across West Pokot are taking action to build resilience against climate challenges.</p>',
    category: 'Climate Action',
    author: 'She Pokot Team',
    date: '2026-02-15',
    image: '/img/pexels-markusspiske-2990617.jpg',
    readTime: '5 min read'
  },
  {
    slug: 'girls-education-progress',
    title: 'Progress in Girls Education',
    excerpt: 'Supporting girls to stay in school and pursue their dreams.',
    content: '<p>Our education programs are helping more girls complete their studies.</p>',
    category: 'Programs',
    author: 'She Pokot Team',
    date: '2026-02-01',
    image: '/img/photo_2026-02-27_08-12-17.jpg',
    readTime: '4 min read'
  }
]

const mockEvents = [
  {
    slug: 'community-dialogue-march',
    title: 'Community Dialogue on Girls Rights',
    excerpt: 'Join us for an open dialogue on protecting girls rights and ending harmful practices.',
    content: '<p>This community dialogue brings together leaders, parents, and youth to discuss girls rights.</p>',
    type: 'Workshop',
    date: '2026-03-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Kapenguria Community Center',
    image: '/img/photo_2026-02-27_08-12-17.jpg',
    capacity: '50 participants',
    cost: 'Free',
    language: 'English & Swahili'
  },
  {
    slug: 'climate-action-training',
    title: 'Climate Action Training Workshop',
    excerpt: 'Learn practical climate adaptation strategies for your community.',
    content: '<p>Hands-on training in climate resilience and sustainable practices.</p>',
    type: 'Training',
    date: '2026-04-10',
    time: '9:00 AM - 4:00 PM',
    location: 'West Pokot County',
    image: '/img/pexels-markusspiske-2990650.jpg',
    capacity: '30 participants',
    cost: 'Free',
    language: 'English & Swahili'
  }
]

const mockImpactStories = [
  {
    id: 'grace-mentor-story',
    title: 'Grace Builds Safe Spaces for Girls',
    person: 'Grace',
    role: 'Youth mentor',
    location: 'Masool, West Pokot',
    category: 'Girls & Women',
    publishedAt: '2026-02-10',
    image: '/img/photo_2026-02-27_08-12-26.jpg',
    imageAlt: 'Grace facilitating a girls mentorship conversation',
    summary:
      'Grace helps girls speak up about education, safety, and leadership through peer mentorship sessions.',
    outcome:
      'Parents, school leaders, and local youth groups are engaging in more open dialogue on girls rights.'
  },
  {
    id: 'asha-livelihood-story',
    title: 'Asha Strengthens Household Resilience',
    person: 'Asha',
    role: 'Community participant',
    location: 'Kacheliba, West Pokot',
    category: 'Livelihoods',
    publishedAt: '2026-01-30',
    image: '/img/photo_2026-02-27_08-12-13.jpg',
    imageAlt: 'Asha in a community livelihood activity',
    summary:
      'Asha joined women-led savings and livelihood activities to stabilize household planning during climate stress.',
    outcome:
      'Her group is coordinating practical savings habits and income activities with growing confidence.'
  },
  {
    id: 'community-climate-story',
    title: 'Communities Organize for Climate Action',
    person: 'Community Leaders',
    role: 'Local organizers',
    location: 'West Pokot County',
    category: 'Climate Action',
    publishedAt: '2026-01-15',
    image: '/img/pexels-markusspiske-2990650.jpg',
    imageAlt: 'Community members gathered during local climate action planning',
    summary:
      'Women and youth leaders are coordinating local restoration and climate adaptation planning sessions.',
    outcome:
      'Shared planning and local ownership are improving participation in climate resilience activities.'
  }
]

export async function getImpactStoriesFromCMS() {
  const useSanity = process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET
  if (!useSanity) return mockImpactStories

  try {
    const stories = await fetchImpactStoriesFromSanity()
    if (!stories.length) return mockImpactStories
    return stories
  } catch (err) {
    console.warn('Sanity fetch failed, using mock impact stories:', err.message)
    return mockImpactStories
  }
}

const mockNewsPosts = [
  {
    id: 'climate-action-expanded',
    title: 'Climate Action Activities Expanded in January',
    date: '2026-02-10',
    excerpt:
      'Community mobilization expanded participation in local restoration and climate-resilience activities.',
    category: 'Climate Action',
    image: '/img/pexels-markusspiske-2990617.jpg',
    imageAlt: 'Community climate restoration activity in West Pokot'
  },
  {
    id: 'vsla-mobilization-expands',
    title: 'VSLA Mobilization Expands Across Partner Communities',
    date: '2026-01-30',
    excerpt:
      'Village Savings and Loan Association support activities are expanding to strengthen women-led household resilience.',
    category: 'Livelihoods',
    image: '/img/photo_2026-02-27_08-12-13.jpg',
    imageAlt: 'Community livelihoods and savings group activity'
  },
  {
    id: 'anti-fgm-campaign-launches',
    title: 'Anti-FGM Advocacy Campaign Launches',
    date: '2026-01-15',
    excerpt:
      'A new community dialogue series aims to end harmful practices while honoring cultural identity and dignity.',
    category: 'Girls & Women',
    image: '/img/photo_2026-02-27_08-12-17.jpg',
    imageAlt: 'Women and girls in a community advocacy event'
  }
]

export async function getNewsPostsFromCMS() {
  const useSanity = process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET
  if (!useSanity) return mockNewsPosts

  try {
    const posts = await fetchNewsPostsFromSanity()
    if (!posts.length) return mockNewsPosts
    return posts
  } catch (err) {
    console.warn('Sanity fetch failed, using mock news posts:', err.message)
    return mockNewsPosts
  }
}

async function fetchImpactStoriesFromSanity() {
  let createClient
  let imageUrlBuilder
  try {
    const importModule = new Function('m', 'return import(m)')
    ;({ createClient } = await importModule('@sanity/client'))
    ;({ default: imageUrlBuilder } = await importModule('@sanity/image-url'))
  } catch {
    throw new Error('Install @sanity/client and @sanity/image-url to use Sanity CMS.')
  }

  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
    useCdn: process.env.SANITY_USE_CDN !== 'false',
    token: process.env.SANITY_TOKEN || undefined
  })

  const builder = imageUrlBuilder(client)
  const query = `*[_type == "impactStory" && status == "published"] | order(publishedAt desc) {
    "id": coalesce(slug.current, _id),
    title,
    person,
    role,
    location,
    category,
    publishedAt,
    summary,
    outcome,
    image,
    imageAlt
  }`

  const result = await client.fetch(query)
  return result.map((item) => normalizeSanityStory(item, builder))
}

async function fetchNewsPostsFromSanity() {
  let createClient
  let imageUrlBuilder
  try {
    const importModule = new Function('m', 'return import(m)')
    ;({ createClient } = await importModule('@sanity/client'))
    ;({ default: imageUrlBuilder } = await importModule('@sanity/image-url'))
  } catch {
    throw new Error('Install @sanity/client and @sanity/image-url to use Sanity CMS.')
  }

  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
    useCdn: process.env.SANITY_USE_CDN !== 'false',
    token: process.env.SANITY_TOKEN || undefined
  })

  const builder = imageUrlBuilder(client)
  const query = `*[_type == "newsPost" && status == "published"] | order(publishedAt desc) {
    "id": coalesce(slug.current, _id),
    title,
    category,
    "date": publishedAt,
    "excerpt": coalesce(excerpt, ""),
    image,
    imageAlt
  }`

  const result = await client.fetch(query)
  return result.map((item) => normalizeSanityNewsPost(item, builder))
}

function normalizeSanityStory(item, builder) {
  const imageRef = item?.image
  const sanityImageUrl = imageRef ? builder.image(imageRef).width(1400).height(900).fit('crop').url() : '/img/photo_2026-02-27_08-12-25.jpg'

  return {
    id: item?.id || `story-${Date.now()}`,
    title: item?.title || 'Impact Story',
    person: item?.person || 'Community Member',
    role: item?.role || 'Participant',
    location: item?.location || 'West Pokot County',
    category: item?.category || 'Community Impact',
    publishedAt: item?.publishedAt || new Date().toISOString(),
    image: sanityImageUrl,
    imageAlt: item?.imageAlt || item?.title || 'Impact story image',
    summary: item?.summary || 'Story summary coming soon.',
    outcome: item?.outcome || 'Outcome details coming soon.'
  }
}

function normalizeSanityNewsPost(item, builder) {
  const imageRef = item?.image
  const sanityImageUrl = imageRef ? builder.image(imageRef).width(1400).height(900).fit('crop').url() : '/img/pexels-markusspiske-2990617.jpg'

  return {
    id: item?.id || `post-${Date.now()}`,
    title: item?.title || 'News Update',
    date: item?.date || new Date().toISOString(),
    excerpt: item?.excerpt || 'Update summary coming soon.',
    category: item?.category || 'Organization',
    image: sanityImageUrl,
    imageAlt: item?.imageAlt || item?.title || 'News cover image'
  }
}

export async function getBlogPosts() {
  return mockBlogPosts
}

export async function getBlogPostBySlug(slug) {
  return mockBlogPosts.find(post => post.slug === slug) || mockBlogPosts[0]
}

export async function getEvents() {
  return mockEvents
}

export async function getEventBySlug(slug) {
  return mockEvents.find(event => event.slug === slug) || mockEvents[0]
}
