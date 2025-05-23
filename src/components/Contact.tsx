import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
const Contact: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const menuItems = [
    "Home",
    "About UPVTS",
    "Exhibitors",
    "Visitors",
    // "Downloads",
    // "Press & Media",
    "Contact",
  ];


  return (
    <motion.div
      className="contact-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className= "fixed-navbar">
        <Navbar menuItems={menuItems} />
        </div>
      <motion.h1 variants={itemVariants}>Contact Information</motion.h1>
      
      <motion.div 
        className="contact-card"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="contact-details">
          <motion.div 
            className="contact-item"
            whileHover={{ x: 5 }}
            variants={itemVariants}
          >
            <div className="contact-icon">📞</div>
            <span className="contact-text">+91 8160480947</span>
          </motion.div>
          
          <motion.div 
            className="contact-item"
            whileHover={{ x: 5 }}
            variants={itemVariants}
          >
            <div className="contact-icon">✉️</div>
            <span className="contact-text">info@uttarpradeshindustrialtradeshow.com</span>
          </motion.div>
          
          <motion.div 
            className="contact-item"
            whileHover={{ x: 5 }}
            variants={itemVariants}
          >
            <div className="contact-icon">📍</div>
            <span className="contact-text">Varanasi, India</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Inline CSS */}
      <style>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Poppins', sans-serif;
          padding: 40px 20px;
          box-sizing: border-box;
        }

        h1 {
          font-size: 2.8rem;
          margin-bottom: 40px;
          color: #2c3e50;
          font-weight: 600;
          background: linear-gradient(to right, #3498db, #2c3e50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin: 25px 0;
          font-size: 1.2rem;
          color: #555;
        }

        .contact-icon {
          margin-right: 20px;
          font-size: 1.5rem;
          min-width: 30px;
          text-align: center;
          color: #3498db;
        }

        .contact-text {
          color: #333;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }
          
          .contact-card {
            padding: 30px 20px;
          }
          
          .contact-item {
            font-size: 1rem;
          }
        }
      `}</style>
      <Footer/>
    </motion.div>
  );
};

export default Contact;