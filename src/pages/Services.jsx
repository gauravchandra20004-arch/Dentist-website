import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTooth, FaSmile, FaSyringe, FaTeethOpen, FaPhoneAlt,
  FaCalendarCheck, FaXRay, FaChild, FaCheckCircle, FaArrowRight,
  FaShieldAlt, FaClock, FaWhatsapp, FaChevronDown, FaQuestionCircle,
  FaAward, FaHeartbeat, FaStethoscope, FaHospital
} from 'react-icons/fa'
import { GiLaserWarning, GiToothbrush, GiTooth } from 'react-icons/gi'
import { MdCleanHands, MdHealthAndSafety } from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const allServices = [
    {
      id: 'rct',
      category: 'restorative',
      image: '/images/root-canal.jpg',
      icon: <FaTooth />,
      badge: 'Single Sitting • Painless',
      title: 'Root Canal Treatment (RCT)',
      desc: 'Painless single-sitting rotary endodontics using German apex locators. Save your infected natural tooth with 100% sterile precision.',
      features: ['Painless digital anesthesia', '3D rotary canal shaping', 'Same-day ceramic crown option']
    },
    {
      id: 'laser',
      category: 'surgical',
      image: '/images/laser.jpg',
      icon: <GiLaserWarning />,
      badge: 'Advanced Laser Tech',
      title: 'Laser Dentistry',
      desc: 'Minimally invasive soft-tissue diode laser therapy for bleeding gums, painless frenectomy, melanin depigmentation, and instant relief from mouth ulcers.',
      features: ['Zero bleeding & zero stitches', 'Rapid 24-hr tissue healing', 'Minimal local anesthesia needed']
    },
    {
      id: 'braces',
      category: 'cosmetic',
      image: '/images/braces.jpg',
      icon: <FaTeethOpen />,
      badge: 'Invisible & Ceramic',
      title: 'Clear Aligners & Braces',
      desc: 'Custom-designed transparent aligners and aesthetic ceramic braces for teeth alignment without unsightly wires or dietary restrictions.',
      features: ['Completely invisible trays', 'Removable for easy eating & brushing', 'Computerized digital smile preview']
    },
    {
      id: 'whitening',
      category: 'cosmetic',
      image: '/images/whitening.jpg',
      icon: <FaSmile />,
      badge: 'Brighten up to 8 Shades',
      title: 'Laser Teeth Whitening',
      desc: 'Professional in-office laser teeth whitening to eliminate stubborn stains caused by tea, coffee, smoking, or age, giving you a radiant smile.',
      features: ['Immediate 45-minute result', 'Enamel-safe pH neutral formula', 'Long-lasting natural luster']
    },
    {
      id: 'implants',
      category: 'surgical',
      image: '/images/implants.jpg',
      icon: <FaSyringe />,
      badge: 'Lifetime Permanent Solution',
      title: 'Dental Implants',
      desc: 'Permanent titanium tooth roots embedded into the jawbone, topped with custom ceramic crowns that look, chew, and feel like natural teeth.',
      features: ['Preserves natural facial shape', 'Restores 100% bite strength', 'Lifetime durability guarantee']
    },
    {
      id: 'general',
      category: 'general',
      image: '/images/clinic.jpg',
      icon: <GiToothbrush />,
      badge: 'Routine Oral Care',
      title: 'General & Preventive Care',
      desc: 'Complete routine oral prophylaxis, painless ultrasonic tartar scaling, composite tooth-colored fillings, and personalized preventive care.',
      features: ['Ultrasonic deep stain removal', 'Tooth-colored composite fillings', 'Halitosis & bad breath therapy']
    },
    {
      id: 'xray',
      category: 'general',
      image: '/images/xray.jpg',
      icon: <FaXRay />,
      badge: 'Low-Radiation RVG',
      title: 'Digital RVG Diagnostics',
      desc: 'Instant high-definition intraoral digital radiography offering razor-sharp diagnosis of hidden cavities and bone health with 90% less radiation.',
      features: ['Instant on-screen display', '90% lower radiation exposure', 'Micro-crack & hidden abscess detection']
    },
    {
      id: 'sterilization',
      category: 'general',
      image: '/images/sterilization.jpg',
      icon: <MdCleanHands />,
      badge: 'Hospital-Grade Protocol',
      title: 'Periodontal Gum Treatment',
      desc: 'Deep ultrasonic subgingival curettage and antimicrobial therapy for bleeding, swollen gums, pyorrhea, and bone regeneration.',
      features: ['Eliminates gum bleed & sensitivity', 'Stops loose tooth progression', 'Deep pocket pocket disinfection']
    },
    {
      id: 'pediatric',
      category: 'general',
      image: '/images/reception.jpg',
      icon: <FaChild />,
      badge: 'Child Friendly & Gentle',
      title: 'Pediatric Dentistry',
      desc: 'Warm, friendly dental care for children and teens including cavity prevention, fluoride varnish, pit & fissure sealants, and gentle habit counseling.',
      features: ['Fear-free relaxed atmosphere', 'Fluoride enamel shielding', 'Early orthodontic intervention']
    },
    {
      id: 'dentures',
      category: 'restorative',
      image: '/images/root-canal.jpg',
      icon: <GiTooth />,
      badge: 'Custom Prosthetics',
      title: 'Crowns, Bridges & Dentures',
      desc: 'High-strength Zirconia and E-max ceramic crowns, fixed dental bridges, and lightweight flexible dentures for complete chewing restoration.',
      features: ['Unbreakable monolithic zirconia', 'Precise digital shade matching', 'Comfortable flexible denture base']
    },
    {
      id: 'cosmetic',
      category: 'cosmetic',
      image: '/images/whitening.jpg',
      icon: <FaAward />,
      badge: 'Hollywood Smile Design',
      title: 'Cosmetic Smile Makeover',
      desc: 'Porcelain veneers, composite bonding, diastema closure (gap filling), and gum contouring tailored to elevate your facial aesthetics.',
      features: ['Golden proportion smile analysis', 'Ultra-thin aesthetic veneers', 'Seamless natural gap closures']
    },
    {
      id: 'sedation',
      category: 'surgical',
      image: '/images/hero.jpg',
      icon: <MdHealthAndSafety />,
      badge: '100% Anxiety-Free',
      title: 'Emergency & Pain Relief',
      desc: 'Immediate emergency dental triage for acute toothaches, cracked or knocked-out teeth, broken restorations, and dental trauma on Hospital Road.',
      features: ['Same-day emergency appointment', 'Instant local pain alleviation', 'Gentle trauma stabilization']
    }
  ]

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'restorative', label: 'Root Canal & Restorations' },
    { key: 'cosmetic', label: 'Aligners & Smile Design' },
    { key: 'surgical', label: 'Implants & Laser Care' },
    { key: 'general', label: 'General & Diagnostics' }
  ]

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory)

  const treatmentSteps = [
    {
      number: '01',
      title: 'Digital RVG Diagnosis',
      desc: 'Comprehensive oral examination with low-radiation intraoral X-rays to accurately assess tooth roots and bone structure.'
    },
    {
      number: '02',
      title: 'Custom Treatment Plan',
      desc: 'Dr. Amit Kumar (BDS) clearly explains every treatment option, expected duration, and transparent pricing beforehand.'
    },
    {
      number: '03',
      title: 'Painless Gentle Procedure',
      desc: 'Treatment executed with computerized rotary instruments, gentle anesthesia, and strict Class-B autoclave sterilization.'
    },
    {
      number: '04',
      title: 'Post-Care & Follow-Up',
      desc: 'Detailed maintenance guidelines and follow-up checks to guarantee long-term oral health and a confident smile.'
    }
  ]

  const faqs = [
    {
      q: 'Is Root Canal Treatment (RCT) painful at Nirmala Dental Care?',
      a: 'Not at all! With modern computer-controlled rotary endodontics and targeted digital local anesthesia administered by Dr. Amit Kumar, root canal therapy at our clinic is virtually painless and usually completed in a single comfortable sitting.'
    },
    {
      q: 'How long do dental implants last?',
      a: 'Dental implants are made of biocompatible medical-grade titanium that fuses directly with your jawbone. With regular daily brushing, flossing, and periodic check-ups, dental implants can last a lifetime.'
    },
    {
      q: 'Are clear aligners as effective as traditional metal braces?',
      a: 'Yes! Invisible clear aligners provide the exact same orthodontic results as metal braces for mild to complex teeth misalignment, but with the added benefits of being 100% invisible, removable during meals, and wire-free.'
    },
    {
      q: 'What are the clinic OPD consultation hours?',
      a: 'Nirmala Dental Care is open Monday to Saturday from 10:00 AM to 8:30 PM (Sunday Closed / Emergency on call). You can walk in or book a prior slot via WhatsApp or phone at +91 91229 09121.'
    },
    {
      q: 'Where is the clinic located in Motihari?',
      a: 'We are situated on Hospital Road, Near Tribhuwan Janch Ghar, Gyan Babu Chowk, Sri Krishna Nagar, Motihari, Bihar - 845401.'
    }
  ]

  const bookOnWhatsApp = (serviceTitle) => {
    const text = `Namaste Dr. Amit Kumar, I would like to book an appointment for *${serviceTitle}* at Nirmala Dental Care.`
    window.open(`https://wa.me/919122909121?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      
      {/* ===================== PAGE HEADER WITH OPERATORY IMAGE ===================== */}
      <div className="page-header services-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="page-header-badge">
            <span className="badge-dot"></span>
            <span>Comprehensive Dental Treatments • Motihari</span>
          </div>
          <h1>World-Class Dental Care & Services</h1>
          <p>
            From painless single-sitting Root Canals to Invisible Clear Aligners and Titanium Dental Implants. Led by Dr. Amit Kumar (BDS) with 4.9★ Google satisfaction.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Services</span>
          </div>
        </motion.div>
      </div>

      {/* ===================== MAIN SERVICES SECTION ===================== */}
      <section className="section ref-services-section">
        <div className="container">
          
          {/* Section Header */}
          <div className="section-header text-center">
            <span className="ref-kicker">OUR SPECIALITIES</span>
            <h2 className="ref-section-headline">
              A Wide Range of Treatments <br />
              <span className="text-highlight">Tailored For Your Smile</span>
            </h2>
            <p className="section-desc">
              Select a category below to explore our specialized treatments conducted with computerized rotary technology and hospital-grade sterilization.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="services-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 3-Column Service Cards Grid */}
          <motion.div 
            className="ref-services-grid"
            layout
          >
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="ref-service-card"
                >
                  {/* Top Image Box */}
                  <div className="card-image-box">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <span className="service-card-tag">{service.badge}</span>
                  </div>

                  {/* Overlapping Floating Royal Blue Circular Badge */}
                  <div className="card-overlap-icon-badge">
                    {service.icon}
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-desc">{service.desc}</p>

                    {/* Feature Checkpoints */}
                    <div className="card-feature-list">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="card-feature-item">
                          <FaCheckCircle className="check-icon" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="card-action-row">
                      <button 
                        type="button"
                        onClick={() => bookOnWhatsApp(service.title)}
                        className="btn-card-book"
                      >
                        <FaWhatsapp /> Book Treatment
                      </button>

                      <Link to="/contact" className="card-learn-more">
                        <span>Details</span>
                        <FaArrowRight className="arrow-icon" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ===================== TREATMENT PROCESS ===================== */}
      <section className="section treatment-process-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="ref-kicker">HOW WE CARE FOR YOU</span>
            <h2 className="ref-section-headline">
              Our 4-Step Seamless <br />
              <span className="text-highlight">Treatment Experience</span>
            </h2>
            <p className="section-desc">
              Every procedure is carried out with complete transparency, safety, and zero discomfort.
            </p>
          </div>

          <div className="treatment-process-grid">
            {treatmentSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="process-card">
                  <div className="process-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STERILE & SAFETY ASSURANCE ===================== */}
      <section className="section sterile-assurance-section">
        <div className="container">
          <div className="sterile-assurance-card">
            <div className="sterile-grid">
              <div className="sterile-text">
                <span className="ref-kicker" style={{ color: '#EBF1FF' }}>SAFETY & HYGIENE</span>
                <h2>100% Sterile Protocol with Class-B Autoclave</h2>
                <p>
                  At Nirmala Dental Care, patient safety is sacred. Every instrument undergoes a multi-stage ultrasonic cleaning and hospital-grade Class-B vacuum autoclave sterilization before every use, ensuring zero cross-infection risk.
                </p>
                <div className="sterile-points">
                  <div className="sterile-point">
                    <FaShieldAlt className="pt-icon" />
                    <span>Sealed Sterilization Pouches Opened in Front of Patient</span>
                  </div>
                  <div className="sterile-point">
                    <FaCheckCircle className="pt-icon" />
                    <span>Disposable Gloves, Masks, Suctions & Patient Drapes</span>
                  </div>
                  <div className="sterile-point">
                    <FaHospital className="pt-icon" />
                    <span>Daily Surface Disinfection & UV Operatory Sanitization</span>
                  </div>
                </div>
              </div>

              <div className="sterile-image-wrapper">
                <img src="/images/sterilization.jpg" alt="Class-B Autoclave Sterilization Motihari" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FREQUENTLY ASKED QUESTIONS ===================== */}
      <section className="section services-faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="ref-kicker">QUESTIONS & ANSWERS</span>
            <h2 className="ref-section-headline">
              Frequently Asked <span className="text-highlight">Questions</span>
            </h2>
            <p className="section-desc">
              Everything you need to know about dental treatments, timings, and comfort at Nirmala Dental Care.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className={`faq-item ${openFaq === fIdx ? 'active' : ''}`}
                onClick={() => toggleFaq(fIdx)}
              >
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  <span className="faq-icon">
                    <FaChevronDown />
                  </span>
                </div>
                {openFaq === fIdx && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="ref-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-text">
              <h2>Schedule Your Dental Check-Up Today</h2>
              <p>Experience gentle, modern dental treatments with Dr. Amit Kumar (BDS). OPD open Mon–Sat 10:00 AM – 8:30 PM.</p>
            </div>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/919122909121?text=Namaste%20Dr.%20Amit%20Kumar%2C%20I%20would%20like%20to%20consult%20regarding%20dental%20treatment."
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

    </motion.div>
  )
}

export default Services
