import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaWhatsapp, FaCalendarCheck, FaPaperPlane, FaCheckCircle,
  FaShieldAlt, FaDirections, FaCarAlt, FaHospital, FaTooth
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    service: 'Root Canal Treatment (RCT)',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      alert('Please fill your name and contact phone number.')
      return
    }

    const message = `Namaste Dr. Amit Kumar, I would like to book an appointment at Nirmala Dental Care.%0A%0A*Patient Name:* ${encodeURIComponent(formData.name)}%0A*Phone Number:* ${encodeURIComponent(formData.phone)}%0A*Treatment Required:* ${encodeURIComponent(formData.service)}%0A*Preferred Date:* ${encodeURIComponent(formData.date || 'Earliest Slot')}%0A*Preferred Time:* ${encodeURIComponent(formData.time)}%0A*Notes/Concern:* ${encodeURIComponent(formData.message || 'None')}%0A%0APlease confirm my appointment slot.`
    
    const whatsappUrl = `https://wa.me/919122909121?text=${message}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactCards = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Clinic Location',
      info: 'Hospital Road, Near Tribhuwan Janch Ghar, Gyan Babu Chowk, Sri Krishna Nagar, Motihari, Bihar - 845401',
      subInfo: 'Near Saphi Devi Mandir (Gali No. 6)',
      actionText: 'View on Google Maps',
      link: 'https://maps.google.com/?q=Hospital+Road+Motihari+Bihar'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Call Direct Helpline',
      info: '+91 91229 09121',
      subInfo: 'Available Mon–Sat 10:00 AM – 8:30 PM',
      actionText: 'Call Now',
      link: 'tel:+919122909121'
    },
    {
      icon: <FaWhatsapp />,
      title: 'Instant WhatsApp Chat',
      info: '+91 91229 09121',
      subInfo: 'Quick appointment & report review',
      actionText: 'Chat on WhatsApp',
      link: 'https://wa.me/919122909121?text=Namaste%20Dr.%20Amit%20Kumar%2C%20I%20have%20an%20enquiry%20regarding%20dental%20treatment.'
    },
    {
      icon: <FaClock />,
      title: 'OPD Consultation Hours',
      info: 'Mon - Sat: 10:00 AM – 8:30 PM',
      subInfo: 'Sunday: Closed (Emergency on Call)',
      actionText: 'OPD Open Today',
      link: null
    },
  ]

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      
      {/* ===================== PAGE HEADER WITH DOCTOR / CLINIC IMAGE ===================== */}
      <div className="page-header contact-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="page-header-badge">
            <span className="badge-dot"></span>
            <span>Appointment & OPD Inquiries • Hospital Road, Motihari</span>
          </div>
          <h1>Get In Touch & Book Appointment</h1>
          <p>
            Schedule your personalized consultation with Dr. Amit Kumar (BDS). Walk-in consultations & prior appointments available Monday through Saturday.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </motion.div>
      </div>

      {/* ===================== EMERGENCY CALLOUT BANNER ===================== */}
      <div className="container contact-emergency-wrapper">
        <div className="contact-emergency-banner">
          <div className="emergency-icon-box">
            <FaTooth />
          </div>
          <div className="emergency-content">
            <h4>Severe Tooth Pain or Dental Emergency?</h4>
            <p>We prioritize acute toothaches, chipped teeth, and trauma. Call us directly for immediate triage.</p>
          </div>
          <a href="tel:+919122909121" className="btn-emergency-call">
            <FaPhoneAlt /> Call +91 91229 09121
          </a>
        </div>
      </div>

      {/* ===================== MAIN CONTACT SECTION ===================== */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Contact Cards & Clinic Details */}
            <AnimatedSection direction="left">
              <div className="contact-info-col">
                <span className="ref-kicker">CONTACT INFORMATION</span>
                <h2 className="ref-section-headline">
                  We Are Always Here <br />
                  <span className="text-highlight">For Your Smile</span>
                </h2>
                <p className="ref-about-text">
                  Have questions about Root Canal Therapy, Invisible Aligners, Dental Implants, or want to schedule an appointment with Dr. Amit Kumar? Choose any convenient channel below.
                </p>

                {/* 4 Cards Grid */}
                <div className="contact-cards-grid">
                  {contactCards.map((card, index) => (
                    <div key={index} className="contact-card">
                      <div className="card-icon">{card.icon}</div>
                      <h4>{card.title}</h4>
                      <p className="card-main-info">{card.info}</p>
                      {card.subInfo && <p className="card-sub-info">{card.subInfo}</p>}
                      {card.link && (
                        <a 
                          href={card.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="contact-card-link"
                        >
                          <span>{card.actionText}</span>
                          <span className="arrow-sym">→</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Landmark Directions Box */}
                <div className="landmark-guide-box">
                  <div className="landmark-header">
                    <FaDirections className="landmark-icon" />
                    <h4>How to Reach Our Clinic in Motihari</h4>
                  </div>
                  <ul className="landmark-list">
                    <li>
                      <FaCheckCircle className="li-check" />
                      <span><strong>Key Landmark:</strong> Hospital Road, Near Tribhuwan Janch Ghar, Gyan Babu Chowk area.</span>
                    </li>
                    <li>
                      <FaCarAlt className="li-check" />
                      <span><strong>Residence Clinic Address:</strong> Gali Number 6, Near Saphi Devi Mandir, Sri Krishna Nagar, Motihari.</span>
                    </li>
                    <li>
                      <FaHospital className="li-check" />
                      <span><strong>Accessibility:</strong> 5-7 minutes from Chhatauni and Main Market. Easy parking available for 2-wheelers and cars.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Appointment Form */}
            <AnimatedSection direction="right">
              <div className="contact-form-container">
                <div className="form-header-badge">
                  <span className="badge-dot"></span>
                  <span>Instant WhatsApp Confirmation</span>
                </div>
                <h3>Book an Appointment</h3>
                <p>Fill out the details below. Our team verifies your slot and sends an instant WhatsApp confirmation.</p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="booking-success-toast"
                  >
                    <FaCheckCircle /> Redirecting to WhatsApp to confirm your slot with Dr. Amit Kumar...
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="input-name">Full Name *</label>
                      <input
                        type="text"
                        id="input-name"
                        name="name"
                        placeholder="e.g. Rahul Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="input-phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="input-phone"
                        name="phone"
                        placeholder="+91 91229 09121"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="input-date">Preferred Date</label>
                      <input
                        type="date"
                        id="input-date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="input-time">Preferred Time</label>
                      <select 
                        id="input-time"
                        name="time" 
                        value={formData.time} 
                        onChange={handleChange}
                      >
                        <option value="10:00 AM">10:00 AM - Morning Slot</option>
                        <option value="11:30 AM">11:30 AM - Morning Slot</option>
                        <option value="01:00 PM">01:00 PM - Afternoon Slot</option>
                        <option value="04:00 PM">04:00 PM - Evening Slot</option>
                        <option value="06:30 PM">06:30 PM - Evening Slot</option>
                        <option value="08:00 PM">08:00 PM - Evening Slot</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-service">Treatment Needed</label>
                    <select 
                      id="input-service"
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                    >
                      <option value="Root Canal Treatment (RCT)">Root Canal Treatment (Painless Rotary RCT)</option>
                      <option value="Invisible Clear Aligners">Invisible Clear Braces / Aligners</option>
                      <option value="Dental Implants">Dental Implants (Titanium Tooth Replacement)</option>
                      <option value="Teeth Whitening">Teeth Whitening (Laser Luster)</option>
                      <option value="Laser Dentistry">Laser Dentistry (Gum Treatment)</option>
                      <option value="General Check-up & Cleaning">General Check-up & Scaling</option>
                      <option value="Pediatric Dental Care">Pediatric Dental Care (Child Dental)</option>
                      <option value="Emergency Toothache">Severe Tooth Pain / Emergency</option>
                      <option value="Other Consultation">Other Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-msg">Message / Dental Concern (Optional)</label>
                    <textarea
                      id="input-msg"
                      name="message"
                      rows="3"
                      placeholder="Mention any specific symptom (e.g. sensitivity, swelling, gap in teeth)..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-contact-submit">
                    <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Book via WhatsApp
                  </button>

                  <p className="form-privacy-note">
                    <FaShieldAlt /> Your health details are 100% confidential. No spam guaranteed.
                  </p>
                </form>
              </div>
            </AnimatedSection>

          </div>

          {/* Google Maps Section */}
          <AnimatedSection>
            <div className="contact-map-wrapper">
              <div className="map-header">
                <div>
                  <span className="ref-kicker">INTERACTIVE LOCATION</span>
                  <h3>Find Us on Hospital Road, Motihari</h3>
                  <p>Near Tribhuwan Janch Ghar, Gyan Babu Chowk / Sri Krishna Nagar, Motihari, Bihar - 845401</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Hospital+Road+Motihari+Bihar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ref-primary"
                >
                  <FaDirections /> Open Google Navigation
                </a>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114488.58729587455!2d84.84594248882585!3d26.649669537367375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993348126b42b65%3A0xb36f043e0d8fa093!2sMotihari%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nirmala Dental Care Motihari Location"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </motion.div>
  )
}

export default Contact
