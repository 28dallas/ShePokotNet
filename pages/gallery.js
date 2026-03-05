import { useState, useCallback, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Generate array of all 90 images from the public/new folder
  const galleryImages = Array.from({ length: 90 }, (_, i) => ({
    id: i + 1,
    src: `/new/photo_${i + 1}_2026-03-03_11-10-37.jpg`,
    alt: `She Pokot Network field work - Photo ${i + 1}`,
    category: 'community'
  }))

  const openLightbox = useCallback((image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }, [])

  const goToPrevious = useCallback(() => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const previousIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setSelectedImage(galleryImages[previousIndex])
  }, [selectedImage, galleryImages])

  const goToNext = useCallback(() => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
  }, [selectedImage, galleryImages])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }, [selectedImage, closeLightbox, goToPrevious, goToNext])

  // Attach keyboard listener when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage, handleKeyDown])

  return (
    <div>
      <SEO 
        title="Gallery"
        description="Visual stories from She Pokot Network's work in West Pokot County. See our community impact, field projects, and the people we serve."
        type="website"
      />

      <Header />
      <main id="main-content">
        {/* Gallery Hero Section */}
        <section className="gallery-hero" style={{backgroundImage: 'url(/new/photo_2026-02-28_05-47-56.jpg)'}}>
          <div className="gallery-hero-overlay"></div>
          <div className="gallery-hero-content">
            <h1>Our Gallery</h1>
            <p>Visual Stories from the Field — Community, Impact & Change</p>
          </div>
        </section>

        {/* Gallery Description */}
        <section className="gallery-intro">
          <div className="container">
            <h2>Snapshots of Impact</h2>
            <p>
              Every image tells a story of community resilience, local leadership, and transformation. 
              From environmental restoration to girls' empowerment initiatives, these photographs capture the heart of our work in West Pokot County.
            </p>
          </div>
        </section>

        {/* Main Gallery Grid */}
        <section className="gallery-section">
          <div className="container">
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="gallery-item"
                  onClick={() => openLightbox(image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openLightbox(image)
                    }
                  }}
                  aria-label={`Open ${image.alt}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-zoom-icon">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close" 
                onClick={closeLightbox}
                aria-label="Close image viewer"
                title="Close (Esc)"
              >
                ✕
              </button>

              <button 
                className="lightbox-nav lightbox-prev" 
                onClick={goToPrevious}
                aria-label="Previous image"
                title="Previous (←)"
              >
                ❮
              </button>

              <div className="lightbox-image-wrapper">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                />
              </div>

              <button 
                className="lightbox-nav lightbox-next" 
                onClick={goToNext}
                aria-label="Next image"
                title="Next (→)"
              >
                ❯
              </button>

              <div className="lightbox-info">
                <p className="lightbox-counter">
                  Image {selectedImage.id} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <section className="gallery-cta">
          <div className="container">
            <h2>Want to Learn More?</h2>
            <p>These images capture our work. Dive deeper into our mission and impact.</p>
            <div className="cta-buttons">
              <a href="/about" className="btn primary large">About Our Work</a>
              <a href="/programs" className="btn large">Explore Programs</a>
              <a href="/donate" className="btn primary large">Support Us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
