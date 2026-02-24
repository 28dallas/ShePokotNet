import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { t } from '../lib/i18n'

export default function Impact() {
  const router = useRouter()
  const { locale = 'en' } = router.query
  const tr = (key) => t(locale, key)

  const stories = [
    {
      name: 'Asha',
      village: 'Kacheliba Sub-County',
      relationship: 'Mother of five',
      story: 'Before She Pokot Network, Asha lost her cattle to back-to-back droughts. With no income and three children in school, she was trapped. Today, she leads a thriving VSLA with 18 women, practices climate-smart agriculture on her quarter-acre, and has grown three fruit trees. Her household income increased 40% in two years.',
      rippleEffect: 'Five other women in her group now have income-generating activities. Three of those women\'s daughters stayed in school instead of being married off.',
      image: 'asha.jpg'
    },
    {
      name: 'Grace',
      village: 'Masool',
      relationship: 'Youth leader and mentor',
      story: 'Growing up in Masool, Grace experienced high rates of child marriage and FGM firsthand. At 15, she was headed down that path. She participated in our mentorship program and discovered her voice. Today, she advocates against FGM in community gatherings and personally mentors 25 girls in her school.',
      rippleEffect: 'Three girls who she mentored have gone on to secondary school. Her work has contributed to shifting attitudes—the local chief now openly opposes FGM.',
      image: 'grace.jpg'
    },
    {
      name: 'The Community',
      village: 'Across West Pokot',
      relationship: 'Collective transformation',
      story: 'West Pokot faces recurrent droughts, gender-based violence, and limited economic opportunity. Families lose livestock to climate shocks. Girls drop out of school. Women have few income options. Through our integrated programs—land restoration, VSLA formation, girls\' advocacy, and climate adaptation training—we\'re building resilience.',
      rippleEffect: 'When one woman succeeds through a VSLA, her sisters join. When one girl is protected, entire families learn to value girls\' rights. When one community plants trees, neighboring communities follow. The transformation spreads in ripples.',
      image: 'community.jpg'
    }
  ]

  return (
    <div>
      <Head>
        <title>{tr('impact')} — She Pokot Network</title>
        <meta name="description" content="Real stories of change and impact from She Pokot Network." />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{backgroundImage: 'url(/img/grace.jpg)'}}>
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <h1>Stories of Transformation</h1>
            <p>Real women, real change, real impact</p>
          </div>
        </section>

        {/* Impact Intro */}
        <section className="impact-intro">
          <div className="container">
            <h2>Real Change, Real Stories</h2>
            <p>These are the stories of women and communities whose lives have been transformed by She Pokot Network's work. They represent thousands more making progress toward climate resilience, dignity, and opportunity.</p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="stories-section">
          <div className="container">
            <div className="stories-grid-large">
              {stories.map((story, i) => (
                <div key={i} className="story-card-featured">
                  <div className="story-image-wrapper">
                    <img src={`/img/${story.image}`} alt={story.name} />
                  </div>
                  <div className="story-content">
                    <p className="story-intro"><strong>Meet {story.name},</strong> {story.relationship} in {story.village}.</p>
                    <div className="story-narrative">
                      <p>{story.story}</p>
                    </div>
                    <div className="ripple-effect">
                      <h4>The Ripple Effect</h4>
                      <p>{story.rippleEffect}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="impact-stats-section">
          <div className="container">
            <h2>Collective Impact by the Numbers</h2>
            <div className="impact-numbers">
              <div className="number-item">
                <div className="number">850+</div>
                <p>Trees Grown & Protected</p>
              </div>
              <div className="number-item">
                <div className="number">1,200+</div>
                <p>Girls Mentored & Kept in School</p>
              </div>
              <div className="number-item">
                <div className="number">45+</div>
                <p>Women-Led Savings Groups (VSLAs)</p>
              </div>
              <div className="number-item">
                <div className="number">10K+</div>
                <p>Lives Touched</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="impact-cta">
          <div className="container">
            <h2>Support More Stories Like These</h2>
            <p>Your donation directly enables us to reach more women, restore more land, and create more transformation.</p>
            <div className="cta-buttons">
              <a className="btn primary large" href="/donate">Donate Now</a>
              <a className="btn large" href="/programs">Learn About Our Programs</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
