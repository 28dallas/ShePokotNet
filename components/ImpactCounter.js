import { useState, useEffect, useRef } from 'react'

export default function ImpactCounter({ 
  stats = [],
  duration = 2000,
  prefix = '',
  suffix = '+'
}) {
  return (
    <div className="impact-stats" role="region" aria-label="Impact statistics">
      <div className="container">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <CounterCard 
              key={index}
              target={stat.target}
              label={stat.label}
              color={stat.color}
              prefix={prefix}
              suffix={suffix}
              duration={duration}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .impact-stats {
          background: white;
          padding: 4rem 0;
          margin: 0;
        }

        .impact-stats h2 {
          text-align: center;
          color: var(--earthy-green);
          font-size: 2rem;
          margin-bottom: 3rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

function CounterCard({ target, label, color = '#3B6B37', prefix = '', suffix = '+', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(easeOutQuart * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, target, duration])

  const displayNumber = prefix + count.toLocaleString() + (count >= target ? suffix : '')

  return (
    <div 
      ref={ref} 
      className="stat-card"
      style={{ borderTopColor: color }}
      role="statistic"
      aria-label={`${label}: ${displayNumber}`}
    >
      <div className="stat-number" style={{ color: color }}>
        {displayNumber}
      </div>
      <div className="stat-label">{label}</div>

      <style jsx>{`
        .stat-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-top: 5px solid var(--earthy-green);
          padding: 2rem;
          text-align: center;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--earthy-green);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #666;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

