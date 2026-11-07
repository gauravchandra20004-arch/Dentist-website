import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { 
  FaTooth, FaUserMd, FaStar, FaPhoneAlt, FaCalendarAlt,
  FaShieldAlt, FaClock, FaHeart, FaAward, FaCheckCircle,
  FaTeethOpen, FaSyringe, FaSmile, FaMapMarkerAlt, FaWhatsapp,
  FaPlay, FaArrowRight, FaTimes, FaCheck, FaHospital
} from 'react-icons/fa'
import { GiLaserWarning, GiToothbrush } from 'react-icons/gi'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const Home = () => {
  // Parallax Scroll for About Section Image Collage (Right rises first, left follows)
  const aboutCollageRef = useRef(null)
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutCollageRef,
    offset: ["start end", "end start"]
  })

  // Smooth springs for buttery smooth parallax scrolling
  const smoothAboutScroll = useSpring(aboutScroll, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  })

  // Right card rises up first with larger travel on scroll
  const yRight = useTransform(smoothAboutScroll, [0, 1], [90, -90])

  // Left card follows smoothly after right image with gentle travel
  const yLeft = useTransform(smoothAboutScroll, [0, 1], [35, -35])

  // Internal image parallax inside the cards for dual-layer 3D depth
  const imgYRight = useTransform(smoothAboutScroll, [0, 1], [-25, 25])
  const imgYLeft = useTransform(smoothAboutScroll, [0, 1], [-14, 14])

  // Hero Doctor Parallax on scroll
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const doctorParallaxY = useTransform(heroScroll, [0, 1], [0, 50])
  const backdropParallaxY = useTransform(heroScroll, [0, 1], [0, 30])

  // Appointment Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00 AM'
  })
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [videoModal, setVideoModal] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      alert('Please enter your Name and Phone Number to schedule an appointment.')
      return
    }

    const message = `Namaste Dr. Amit Kumar, I would like to book a dental appointment at Nirmala Dental Care.%0A%0A*Patient Name:* ${encodeURIComponent(formData.name)}%0A*Phone Number:* ${encodeURIComponent(formData.phone)}%0A*Preferred Date:* ${encodeURIComponent(formData.date || 'Earliest Available')}%0A*Preferred Time:* ${encodeURIComponent(formData.time)}%0A%0APlease confirm my slot.`
    
    window.open(`https://wa.me/919122909121?text=${message}`, '_blank')
    setBookingSuccess(true)
    setTimeout(() => setBookingSuccess(false), 5000)
  }

  const services = [
    { 
      image: '/images/clinic.jpg', 
      icon: <GiToothbrush />, 
      title: 'General Dentistry', 
      desc: 'Complete routine oral check-ups, ultrasonic scaling, cavity fillings, and preventive care for a lasting confident smile.' 
    },
    { 
      image: '/images/implants.jpg', 
      icon: <FaSyringe />, 
      title: 'Dental Implant', 
      desc: 'Lifelong permanent tooth replacement using medical-grade titanium implants that look, chew, and feel like real teeth.' 
    },
    { 
      image: '/images/whitening.jpg', 
      icon: <FaSmile />, 
      title: 'Teeth Whitening', 
      desc: 'Laser-activated whitening treatment brightening your natural teeth by multiple shades safely and comfortably.' 
    },
    { 
      image: '/images/root-canal.jpg', 
      icon: <FaTooth />, 
      title: 'Root Canal (RCT)', 
      desc: 'Single-sitting painless Rotary Endodontics to relieve severe tooth pain and preserve your natural tooth structure.' 
    },
    { 
      image: '/images/braces.jpg', 
      icon: <FaTeethOpen />, 
      title: 'Clear Braces', 
      desc: 'Discreet invisible aligners and aesthetic ceramic braces for smooth teeth alignment without unsightly metal wires.' 
    },
    { 
      image: '/images/laser.jpg', 
      icon: <GiLaserWarning />, 
      title: 'Laser Dentistry', 
      desc: 'Minimally invasive diode laser treatments for bleeding gums, precision gum contouring, and rapid healing.' 
    },
  ]

  const marqueeItems = [
    'General Dentistry',
    'Teeth Whitening',
    'Dental Implant',
    'Root Canal (RCT)',
    'Clear Braces',
    'Laser Dentistry',
    'Pediatric Dental Care',
    'Dental Sealants',
    'Smile Designing'
  ]

  const whyChooseUs = [
    { icon: <FaUserMd />, title: 'Dr. Amit Kumar (BDS)', desc: 'Trusted dental surgeon with over a decade of clinical mastery in Motihari.' },
    { icon: <FaShieldAlt />, title: '100% Sterile Protocol', desc: 'Hospital-grade class-B autoclaves for zero infection risk and complete hygiene.' },
    { icon: <FaClock />, title: 'Mon–Sat: 10AM – 8:30PM', desc: 'Convenient morning to evening consultation slots on Hospital Road.' },
    { icon: <FaHeart />, title: '100% Gentle & Polite', desc: 'Known for polite patient care, transparent diagnosis, and pain-free procedures.' },
  ]

  const testimonials = [
    {
      name: 'Rahul Kumar',
      initial: 'R',
      city: 'Hospital Road, Motihari',
      text: 'Dr. Amit Kumar is very polite and humble. He took time to explain the entire procedure calmly and my root canal was completely painless! Nirmala Dental Care is truly the best clinic.',
      treatment: 'Root Canal Treatment (RCT)'
    },
    {
      name: 'Priya Singh',
      initial: 'P',
      city: 'Sri Krishna Nagar',
      text: 'The clinic is spotlessly clean and very well maintained. Got clear aligners and scaling done here. Very cooperative staff and painless treatment.',
      treatment: 'Invisible Aligners'
    },
    {
      name: 'Amit Sharma',
      initial: 'A',
      city: 'Gyan Babu Chowk',
      text: 'Dr. Amit Kumar handles every patient with immense patience. Excellent diagnosis, no unnecessary tests or charges, and top-tier dental work.',
      treatment: 'Dental Implants & Crown'
    },
  ]

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="hero-reference" ref={heroRef}>
        <div className="container hero-reference-container">
          <div className="hero-reference-grid">
            
            {/* Left Content Column */}
            <motion.div 
              className="hero-reference-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="ref-badge">
                <span className="ref-badge-icon">🩺</span>
                <span>Top-Notch Dental Care, Just for You</span>
              </div>

              {/* Bold Headline */}
              <h1 className="ref-hero-headline">
                Your <span className="ref-text-dark">Best Dental</span> <br />
                <span className="ref-text-blue">Experience Awaits</span>
              </h1>

              {/* Subtitle */}
              <p className="ref-hero-subtitle">
                Welcome to <strong>Nirmala Dental Care</strong>, Hospital Road, Motihari. Led by senior dental surgeon <strong>Dr. Amit Kumar (BDS)</strong> with over a decade of clinical excellence in painless Rotary RCT, Laser Dentistry, and Invisible Aligners.
              </p>

              {/* Action Buttons */}
              <div className="ref-hero-cta-group">
                <Link to="/services" className="btn-ref-primary">
                  <span>Explore Our Services</span>
                  <FaArrowRight className="btn-icon" />
                </Link>

                <button 
                  type="button" 
                  className="btn-ref-video"
                  onClick={() => setVideoModal(true)}
                  aria-label="Watch Clinic Virtual Tour"
                >
                  <span className="play-icon-circle">
                    <FaPlay />
                  </span>
                  <span className="btn-video-text">Watch Video</span>
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="ref-hero-trust-bar">
                <div className="ref-trust-item">
                  <FaCheckCircle className="trust-check" />
                  <span>10+ Yrs Trusted Care</span>
                </div>
                <div className="ref-trust-item">
                  <FaCheckCircle className="trust-check" />
                  <span>5,000+ Happy Patients</span>
                </div>
                <div className="ref-trust-item">
                  <FaStar className="trust-star" />
                  <span>4.9/5 Google Rating (300+ Reviews)</span>
                </div>
              </div>
            </motion.div>

            {/* Right Doctor Visual Column with Subtle Scroll Parallax */}
            <motion.div 
              className="hero-reference-visual"
              style={{ y: doctorParallaxY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="doctor-visual-container">
                {/* Organic Royal Blue Backdrop Shape with Parallax */}
                <motion.div 
                  className="doctor-blue-backdrop"
                  style={{ y: backdropParallaxY }}
                ></motion.div>
                
                {/* Subtle Decorative Star Sparkles */}
                <span className="sparkle sparkle-1">✦</span>
                <span className="sparkle sparkle-2">✦</span>

                {/* Doctor Photo Card with Verified Badge Overlay */}
                <div className="doctor-image-wrapper">
                  <img 
                    src="/images/doctor.jpg" 
                    alt="Dr. Amit Kumar BDS - Senior Dental Surgeon Nirmala Dental Care Motihari"
                    className="doctor-main-img" 
                  />
                  
                  {/* Doctor Info Glassmorphism Tag matching Attachment */}
                  <div className="doctor-badge-overlay">
                    <div className="doctor-overlay-name">
                      <span>Dr. Amit Kumar</span>
                      <span className="verified-badge-pill" title="Verified Practitioner">
                        <FaCheck className="verified-check-icon" />
                      </span>
                    </div>
                    <div className="doctor-overlay-spec">BDS Dental Surgeon</div>
                    <div className="doctor-overlay-loc">Hospital Rd, Motihari</div>
                  </div>
                </div>

                {/* Floating Card Top Left: Experience (Gold Badge) */}
                <div className="ref-floating-card card-top-left">
                  <div className="floating-card-icon-box gold">
                    <FaAward />
                  </div>
                  <div className="floating-card-text">
                    <strong>13+ Years</strong>
                    <p>Clinical Mastery</p>
                  </div>
                </div>

                {/* Floating Card Bottom Right: Patient Trust (Teal/Blue Badge) */}
                <div className="ref-floating-card card-bottom-right">
                  <div className="floating-card-icon-box blue">
                    <FaTooth />
                  </div>
                  <div className="floating-card-text">
                    <strong>5,000+ Smiles</strong>
                    <p>4.9★ Patient Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ===================== FLOATING APPOINTMENT BOOKING BAR ===================== */}
        <div className="container appointment-bar-wrapper">
          <motion.div 
            className="appointment-bar-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleBookingSubmit} className="appointment-bar-form">
              {/* Field 1: Name */}
              <div className="appointment-field">
                <label htmlFor="name-input">Name</label>
                <div className="field-input-box">
                  <span className="field-icon">👤</span>
                  <input 
                    type="text" 
                    id="name-input"
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    required 
                  />
                </div>
              </div>

              {/* Field 2: Phone Number */}
              <div className="appointment-field">
                <label htmlFor="phone-input">Phone Number</label>
                <div className="field-input-box">
                  <span className="field-icon">📞</span>
                  <input 
                    type="tel" 
                    id="phone-input"
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 91229 09121" 
                    required 
                  />
                </div>
              </div>

              {/* Field 3: Preferred Date */}
              <div className="appointment-field">
                <label htmlFor="date-input">Preferred Date</label>
                <div className="field-input-box">
                  <span className="field-icon">📅</span>
                  <input 
                    type="date" 
                    id="date-input"
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              {/* Field 4: Preferred Time */}
              <div className="appointment-field">
                <label htmlFor="time-select">Preferred Time</label>
                <div className="field-input-box">
                  <span className="field-icon">⏰</span>
                  <select 
                    id="time-select"
                    name="time" 
                    value={formData.time}
                    onChange={handleInputChange}
                  >
                    <option value="10:00 AM">10:00 AM - Morning</option>
                    <option value="11:30 AM">11:30 AM - Morning</option>
                    <option value="01:00 PM">01:00 PM - Afternoon</option>
                    <option value="04:00 PM">04:00 PM - Evening</option>
                    <option value="06:30 PM">06:30 PM - Evening</option>
                    <option value="08:00 PM">08:00 PM - Evening</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="appointment-action">
                <button type="submit" className="btn-appointment-submit">
                  <span>Book an Appointment</span>
                </button>
              </div>
            </form>

            {/* Quick Success Confirmation Notice */}
            {bookingSuccess && (
              <div className="booking-success-toast">
                <FaCheck /> Redirecting to WhatsApp to confirm your slot with Dr. Amit Kumar...
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===================== ABOUT US SECTION ===================== */}
      <section className="section ref-about-section">
        <div className="container">
          <div className="ref-about-grid">
            
            {/* Left Column: Organic Collage with Parallax Scroll & Rotating Badge */}
            <div className="ref-about-visual-box" ref={aboutCollageRef}>
              {/* Custom Organic Collage with Staggered Parallax Effect */}
              <div className="ref-about-collage">
                {/* Left Card: X-Ray Diagnostics - follows up after right */}
                <motion.div 
                  className="collage-card card-primary-img"
                  style={{ y: yLeft }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.img 
                    src="/images/xray.jpg" 
                    alt="Dr. Amit Kumar analyzing digital dental X-ray diagnostics at Nirmala Dental Care" 
                    style={{ y: imgYLeft, scale: 1.15 }}
                  />
                </motion.div>

                {/* Right Card: Modern Treatment Operatory - rises up first on scroll */}
                <motion.div 
                  className="collage-card card-secondary-img"
                  style={{ y: yRight }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.img 
                    src="/images/clinic.jpg" 
                    alt="Nirmala Dental Care state-of-the-art clinic treatment operatory" 
                    style={{ y: imgYRight, scale: 1.15 }}
                  />
                </motion.div>
              </div>

              {/* Rotating Contact Circular Badge */}
              <a 
                href="tel:+919122909121" 
                className="rotating-contact-badge"
                title="Click to Call +91 91229 09121"
              >
                <div className="badge-inner-circle">
                  <FaPhoneAlt className="badge-center-icon" />
                </div>
                <svg className="badge-text-svg" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      • CONTACT US • 4.9★ GOOGLE RATED •
                    </textPath>
                  </text>
                </svg>
              </a>

              {/* Sparkle details matching reference */}
              <span className="ref-sparkle sparkle-blue-1">✦</span>
              <span className="ref-sparkle sparkle-blue-2">✦</span>
            </div>

            {/* Right Column: About Details */}
            <AnimatedSection direction="right">
              <div className="ref-about-content">
                <span className="ref-kicker">ABOUT OUR CLINIC</span>
                <h2 className="ref-section-headline">
                  10+ Years of Expertise <br />
                  <span className="text-highlight">in Dental Care</span>
                </h2>

                <p className="ref-about-text">
                  <strong>Nirmala Dental Care</strong> is one of Motihari’s most trusted and highly rated dental clinics (4.9★ on Google). Conveniently located on Hospital Road (Near Tribhuwan Janch Ghar, Gyan Babu Chowk, Sri Krishna Nagar), our clinic is equipped with modern rotary endodontics, digital RVG radiography, and hospital-grade autoclave sterilization.
                </p>

                <p className="ref-about-text secondary-text">
                  Led by renowned dental surgeon <strong>Dr. Amit Kumar (BDS)</strong>, we are committed to providing gentle, compassionate, and 100% painless dental solutions with transparent pricing and personalized care.
                </p>

                {/* 3 Checkmark Points */}
                <div className="ref-check-list">
                  <div className="ref-check-item">
                    <div className="check-bullet"><FaCheckCircle /></div>
                    <div className="check-content">
                      <strong>Painless Rotary RCT & Wisdom Tooth Care</strong>
                      <p>Modern computerized endodontics and gentle local anesthesia for anxiety-free visits.</p>
                    </div>
                  </div>

                  <div className="ref-check-item">
                    <div className="check-bullet"><FaCheckCircle /></div>
                    <div className="check-content">
                      <strong>Polite, Transparent & Honest Consultation</strong>
                      <p>Over 300+ 5-star patient reviews praising Dr. Amit Kumar's attentive patient care.</p>
                    </div>
                  </div>

                  <div className="ref-check-item">
                    <div className="check-bullet"><FaCheckCircle /></div>
                    <div className="check-content">
                      <strong>100% Sterile & Hygienic Clinic Environment</strong>
                      <p>Class-B hospital autoclave sterilization and disposable instruments for every patient.</p>
                    </div>
                  </div>
                </div>

                <div className="ref-about-actions">
                  <Link to="/about" className="btn-ref-primary">
                    <span>Learn More</span>
                    <FaArrowRight className="btn-icon" />
                  </Link>

                  <a href="tel:+919122909121" className="btn-ref-call">
                    <FaPhoneAlt />
                    <span>+91 91229 09121</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ===================== MARQUEE TICKER RIBBON 1 ===================== */}
      <div className="marquee-ribbon">
        <div className="marquee-track">
          <div className="marquee-group">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={`mq1-${idx}`} className="marquee-item">
                <span className="marquee-tooth">🦷</span>
                <span className="marquee-name">{item}</span>
              </span>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={`mq2-${idx}`} className="marquee-item">
                <span className="marquee-tooth">🦷</span>
                <span className="marquee-name">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== OUR SERVICES SECTION ===================== */}
      <section className="section ref-services-section">
        <div className="container">
          
          {/* Header Row */}
          <div className="ref-services-header">
            <div className="header-left">
              <span className="ref-kicker">OUR SERVICES</span>
              <h2 className="ref-section-headline">
                A Wide Range of Services <br />
                <span className="text-highlight">for Your Best Smile</span>
              </h2>
            </div>
            <div className="header-right">
              <Link to="/services" className="btn-ref-primary">
                <span>Explore All Services</span>
                <FaArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>

          {/* 3-Column Service Cards Grid */}
          <div className="ref-services-grid">
            {services.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="ref-service-card">
                  {/* Top Image */}
                  <div className="card-image-box">
                    <img src={item.image} alt={item.title} />
                  </div>

                  {/* Overlapping Floating Royal Blue Icon Badge */}
                  <div className="card-overlap-icon-badge">
                    {item.icon}
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.desc}</p>
                    <Link to="/services" className="card-learn-more">
                      <span>Learn more</span>
                      <FaArrowRight className="arrow-icon" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== MARQUEE TICKER RIBBON 2 ===================== */}
      <div className="marquee-ribbon marquee-reverse">
        <div className="marquee-track">
          <div className="marquee-group">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={`mq3-${idx}`} className="marquee-item">
                <span className="marquee-tooth">🦷</span>
                <span className="marquee-name">{item}</span>
              </span>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={`mq4-${idx}`} className="marquee-item">
                <span className="marquee-tooth">🦷</span>
                <span className="marquee-name">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="section ref-why-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="ref-kicker">WHY CHOOSE US</span>
            <h2 className="ref-section-headline">
              Why Patients in Motihari <br />
              <span className="text-highlight">Trust Nirmala Dental Care</span>
            </h2>
            <p className="section-desc">
              Your comfort, safety, and healthy smile are our highest priority.
            </p>
          </div>

          <div className="why-cards-grid">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="why-feature-card">
                  <div className="why-feature-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PATIENT TESTIMONIALS ===================== */}
      <section className="section ref-testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="ref-kicker">GOOGLE VERIFIED REVIEWS</span>
            <h2 className="ref-section-headline">
              Words From Our <span className="text-highlight">Happy Patients</span>
            </h2>
            <p className="section-desc">
              Rated 4.9★ based on 300+ genuine patient reviews across Motihari.
            </p>
          </div>

          <div className="testimonials-cards-grid">
            {testimonials.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="ref-testimonial-card">
                  <div className="testimonial-rating-stars">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="testimonial-quote">"{item.text}"</p>
                  <div className="testimonial-author-box">
                    <div className="author-avatar">{item.initial}</div>
                    <div className="author-info">
                      <h4>{item.name}</h4>
                      <p>{item.treatment} • {item.city}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="ref-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-text">
              <h2>Ready to Smile with Confidence?</h2>
              <p>Book your consultation today with Dr. Amit Kumar (BDS). OPD open Monday to Saturday, 10:00 AM – 8:30 PM.</p>
            </div>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/919122909121?text=Namaste%20Dr.%20Amit%20Kumar%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp"
              >
                <FaWhatsapp /> Book via WhatsApp
              </a>
              <a href="tel:+919122909121" className="btn-cta-call">
                <FaPhoneAlt /> +91 91229 09121
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VIDEO / VIRTUAL TOUR MODAL ===================== */}
      <AnimatePresence>
        {videoModal && (
          <motion.div 
            className="ref-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModal(false)}
          >
            <motion.div 
              className="ref-modal-card"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setVideoModal(false)}
                aria-label="Close Tour"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <span className="ref-kicker">CLINIC VIRTUAL TOUR</span>
                <h3>Nirmala Dental Care</h3>
                <p>Hospital Road, Near Tribhuwan Janch Ghar, Gyan Babu Chowk, Motihari, Bihar</p>
              </div>

              <div className="modal-media-showcase">
                <img src="/images/clinic.jpg" alt="Clinic Interior Virtual Tour" className="modal-main-img" />
                <div className="modal-media-grid">
                  <img src="/images/reception.jpg" alt="Reception Area" />
                  <img src="/images/xray.jpg" alt="Digital Intraoral X-Ray" />
                  <img src="/images/sterilization.jpg" alt="Class-B Autoclave Sterilization" />
                </div>
              </div>

              <div className="modal-footer-actions">
                <a 
                  href="https://wa.me/919122909121?text=Namaste%20Dr.%20Amit%20Kumar%2C%20I%20would%20like%20to%20visit%20the%20clinic."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ref-primary"
                >
                  <FaWhatsapp /> Schedule an In-Person Visit
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default Home
