import React, { useState, useEffect } from 'react'
import { FaPalette, FaTimes, FaCheck } from 'react-icons/fa'

const themes = [
  { id: 'blue', name: 'Royal Blue', color: '#1E50FF', desc: 'Signature Medical Blue' },
  { id: 'teal', name: 'Teal Mint', color: '#0D9488', desc: 'Fresh Clinical Mint' },
  { id: 'cyan', name: 'Ocean Cyan', color: '#0284C7', desc: 'Modern Vibrant Cyan' },
  { id: 'purple', name: 'Deep Purple', color: '#7C3AED', desc: 'Royal Aesthetic Violet' },
  { id: 'rose', name: 'Coral Rose', color: '#E11D48', desc: 'Warm Radiant Coral' }
]

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState('blue')

  useEffect(() => {
    const saved = localStorage.getItem('nirmala_theme') || 'blue'
    setActiveTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const changeTheme = (themeId) => {
    setActiveTheme(themeId)
    document.documentElement.setAttribute('data-theme', themeId)
    localStorage.setItem('nirmala_theme', themeId)
  }

  return (
    <div className={`color-switcher-wrapper ${isOpen ? 'open' : ''}`}>
      {/* Floating Toggle Trigger Button */}
      <button 
        type="button" 
        className="color-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Color Theme Switcher"
        title="Customize Color Theme (5 Colors)"
      >
        <FaPalette className="palette-icon" />
      </button>

      {/* Floating Swatches Panel */}
      <div className="color-switcher-panel">
        <div className="panel-header">
          <div className="panel-title">
            <FaPalette className="title-icon" />
            <span>Theme Colors</span>
          </div>
          <button 
            type="button" 
            className="panel-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close Theme Panel"
          >
            <FaTimes />
          </button>
        </div>

        <p className="panel-sub">Select 1 of 5 color themes:</p>

        <div className="theme-swatches-grid">
          {themes.map(theme => (
            <button
              key={theme.id}
              type="button"
              className={`theme-swatch-item ${activeTheme === theme.id ? 'active' : ''}`}
              onClick={() => changeTheme(theme.id)}
              title={`${theme.name} - ${theme.desc}`}
            >
              <span className="swatch-circle" style={{ backgroundColor: theme.color }}>
                {activeTheme === theme.id && <FaCheck className="swatch-check" />}
              </span>
              <span className="swatch-name">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorSwitcher
