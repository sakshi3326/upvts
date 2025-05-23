import React, { useState, useEffect, useRef } from "react";
import "../css/Landing.css";
import logo from "../../src/assets/upvts_logo.png"; // Update this path
import leftPerson from "../../src/assets/pm_image.png"; // Update path
import rightPerson from "../../src/assets/cm_image.png"; // Update path
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FlippingCards from "./FlippingCards";
import border from "../assets/images/border.jpg";
import watermarkImage from '../assets/images/watermark.png';

const LandingPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const menuItems = ["Home","About UPVTS", "Exhibitors", "Visitors", "Contact"];

  const navigate = useNavigate();

  // Stats data
  const stats = [
    { id: 1, target: 400, suffix: "+", title: "Exhibitors" },
    { id: 2, target: 40000, suffix: "+", title: "B2B Visitors" },
    { id: 3, target: 40000, suffix: "+", title: "B2C Visitors" },
    { id: 4, target: 52000, suffix: "+", title: "Sqm. area" },
  ];

  const [countedValues, setCountedValues] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const increment = stat.target / (duration / 16); // 60fps

      const timer = setInterval(() => {
        setCountedValues((prev) => {
          const newValues = [...prev];
          if (newValues[index] < stat.target) {
            newValues[index] = Math.ceil(newValues[index] + increment);
            if (newValues[index] > stat.target) {
              newValues[index] = stat.target;
            }
            return newValues;
          }
          clearInterval(timer);
          return prev;
        });
      }, 16);
    });
  };
  return (
    <div className="website-container">
      <div className="landing-container">
        <video
          className="landing-video"
          src="https://upinternationaltradeshow.com/wp-content/uploads/2025/03/UPITS-WEBSITE-VIDEOS-Exhibition.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Use the Navbar component */}
        <Navbar menuItems={menuItems} />

        <div className="content-overlay">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <button
            className="register-button"
            onClick={() => setShowPopup(true)}
          >
            REGISTER NOW
          </button>

          <h1 className="main-heading">TRADE·TRUST·TRANSFORMATION</h1>
          <p className="subheading">Organised by Vyapar India Association</p>
        </div>

        {/* Bottom corner images */}
        <div className="bottom-left-person">
          <img
            src="https://www.pngmart.com/files/22/Narendra-Modi-Transparent-PNG.png"
            alt="Left person"
            className="person-image"
          />
        </div>
        <div className="bottom-right-person">
          <img src={rightPerson} alt="Right person" className="person-image" />
        </div>
      </div>
      {/* Stats Section */}
      <div className="stats-section" ref={statsRef}>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">
                {countedValues[index]}
                {stat.suffix}
              </div>
              <div className="stat-title">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <div className="info-content">
          <div className="info-left">
            <h2 className="info-heading">
              Explore India’s Leading Exporter State and Rising Sourcing Hub –
              All Under One Roof
            </h2>
            <img
              src="https://upinternationaltradeshow.com/wp-content/uploads/2025/03/pattern-21-img-min-300x82.png" // Update path
              alt="About UPVTS"
              className="info-image"
            />
          </div>
          <div className="info-right">
            <p className="info-paragraph">
              U.P. VYAPAR Trade Show 2025 is a mega trade fair that promises to
              be a dynamic platform for enterprising and forward-thinking
              business professionals. Scheduled from 29 Aug to 31 2025 in Uttar
              Pradesh, this event will bring together diverse sectors, fostering
              growth and collaboration. U.P. VYAPAR Trade Show is where
              expertise meets opportunity, creating an environment for
              competitive excellence and knowledge exchange. Don‘t miss this
              chance to connect, learn, and thrive!
            </p>
          </div>
        </div>
      </div>
      <div className="cards-section">
        <div className="cards-container">
          {/* Card 1 */}
          <div className="card">
            <h3 className="card-title">When</h3>
            <p className="card-text">29-31 AUGUST, 2025</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <h3 className="card-title">Where</h3>
            <p className="card-text">Rudraksh International Cooperation & Convention Centre, Varanasi, Uttar Pradesh, India</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <h3 className="card-title">Business Hours</h3>
            <p className="card-text">10AM-5PM</p>
          </div>

          {/* Card 4 */}
          <div className="card">
            <h3 className="card-title">Public Hours</h3>
            <p className="card-text">10AM-5PM</p>
          </div>
        </div>
      </div>

      {/* Image Separator Border */}
      <div className="section-separator">
        <img
          src={border}
          alt="Decorative separator"
          className="separator-image"
        />
      </div>

      <div className="features-section">
         {/* Watermark Background */}
  <div className="watermark-background">
    <img 
      src={watermarkImage} // Your imported PNG image
      alt="Watermark" 
      className="watermark-image"
    />
  </div>
        <div className="heading-container">
          <h2 className="section-heading">
            What makes Uttar Pradesh choicest Business destination
          </h2>
        </div>

        <div className="features-grid">
          {/* Row 2 */}
          <div className="feature-row">
            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                'Nivesh Mitra,' a dedicated single-window system to make
                compliances simple and user-friendly{" "}
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Favourable business environment with government incentives and
                support{" "}
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Large and rapidly growing consumer market and large pool of
                skilled and semi-skilled labour{" "}
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Emerging industries including IT, e-commerce, and renewable
                energy{" "}
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="feature-row">
            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Financial accessibility through banks, VCs, and angel investors
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Infrastructure development with new roads, highways, airports,
                and railways
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Government support through tax incentives, subsidies, and
                training programs
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Strategic location in the heart of India with access to major
                markets
              </p>
            </div>
          </div>
          {/* Row 4 */}
          <div className="feature-row">
            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Rich entrepreneurial culture with access to mentors, advisors,
                and business networks
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Online Incentive Management System - digital platform to track
                all stages of incentives approval
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                To overcome interdepartmental resistance, providing NOC within
                72 hours for 1,000 days
              </p>
            </div>
            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Financial accessibility through banks, VCs, and angel investors
              </p>
            </div>
          </div>
          {/* Row 1 */}
          <div className="feature-row">
            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Abundant resources and tremendous potential for industrial
                development
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">Second in ease of doing business.</p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Transparency and information access
              </p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">•</div>
              <p className="feature-text">
                Various reformative steps are being taken to create a holistic
                ecosystem for industrial development with 25 Sectoral Policies
                are in place to promote Make in India.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits-section">
        <div className="focusWrap">
          <h2 className="section-headingfocus">Focus Sectors</h2>

        <p className="intro-paragraph">
          UPVTS offers unparalleled opportunities for textile businesses to
          expand their global reach. With over 10,000 qualified visitors from
          50+ cities, our exhibition provides the perfect platform to showcase
          your products, network with industry leaders, and generate
          high-quality business leads.
        </p>

        <div className="benefits-columns">
          {/* Column 1 */}
          <div className="benefits-column">
            <h3 className="sub-heading">Product & Service</h3>
            <ul className="benefits-list">
              <li>Agriculture & Allied Sectors</li>
              <li>Automobile/EV/Auto Components</li>
              <li>Defence Pavilion</li>
              <li>E-Commerce, Electronic Industry</li>
              <li>Foof Safety & Drug Administration</li>
              <li>Leather Industry</li>
              <li>ODOP Display</li>
              <li>Retail Sector</li>
              <li>IT & Smart City Mission, Uttar Pradesh</li>
              <li>And Many Others...</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="benefits-column">
            <h3 className="sub-heading">Government Schemens</h3>
            <ul className="benefits-list">
              <li>Meet 100+ top textile manufacturers</li>
              <li>Connect with industry associations</li>
              <li>Government trade representatives</li>
              <li>Raw material suppliers</li>
              <li>Technology providers</li>
              <li>Logistics partners</li>
              <li>Quality certification agencies</li>
              <li>Sustainability experts</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="benefits-column">
            <h3 className="sub-heading">Government Policies</h3>
            <ul className="benefits-list">
              <li>
                Uttar Pradesh Export Promotion Policy – 2020-25 (UPEP Policy –
                2020-25)
              </li>
              <li>
                Uttar Pradesh Textile and Garmenting Policy 2022 (UPTG Policy –
                2022)
              </li>
              <li>And other 20 + sectoral policies…</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <div className="testimonials-section">
        <h2 className="section-heading">Event At A Glance</h2>

        <div
          className="carousel-container"
          style={{
            width: "100vw",
            marginLeft: "-50vw",
            left: "50%",
            position: "relative",
          }}
        >
          <div
            className="carousel-track"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              padding: "0 5%",
              boxSizing: "border-box",
            }}
          >
            {/* Replace your static cards with the flipping cards component */}
            <FlippingCards />
          </div>
        </div>
      </div>
      <div className="two-column-section">
        {/* Left Column */}
        <div className="column-half">
          <h2 className="column-heading">Exhibitor Benefits</h2>
          <p className="column-paragraph">
            Showcase your products to thousands of qualified buyers and industry
            professionals at UPVTS 2025. Gain unparalleled exposure in the
            textile sector.
          </p>

          <div className="bullet-columns">
            <div className="bullet-column">
              <ul className="bullet-list">
                <li>Dedicated exhibition space</li>
                <li>Product catalog listing</li>
                <li>Pre-scheduled B2B meetings</li>
              </ul>
            </div>
            <div className="bullet-column">
              <ul className="bullet-list">
                <li>Press release distribution</li>
                <li>Networking receptions</li>
                <li>Market intelligence reports</li>
                <li>Post-event lead follow-up</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="column-half">
          <h2 className="column-heading">Visitor Benefits</h2>
          <p className="column-paragraph">
            Discover the latest textile innovations and connect with
            manufacturers from across the globe at Asia's premier textile
            sourcing platform.
          </p>

          <div className="bullet-columns">
            <div className="bullet-column">
              <ul className="bullet-list">
                <li>Free entry to exhibition</li>
                <li>Matchmaking services</li>
                <li>Trend forecasting sessions</li>
                <li>Product demonstrations</li>
              </ul>
            </div>
            <div className="bullet-column">
              <ul className="bullet-list">
                <li>Networking lounge access</li>
                <li>Buyer concierge service</li>
                <li>Exclusive product launches</li>
                <li>VIP buyer privileges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="quotes-section"> */}
      {/* <h2 className="section-heading">Words From Dignitaries</h2> */}

      {/* <div className="quotes-carousel"> */}
      {/* Quote 1 */}
      {/* <div className="quote-card">
            <div className="quote-box">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                UPVTS has transformed into Asia's premier textile sourcing
                platform, creating unparalleled business opportunities for the
                entire industry.
              </p>
              <div className="quote-person">
                <img
                  src="https://example.com/path-to-image1.jpg"
                  alt="Dignitary 1"
                  className="person-image2"
                />
                <div className="person-info">
                  <h4 className="person-name">Mr. Rajesh Sharma</h4>
                  <p className="person-title">
                    President, Textile Association of India
                  </p>
                </div>
              </div>
            </div>
          </div> */}

      {/* Quote 2 */}
      {/* <div className="quote-card">
            <div className="quote-box">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                The innovation and quality displayed at UPVTS makes it a
                must-attend event for any serious textile professional
                worldwide.
              </p>
              <div className="quote-person">
                <img
                  src="https://example.com/path-to-image2.jpg"
                  alt="Dignitary 2"
                  className="person-image2"
                />
                <div className="person-info">
                  <h4 className="person-name">Ms. Priya Patel</h4>
                  <p className="person-title">CEO, Global Textile Council</p>
                </div>
              </div>
            </div>
          </div> */}

      {/* Quote 3 */}
      {/* <div className="quote-card">
            <div className="quote-box">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                Our participation in UPVTS resulted in business connections that
                doubled our export turnover within a year.
              </p>
              <div className="quote-person">
                <img
                  src="https://example.com/path-to-image3.jpg"
                  alt="Dignitary 3"
                  className="person-image2"
                />
                <div className="person-info">
                  <h4 className="person-name">Mr. Amit Kumar</h4>
                  <p className="person-title">MD, Supreme Textiles Ltd.</p>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      <div className="partners-section">
       <div className="wrapPartners">
         <h2 className="section-heading">Sponsored Partners</h2>

        <div className="partners-container">
          <div className="partners-carousel">
            {/* First set of logos */}
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.87ANT9iZDVnhxg5EValthgHaC6&pid=Api&P=0&h=180"
              alt="Partner 1"
              className="partner-logo"
            />
            <img
              src="https://www.adanisolar.com/-/media/Project/AdaniSolar/Common/Adani-Solar-library"
              alt="Partner 2"
              className="partner-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amul_official_logo.svg/1200px-Amul_official_logo.svg.png"
              alt="Partner 3"
              className="partner-logo"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQc3kd4TNbPfigq-bMTq6njdRTwU6S3YbeDA&s"
              alt="Partner 4"
              className="partner-logo"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPdvsEUmrIf4RHf7bftzU-8PGsZjJ9OtfFQ&s"
              alt="Partner 5"
              className="partner-logo"
            />
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/12/luminous-logo-freelogovectors.net_.png"
              alt="Partner 6"
              className="partner-logo"
            />
            <img
              src="https://getvectorlogo.com/wp-content/uploads/2018/10/agricultural-and-processed-food-products-export-development-authority-apeda-vector-logo.png"
              alt="Partner 7"
              className="partner-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/John_Deere_logo.svg/1200px-John_Deere_logo.svg.png"
              alt="Partner 8"
              className="partner-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cipla_logo.svg/1024px-Cipla_logo.svg.png"
              alt="Partner 9"
              className="partner-logo"
            />

            {/* Duplicate set for seamless looping */}
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.87ANT9iZDVnhxg5EValthgHaC6&pid=Api&P=0&h=180"
              alt="Partner 1"
              className="partner-logo"
            />
            <img
              src="https://www.adanisolar.com/-/media/Project/AdaniSolar/Common/Adani-Solar-library"
              alt="Partner 2"
              className="partner-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amul_official_logo.svg/1200px-Amul_official_logo.svg.png"
              alt="Partner 3"
              className="partner-logo"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQc3kd4TNbPfigq-bMTq6njdRTwU6S3YbeDA&s"
              alt="Partner 4"
              className="partner-logo"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPdvsEUmrIf4RHf7bftzU-8PGsZjJ9OtfFQ&s"
              alt="Partner 5"
              className="partner-logo"
            />
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/12/luminous-logo-freelogovectors.net_.png"
              alt="Partner 6"
              className="partner-logo"
            />
            <img
              src="https://getvectorlogo.com/wp-content/uploads/2018/10/agricultural-and-processed-food-products-export-development-authority-apeda-vector-logo.png"
              alt="Partner 7"
              className="partner-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/John_Deere_logo.svg/1200px-John_Deere_logo.svg.png"
              alt="Partner 8"
              className="partner-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cipla_logo.svg/1024px-Cipla_logo.svg.png"
              alt="Partner 9"
              className="partner-logo"
            />
          </div>
        </div>
       </div>
      </div>
      <Footer />
      {/* Registration Popup */}
      {showPopup && (
        <div className="registration-popup-overlay">
          <div className="registration-popup">
            <img src={logo} alt="Company Logo" className="popup-logo" />

            <p className="popup-description">
              Join UPVTS 2025 - To establish Uttar Pradesh as a premier global
              hub for innovation, entreneurship, and sustainable industrial
              growth, driving the state toward a USD 1 trillion economy.
            </p>

            <div className="registration-options">
              <button
                className="registration-option-btn exhibitor-btn"
                onClick={() => {
                  setShowPopup(false);
                  navigate("/exhibitor-registration");
                }}
              >
                Exhibitor Registration
              </button>
              <button
                className="registration-option-btn visitor-btn"
                onClick={() => {
                  setShowPopup(false);
                  navigate("/visitor-registration");
                }}
              >
                Visitor Registration
              </button>
              {/* <button className="registration-option-btn overseas-btn">
                Overseas Buyer Registration
              </button> */}
            </div>

            <button
              className="close-popup-btn"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
