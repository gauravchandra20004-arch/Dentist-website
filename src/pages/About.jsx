import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaCheckCircle, FaAward, FaUserMd, FaTooth, FaHeart,
  FaShieldAlt, FaClock, FaPhoneAlt, FaCalendarCheck, FaGraduationCap,
  FaCertificate, FaHandHoldingMedical, FaStar
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const About = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Page Header with Clinic Background Image */}
      <div className="page-header about-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="page-header-badge">
            <span className="badge-dot"></span>
            <span>4.9★ Google Rated Dental Care • Motihari</span>
          </div>
          <h1>About Nirmala Dental Care</h1>
          <p>
            Dedicated to gentle, precise, and advanced dental healthcare in Motihari. Led by Dr. Amit Kumar (BDS) with a focus on patient comfort, transparent advice, and sterile treatment protocols.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection direction="left">
              <div className="about-image">
                <div className="image-box">
                  <img src="/images/clinic.jpg" alt="Nirmala Dental Care Motihari" />
                </div>
                <div className="experience-badge">
                  <h3>4.9★</h3>
                  <p>Google Rating</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="about-content">
                <span className="section-subtitle">Our Story</span>
                <h2 className="section-title">
                  Motihari's Most Trusted <span>Dental Practice</span>
                </h2>
                <p className="about-text">
                  <strong>Nirmala Dental Care</strong> (Nirmala Oro Dental Clinic) is a premier dental healthcare center situated on Hospital Road, Near Tribhuwan Janch Ghar, Gyan Babu Chowk, Sri Krishna Nagar, Motihari. We have earned a 4.9★ rating on Google based on hundreds of satisfied patient reviews across East Champaran.
                </p>
                <p className="about-text">
                  Our mission is to provide world-class, painless oral healthcare accessible to everyone in Champaran. We combine modern rotary instruments, digital intraoral diagnostics, and strict Class-B autoclave sterilization to guarantee 100% hygiene.
                </p>
                <p className="about-text">
                  Led by <strong>Dr. Amit Kumar (BDS)</strong> (along with Dr. Shweta), our clinic is renowned for our polite and patient-first approach, where every patient receives a clear, honest diagnosis with zero unnecessary procedures or hidden charges.
                </p>

                <div className="about-features">
                  <div className="about-feature">
                    <div className="feature-icon"><FaCheckCircle /></div>
                    <span>Modern Rotary Equipment</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-icon"><FaCheckCircle /></div>
                    <span>Class-B Sterilized Clinic</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-icon"><FaCheckCircle /></div>
                    <span>Polite & Attentive Doctors</span>
                  </div>
                  <div className="about-feature">
                    <div className="feature-icon"><FaCheckCircle /></div>
                    <span>100% Painless Treatment</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="section doctor-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header text-center">
              <span className="section-subtitle">Meet Our Dental Surgeon</span>
              <h2 className="section-title">
                Meet <span>Dr. Amit Kumar</span>
              </h2>
              <div className="title-line"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doctor-card">
              <div className="doctor-image">
                <img src="/images/doctor.jpg" alt="Dr. Amit Kumar BDS Dentist Motihari" />
              </div>
              <div className="doctor-info">
                <h2>Dr. Amit Kumar</h2>
                <p className="degree">BDS (Bachelor of Dental Surgery)</p>
                <p className="speciality">Senior Dental Surgeon & Specialist • Nirmala Dental Care</p>
                <p className="bio">
                  Dr. Amit Kumar is one of Motihari’s most highly praised dental surgeons, known throughout East Champaran for his polite bedside manner, patient listening, and clinical precision in single-sitting root canal treatments, wisdom tooth extractions, and aesthetic restorations.
                </p>
                <p className="bio">
                  Patients consistently highlight how comfortably he explains every step of the dental procedure before starting, eliminating anxiety and fear. Together with Dr. Shweta, they maintain an uncompromising standard of hygiene and sterilization.
                </p>
                <div className="doctor-qualifications">
                  <span><FaGraduationCap /> BDS Dental Surgeon</span>
                  <span><FaStar /> 4.9★ Google Rated</span>
                  <span><FaAward /> 5,000+ Smiles Treated</span>
                  <span><FaHandHoldingMedical /> Painless Care Expert</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <div className="container">
          <div className="counter-grid">
            <AnimatedSection delay={0}>
              <div className="counter-item">
                <h3>10+</h3>
                <p>Years Clinical Practice</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="counter-item">
                <h3>5,000+</h3>
                <p>Happy Patients</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="counter-item">
                <h3>4.9★</h3>
                <p>Google Verified Rating</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="counter-item">
                <h3>300+</h3>
                <p>5-Star Reviews</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-content">
              <h2>Schedule Your Visit with Dr. Amit Kumar</h2>
              <p>Experience the difference of compassionate, polite, and expert dental care in Motihari.</p>
              <div className="cta-buttons">
                <a href="tel:+919122909121" className="btn-white">
                  <FaPhoneAlt /> +91 91229 09121
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  <FaCalendarCheck /> Book Online
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}

export default About
