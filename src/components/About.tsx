import React, { useState } from 'react';
import '../css/About.css';
import Navbar from './Navbar';
import Footer from './Footer';
const About: React.FC = () => {

  const menuItems = [
    "Home",
    "About UPVTS",
    "Exhibitors",
    "Visitors",
    
    "Contact",
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionHover = (section: string | null) => {
    setActiveSection(section);
  };

  return (
    
    <div className="about-page">
          
      <header 
        className="about-header highlighted-section"
        onMouseEnter={() => handleSectionHover(null)}
      >
          <Navbar menuItems={menuItems} />
        <h1>UP VYAPAR TRADE SHOW 2025</h1>
        <h2>TRADE · TRUST · TRANSFORMATION</h2>
        <p className="event-dates">29th August to 31st August 2025 | Varanasi, Uttar Pradesh</p>
      </header>

      {/* About Section - Blurred by default */}
      <section 
        className={`about-section ${activeSection === 'about' || !activeSection ? 'highlighted-section' : 'blurred-section'}`}
        onMouseEnter={() => handleSectionHover('about')}
      >
        <h2>About the Event</h2>
        <p>
          U.P. VYAPAR Trade Show 2025 is a mega trade fair that promises to be a dynamic platform 
          for enterprising and forward-thinking business professionals. Co-organized by the 
          <strong> Government of Uttar Pradesh</strong> and <strong>VYAPAR India Association</strong>, 
          this event will bring together diverse sectors, fostering growth and collaboration.
        </p>
      </section>

      {/* Mission/Vision - Blurred by default */}
      <section 
        className={`mission-vision ${activeSection === 'mission' || !activeSection ? 'highlighted-section' : 'blurred-section'}`}
        onMouseEnter={() => handleSectionHover('mission')}
      >
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To provide an inclusive, dynamic, and collaborative platform that empowers 
            <strong> micro, small, medium, and large enterprises</strong> across diverse sectors 
            by fostering trade, innovation, and investment opportunities.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To establish <strong>Uttar Pradesh</strong> as a premier global hub for innovation, 
            entrepreneurship, and sustainable industrial growth, driving the state toward a 
            <strong> USD 1 trillion economy</strong>.
          </p>
        </div>
      </section>

      {/* Focus Sectors - Always highlighted */}
      <section 
        className="sectors-section highlighted-section"
        onMouseEnter={() => handleSectionHover(null)}
      >
        <h2>Key Focus Sectors</h2>
        <div className="sectors-grid">
          {[
            'Agriculture Industry', 'AI & Tech Industry', 'Ayush & Wellness',
            'LED & Lighting', 'Chem-Tech', 'Military & Defence',
            'Electric Vehicles', 'Food Industry', 'Textile Industry',
            'Renewable Energy', 'Pharma', 'Plastic Industry'
          ].map(sector => (
            <div key={sector} className="sector-card">
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* Why Varanasi - Blurred by default */}
      <section 
        className={`why-varanasi ${activeSection === 'varanasi' || !activeSection ? 'highlighted-section' : 'blurred-section'}`}
        onMouseEnter={() => handleSectionHover('varanasi')}
      >
        <h2>Why Varanasi?</h2>
        <ul>
          <li><strong>Rich Cultural & Historical Significance</strong> - Prime location for international exposure</li>
          <li><strong>Strong Business Hub</strong> - Thriving textile, handicraft, and tourism industries</li>
          <li><strong>High Footfall</strong> - Millions of annual visitors from pilgrimage tourism</li>
          <li><strong>Strategic Connectivity</strong> - Well-connected by air, rail, and road</li>
          <li><strong>Cost-Effective Infrastructure</strong> - Affordable venues compared to metro cities</li>
        </ul>
      </section>

      {/* Participation - Always highlighted */}
      <section 
        className="participation highlighted-section"
        onMouseEnter={() => handleSectionHover(null)}
      >
        <h2>Participation Details</h2>
        <div className="participation-cards">
          <div className="card">
            <h3>Exhibitors</h3>
            <p>25+ sectors including agriculture, electronics, EVs, textiles, and food processing</p>
          </div>
          <div className="card">
            <h3>Visitors</h3>
            <p>Buying agents, corporates, investors, distributors, and international traders</p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default About;