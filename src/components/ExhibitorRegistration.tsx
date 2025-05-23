import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/RegistrationForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Lottie from 'lottie-react';
import namasteAnimation from '../assets/images/namaste_animation.json';


const ExhibitorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    gstNo: '',
    phoneNo: '',
    email: '',
    city: '',
    pincode: '',
    stallArea: '',
    additionalOptions: {
      accomodation: false,
      transportation: false,
      brochure: false,
      display: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
const [showSuccessModal, setShowSuccessModal] = useState(false);
  const stallAreaOptions = [
    '9 sqm (3x3)',
    '12 sqm (3x4)',
    '15 sqm (3x5)',
    '18 sqm (3x6)',
    'Bare Space',
  ];

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      additionalOptions: {
        ...prev.additionalOptions,
        [name]: checked
      }
    }));
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/exhibitors', 
        formData
      );
      console.log('Registration successful:', response.data);
      setSubmitStatus({
        success: true,
        message: 'Registration submitted successfully! Check your email for confirmation.'
      });
      setShowSuccessModal(true);
      // Optional: Reset form after successful submission
      setFormData({
        name: '',
        companyName: '',
        gstNo: '',
        phoneNo: '',
        email: '',
        city: '',
        pincode: '',
        stallArea: '',
        additionalOptions: {
          accomodation: false,
          transportation: false,
          brochure: false,
          display: false
        }
      });
 // Create this route
    } catch (error: any) {
      console.error('Registration failed:', error);
      const errorMessage = error.response?.data?.error || 
                         'Registration failed. Please try again.';
      
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    }finally {
      setIsSubmitting(false);
    }
  };

  // Add this modal component before the return statement
  const SuccessModal = () => (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className="modal-content">
          <h2>Registration Successful!</h2>
          <p>You have been successfully registered as an exhibitor.</p>
          <p>We have sent a confirmation email to {formData.email}</p>
          <button 
            onClick={() => setShowSuccessModal(false)}
            className="modal-close-btn"
          >
            Close
          </button>
        </div>
      </div>
      
    </div>
  );

  return (
  <div className="registration-page">
    <div className="fixed-navbar">
      <Navbar menuItems={menuItems} />
    </div>
    
    <div className="split-screen-container">
      {/* Left Half - Fixed Animation Only */}
      <div className="left-half">
        <div className="animation-container">
          <Lottie 
            animationData={namasteAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
      
      {/* Right Half - Scrollable Registration Form */}
      <div className="right-half">
        <div className="registration-container">
          <div className="registration-header">
            <h1>Exhibitor Registration</h1>
            <p>Fill out the form below to register as an exhibitor for UPVTS 2025</p>
          </div>
{submitStatus && (
            <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-grid">
              {/* Personal Information */}
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName">Company Name*</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gstNo">GST Number*</label>
                <input
                  type="text"
                  id="gstNo"
                  name="gstNo"
                  value={formData.gstNo}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Contact Information */}
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number*</label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pincode">Pincode*</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Stall Information */}
              <div className="form-group">
                <label htmlFor="stallArea">Stall Area Required*</label>
                <select
                  id="stallArea"
                  name="stallArea"
                  value={formData.stallArea}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Stall Area</option>
                  {stallAreaOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Options */}
            <div className="additional-options">
              <h3>Additional Requirements</h3>
              <div className="checkbox-group">
                {Object.entries(formData.additionalOptions).map(([key, value]) => (
                  <label key={key} className="checkbox-label">
                    <input
                      type="checkbox"
                      name={key}
                      checked={value}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkmark"></span>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
    {showSuccessModal && <SuccessModal />}
    <Footer />
  </div>
);
};

export default ExhibitorRegistration;