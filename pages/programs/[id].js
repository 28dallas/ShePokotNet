import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'

const programDetails = {
  climate: {
    title: 'Climate Justice & Resilience',
    subtitle: 'We bridge the gap between indigenous knowledge and modern climate science',
    image: 'program-climate.jpg',
    description: 'Recurrent droughts threaten livelihoods in West Pokot. We combine drought adaptation, land restoration, sand dams, seedling nurseries, and community-led conservation to build ecosystem and community resilience.',
    keywords: 'Drought adaptation, land restoration, sand dams, seedling nurseries, community-led conservation',
    goal: 'To restore 10,000+ hectares of degraded land, plant 100,000 indigenous trees, and ensure 500+ households have climate adaptation strategies.',
    activities: [
      { title: 'Tree Planting Campaigns', desc: 'Community-led tree planting across West Pokot to restore degraded lands, combat climate change, and protect watersheds.' },
      { title: 'Soil & Water Conservation', desc: 'Training communities in conservation agriculture, water harvesting, and sand dam construction to improve productivity and resilience.' },
      { title: 'Drought Adaptation Strategies', desc: 'Early warning systems, diversified livelihoods, and adaptation strategies to help communities prepare for and respond to climate shocks.' },
      { title: 'Indigenous Knowledge', desc: 'Documenting and preserving traditional climate knowledge passed down through generations of pastoralist communities.' }
    ],
    impact: 'To date, we have planted over 850 indigenous trees, reached 200+ households with climate adaptation training, and preserved critical indigenous knowledge with community elders.',
    donors: 'Your support directly funds tree saplings, conservation training, community mobilization, and water infrastructure.'
  },
  girls: {
    title: 'Girls & Women Empowerment',
    subtitle: 'Breaking the cycle of poverty by protecting the rights of the girl child',
    image: 'program-women.jpg',
    description: 'In West Pokot, high rates of child marriage, FGM, and school dropout rob girls of their futures. We create safe spaces, provide mentorship, and advocate for girls\' rights through alternative rites of passage and education support.',
    keywords: 'Anti-FGM advocacy, alternative rites of passage, education scholarships, safe spaces for survivors',
    goal: 'To reach 1,200+ girls with mentorship, support 500+ women in leadership, and shift community attitudes on girls\' rights.',
    activities: [
      { title: 'Anti-FGM Advocacy', desc: 'Community dialogue, peer education campaigns, and alternative rites of passage to end Female Genital Mutilation and child marriage.' },
      { title: 'Mentorship Programs', desc: 'Connecting girls with role models and safe spaces for learning, healing, and peer support.' },
      { title: 'Education Scholarships', desc: 'Removing financial barriers by funding school fees, uniforms, and materials for vulnerable girls.' },
      { title: 'Leadership Training', desc: 'Building skills in public speaking, decision-making, and advocacy for girls and women to claim their voice.' }
    ],
    impact: 'We have reached 1,200+ girls with mentorship, supported 300+ women through advocacy campaigns, and helped shift attitudes in 50+ communities.',
    donors: 'Your support directly funds mentors, education scholarships, training materials, and safe spaces for girls.'
  },
  livelihoods: {
    title: 'Livelihoods & Village Savings & Loan Associations (VSLAs)',
    subtitle: 'Economic independence is the key to climate resilience',
    image: 'program-livelihoods.jpg',
    description: 'Women-led economic resilience is the foundation for climate adaptation. We support sustainable livelihoods through VSLAs, climate-smart agriculture, kitchen gardens, and green entrepreneurship.',
    keywords: 'Village Savings and Loan Associations (VSLA), climate-smart agriculture, kitchen gardens, green entrepreneurship',
    goal: 'To strengthen 45+ VSLAs with 1,200+ members, increase household incomes by 50%, and create 100+ green jobs.',
    activities: [
      { title: 'Climate-Smart Agriculture', desc: 'Training in sustainable farming practices, crop diversification, and agroforestry to increase yields while protecting the environment.' },
      { title: 'VSLA Formation & Strengthening', desc: 'Building women-led savings groups that enable financial inclusion, access to credit, and community support.' },
      { title: 'Kitchen Gardens & Horticulture', desc: 'Training in home gardening, tree nurseries, fruit production, and vegetable farming for nutrition and income.' },
      { title: 'Green Entrepreneurship', desc: 'Business training, market linkages, and coaching in beekeeping, craft production, and other income-generating activities.' }
    ],
    impact: 'We have formed 45 active VSLAs with 1,200+ members, increased average household income by 35%, and supported diverse income activities.',
    donors: 'Your support directly funds training, tools, seeds, and VSLA operations to build economic resilience.'
  }
}

export default function ProgramDetail() {
  const router = useRouter()
  const { id } = router.query
  const program = programDetails[id]

  if (!program) return <div className="container"><p>Program not found.</p></div>

  return (
    <div>
      <Head>
        <title>{program?.title} — She Pokot Network</title>
      </Head>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: `url(/img/${program?.image})`}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>{program?.title}</h1>
            <p>{program?.subtitle}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="program-overview">
          <div className="container">
            <div className="overview-layout">
              <div className="overview-text">
                <h2>Our Approach</h2>
                <p>{program?.description}</p>
                <h3>Program Goal</h3>
                <p>{program?.goal}</p>
              </div>
              <div className="overview-image">
                <img src={`/img/${program?.image}`} alt={program?.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="program-activities">
          <div className="container">
            <h2>What We Do</h2>
            <div className="activities-grid">
              {program?.activities.map((activity, i) => (
                <div key={i} className="activity-card">
                  <div className="activity-number">{i + 1}</div>
                  <h3>{activity.title}</h3>
                  <p>{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="program-impact-detail">
          <div className="container">
            <div className="impact-layout">
              <div className="impact-image">
                <img src={`/img/${program?.image}`} alt={program?.title} />
              </div>
              <div className="impact-text">
                <h2>Real Impact</h2>
                <p>{program?.impact}</p>
                <h3>How You Can Help</h3>
                <p>{program?.donors}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="program-cta">
          <div className="container">
            <h2>Support This Program</h2>
            <p>Your contribution creates lasting change. Every donation helps us scale impact and empower more communities.</p>
            <div className="cta-buttons">
              <a className="btn primary large" href="/donate">Donate Now</a>
              <a className="btn large" href="/programs">See Other Programs</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
