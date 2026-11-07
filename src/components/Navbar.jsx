import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { 
  FaTooth, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube 
} from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      {/* Top Royal Blue Info Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+919122909121" className="top-bar-item">
              <FaPhoneAlt className="top-bar-icon" />
              <span>+91 91229 09121</span>
            </a>
            <span className="top-bar-divider">•</span>
            <a href="mailto:nirmaladentalmotihari@gmail.com" className="top-bar-item">
              <FaEnvelope className="top-bar-icon" />
              <span>nirmaladentalmotihari@gmail.com</span>
            </a>
            <span className="top-bar-divider">•</span>
            <div className="top-bar-item top-bar-address">
              <FaMapMarkerAlt className="top-bar-icon" />
              <span>Hospital Road, Near Tribhuwan Janch Ghar, Motihari - 845401</span>
            </div>
          </div>

          <div className="top-bar-right">
            <div className="top-bar-socials">
              <a href="https://wa.me/919122909121" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/gauravchandra20004/" target="_blank" rel="noopener noreferrer" aria-label="Gaurav Chandra Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Crisp White Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <div className="logo-icon-box">
              <FaTooth />
            </div>
            <div className="logo-text">
              <h3>Nirmala Dental</h3>
              <p>Care & Speciality Clinic</p>
            </div>
          </Link>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              About
            </NavLink>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              Services
            </NavLink>
            <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              Gallery
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              Contact
            </NavLink>
            <a 
              href="https://wa.me/919122909121?text=Namaste%20Dr.%20Amit%20Kumar%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-book mobile-only-btn"
              onClick={closeMenu}
            >
              Book Now
            </a>
          </div>

          <div className="navbar-actions">
            <a 
              href="https://wa.me/919122909121?text=Namaste%20Dr.%20Amit%20Kumar%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-book desktop-only-btn"
            >
              Book Now
            </a>

            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
