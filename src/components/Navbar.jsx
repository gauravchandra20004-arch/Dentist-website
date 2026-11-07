import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaTooth, FaBars, FaTimes } from 'react-icons/fa'

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
