import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const Gallery = () => {
  const galleryItems = [
    { image: '/images/reception.jpg', title: 'Clinic Reception & Waiting Lounge', category: 'Infrastructure' },
    { image: '/images/clinic.jpg', title: 'Advanced Dental Operatory Room', category: 'Operatory' },
    { image: '/images/doctor.jpg', title: 'Dr. Amit Kumar (BDS Dental Surgeon)', category: 'Our Doctor' },
    { image: '/images/root-canal.jpg', title: 'Painless Rotary Endodontics (RCT)', category: 'Treatments' },
    { image: '/images/laser.jpg', title: 'High-Tech Laser Dentistry Unit', category: 'Technology' },
    { image: '/images/xray.jpg', title: 'Digital RVG Diagnostic X-Ray', category: 'Diagnostics' },
    { image: '/images/sterilization.jpg', title: 'Autoclave Instrument Sterilization', category: 'Hygiene' },
    { image: '/images/whitening.jpg', title: 'Teeth Whitening Sparkle Results', category: 'Cosmetic' },
    { image: '/images/braces.jpg', title: 'Clear Aligners & Invisible Braces', category: 'Orthodontics' },
    { image: '/images/implants.jpg', title: 'Titanium Dental Implants', category: 'Prosthetics' },
    { image: '/images/hero.jpg', title: 'Modern Clinic Infrastructure', category: 'Infrastructure' },
  ]

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Page Header with Reception Background Image */}
      <div className="page-header gallery-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="page-header-badge">
            <span className="badge-dot"></span>
            <span>Virtual Clinic Tour • Hospital Road, Motihari</span>
          </div>
          <h1>Our Clinic & Treatment Gallery</h1>
          <p>
            Explore our state-of-the-art operatory rooms, reception lounge, digital RVG radiography, and hospital-grade autoclave sterilization units.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </motion.div>
      </div>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-subtitle">Visual Tour</span>
              <h2 className="section-title">
                Clinic & Treatment <span>Gallery</span>
              </h2>
              <p className="section-desc">
                Explore our modern facilities, advanced equipment, and the comfortable environment we provide for every patient in Motihari.
              </p>
              <div className="title-line"></div>
            </div>
          </AnimatedSection>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="gallery-item">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <div>
                      <h4>{item.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}>{item.category}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-content">
              <h2>Visit Our Clinic Today</h2>
              <p>Experience our world-class facilities and compassionate dental care in person.</p>
              <div className="cta-buttons">
                <a href="tel:+919122909121" className="btn-white">
                  <FaPhoneAlt /> +91 91229 09121
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  <FaCalendarCheck /> Book Visit
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}

export default Gallery
