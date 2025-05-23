import React from 'react';
import '../css/LocationMap.css';
import Navbar from './Navbar';
import Footer from './Footer';

const VisitorDirection: React.FC = () => {


const menuItems = [
  "Home",
    "About UPVTS",
    "Exhibitors",
    "Visitors",
    // "Downloads",
    // "Press & Media",
    "Contact",
  ];

  const conventionCenterAddress = "Rudraksh International Cooperation & Convention Centre, Varanasi, Uttar Pradesh, India";
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.897430481744!2d82.9706823150116!3d25.26788398384551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x6813171053d7a799!2sRudraksh%20International%20Cooperation%20%26%20Convention%20Centre!5e0!3m2!1sen!2sin!4v${Math.floor(Date.now()/1000)}!5m2!1sen!2sin`;

  return (
    <div className="location-container">
      <div className= "fixed-navbar">
        <Navbar menuItems={menuItems} />
        </div>
      <h2 className="location-heading">Venue Location</h2>
      <div className="location-content">
        <div className="map-container">
          <iframe
            title="Rudraksh International Convention Center Location"
            src={googleMapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="location-details">
          <h3>Rudraksh International Cooperation & Convention Centre</h3>
          <p className="address">{conventionCenterAddress}</p>
          
          <div className="direction-buttons">
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(conventionCenterAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="direction-btn"
            >
              Get Directions (Google Maps)
            </a>
            
            <a 
              href={`https://maps.apple.com/?daddr=${encodeURIComponent(conventionCenterAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="direction-btn apple-maps"
            >
              Get Directions (Apple Maps)
            </a>
          </div>
          
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default VisitorDirection;