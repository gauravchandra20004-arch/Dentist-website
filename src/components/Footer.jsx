import React from 'react'
import { Link } from 'react-router-dom'
import { FaTooth, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <FaTooth />
              </div>
              <h3>Nirmala Dental Care</h3>
            </div>
            <p>
              Motihari's top-rated dental care clinic led by Dr. Amit Kumar (BDS). 
              Providing compassionate, painless oral healthcare, advanced Rotary Root Canal (RCT), 
              Laser Dentistry, and Clear Aligners with 4.9★ Google satisfaction.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/919122909121" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Dr. Amit Kumar</Link></li>
              <li><Link to="/services">Dental Treatments</Link></li>
              <li><Link to="/gallery">Clinic Tour</Link></li>
              <li><Link to="/contact">Contact & Map</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Treatments</h4>
            <ul>
              <li><Link to="/services">Painless Rotary RCT</Link></li>
              <li><Link to="/services">Diode Laser Dentistry</Link></li>
              <li><Link to="/services">Clear Teeth Aligners</Link></li>
              <li><Link to="/services">Laser Teeth Whitening</Link></li>
              <li><Link to="/services">Titanium Dental Implants</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a href="https://maps.google.com/?q=Hospital+Road+Motihari+Bihar" target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt /> Hospital Road, Near Tribhuwan Janch Ghar, Gyan Babu Chowk, Sri Krishna Nagar, Motihari - 845401
                </a>
              </li>
              <li>
                <a href="tel:+919122909121">
                  <FaPhoneAlt /> +91 91229 09121
                </a>
              </li>
              <li>
                <a href="mailto:nirmaladentalmotihari@gmail.com">
                  <FaEnvelope /> nirmaladentalmotihari@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nirmala Dental Care. Led by Dr. Amit Kumar (BDS). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
