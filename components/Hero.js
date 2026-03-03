import { useState } from 'react'
import Link from 'next/link'

export default function Hero({ 
  title = "Empowering Women. Restoring Land. Transforming Futures.",
  subtitle = "She Pokot Network supports women and girls in West Pokot through entrepreneurship,livelihoods, and community-driven development  because dignified work changes everything.",
  videoUrl = null, // Add video URL when available
  backgroundImage = "/img/photo_2026-02-27_08-12-27.jpg",
  ctaPrimary = { text: "Donate Now", link: "/donate" },
  ctaSecondary = { text: "Our Programs", link: "/programs" }
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoClick = () => {
    if (videoUrl) {
      setIsVideoPlaying(true)
    }
  }

  return (
    <section className="hero" role="banner">
      {/* Background Image or Video */}
      <div className="hero-media">
        {videoUrl ? (
          <>
            {!isVideoPlaying ? (
              <>
                <img 
                  src={backgroundImage} 
                  alt="She Pokot Network - Community empowerment" 
                  className="hero-bg"
                  priority="true"
                />
                <button 
                  className="video-play-button" 
                  onClick={handleVideoClick}
                  aria-label="Play video about She Pokot Network"
                >
                  <span className="play-icon">▶</span>
                  <span className="play-text">Watch Our Story</span>
                </button>
              </>
            ) : (
              <video 
                className="hero-video"
                autoPlay 
                muted 
                loop 
                playsInline
                controls
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </>
        ) : (
          <img 
            src={backgroundImage} 
            alt="She Pokot Network - Community empowerment" 
            className="hero-bg"
            priority="true"
          />
        )}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>{title}</h1>
            <p className="hero-tagline">{subtitle}</p>
          </div>
          
          <div className="hero-ctas">
            <Link href={ctaPrimary.link} className="btn primary large">
              {ctaPrimary.text}
            </Link>
            <Link href={ctaSecondary.link} className="btn large">
              {ctaSecondary.text}
            </Link>
          </div>

          {/* Quick Impact Stats */}
          <div className="hero-stats" aria-label="Impact statistics">
            <div className="hero-stat">
              <span className="stat-number">Registered</span>
              <span className="stat-label">CBO in West Pokot</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Core Programs</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">Women-Led</span>
              <span className="stat-label">Community Approach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-arrow">↓</span>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 0;
        }

        .hero-media {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.45) 50%,
            rgba(0, 0, 0, 0.55) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 2rem 0;
        }

        .hero-text {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .hero-content h1 {
          color: white;
          font-size: clamp(1.8rem, 4.5vw, 3rem);
          margin: 0 0 1rem;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
          line-height: 1.2;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 700;
        }

        .hero-tagline {
          color: rgba(255, 255, 255, 0.95);
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          margin: 0 0 2rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          font-weight: 400;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          padding: 1.25rem 2rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          max-width: fit-content;
          margin: 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-stat .stat-number {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.2rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        }

        .hero-stat .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        }

        .video-play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 120px;
          height: 120px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .video-play-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-icon {
          font-size: 2.5rem;
          color: white;
        }

        .play-text {
          font-size: 0.85rem;
          color: white;
          font-weight: 600;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          animation: bounce 2s infinite;
        }

        .scroll-arrow {
          display: block;
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 600px;
          }
          
          .hero-stats {
            gap: 1.5rem;
            padding: 1rem 1.5rem;
          }
          
          .hero-stat .stat-number {
            font-size: 1.5rem;
          }
          
          .hero-stat .stat-label {
            font-size: 0.75rem;
          }
          
          .video-play-button {
            width: 80px;
            height: 80px;
          }
          
          .play-icon {
            font-size: 1.75rem;
          }
          
          .play-text {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
