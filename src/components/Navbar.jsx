import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaTooth, FaPalette, FaCheck } from 'react-icons/fa'

const THEMES = [
  { id: 'blue', name: 'Royal Blue', color: '#1E50FF' },
  { id: 'teal', name: 'Teal Mint', color: '#0D9488' },
  { id: 'cyan', name: 'Ocean Cyan', color: '#0284C7' },
  { id: 'purple', name: 'Deep Purple', color: '#7C3AED' },
  { id: 'rose', name: 'Coral Rose', color: '#E11D48' }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState('blue')
  const themeRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Initialize theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nirmala_theme') || 'blue'
    setActiveTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  // Close theme dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeOpen(false)
      }
    }
    if (themeOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [themeOpen])

  const handleThemeChange = (themeId) => {
    setActiveTheme(themeId)
    document.documentElement.setAttribute('data-theme', themeId)
    localStorage.setItem('nirmala_theme', themeId)
    setThemeOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  const currentThemeColor = THEMES.find(t => t.id === activeTheme)?.color || '#1E50FF'

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
            {/* Header Theme Switcher (5 Curated Themes) */}
            <div className="header-theme-picker" ref={themeRef}>
              <button
                type="button"
                className={`btn-header-theme ${themeOpen ? 'active' : ''}`}
                onClick={() => setThemeOpen(!themeOpen)}
                aria-label="Change color theme"
                title="Customize Theme Color (5 Colors)"
              >
                <FaPalette className="theme-palette-icon" />
                <span 
                  className="active-theme-indicator" 
                  style={{ backgroundColor: currentThemeColor }}
                />
              </button>

              {themeOpen && (
                <div className="header-theme-dropdown">
                  <div className="header-theme-dropdown-title">
                    <FaPalette className="dropdown-title-icon" />
                    <span>Color Themes</span>
                  </div>
                  <div className="header-theme-options">
                    {THEMES.map(theme => (
                      <button
                        key={theme.id}
                        type="button"
                        className={`header-theme-option ${activeTheme === theme.id ? 'active' : ''}`}
                        onClick={() => handleThemeChange(theme.id)}
                      >
                        <span className="theme-option-dot" style={{ backgroundColor: theme.color }}>
                          {activeTheme === theme.id && <FaCheck className="theme-option-check" />}
                        </span>
                        <span className="theme-option-name">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
