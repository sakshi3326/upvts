import React from 'react';
import '../css/Footer.css';
const Footer = () => {
  return (
    <div className="footer-container">
      {/* Overlapping Cards */}
      <div className="footer-cards">
        <div className="footer-card">
          <h3>Exhibitor Relation</h3>
          <p><i className="fas fa-phone"></i>+91 8160480947</p>
          <p><i className="fas fa-phone"></i>+91 8826152063</p>
        </div>
        <div className="footer-card">
          <h3>Visitor Relation</h3>
          <p><i className="fas fa-phone"></i>+91 6386016403</p>
        </div>
        <div className="footer-card">
          <h3>Press & Media</h3>
          <p><i className="fas fa-phone"></i>+91 8160480947</p>
        </div>
        <div className="footer-card">
          <h3>Hotel Bookings</h3>
          <p><i className="fas fa-phone"></i>+91 8160480947</p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-column">
          <h4 className="footer-heading">Organised By</h4>
          <div className="organizer-logos">
            <img src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/up_gov.png?alt=media&token=b82d9bdd-306a-4126-8015-80dd869e2880" alt="Organizer 1" />
            <img src="https://firebasestorage.googleapis.com/v0/b/gosharpenertestapp.appspot.com/o/via_logo.png?alt=media&token=8174d915-45da-4708-8744-fa67888e6781" alt="Organizer 2" />
            
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Exhibitor</h4>
          <ul className="footer-links">
            <li>Why Exhibit</li>
            <li>Exhibitor Profile</li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Visitor</h4>
          <ul className="footer-links">
            
            <li>Visitor Profile</li>
            <li>Registration</li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> +91 8160480947</p>
            <p><i className="fas fa-envelope"></i>info@uttarpradeshindustrialtradeshow.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Varansi, India</p>
          </div>
          <div className="social-media">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>© {new Date().getFullYear()} UPVTS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;