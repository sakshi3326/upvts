import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/VisitorRegistration.css';
import axios from 'axios';
import Footer from './Footer';
import Lottie from 'lottie-react';
import namasteAnimation from '../assets/images/visitors_meet.json';
const VisitorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    designation: '',
    phoneNo: '',
    category: '',
    newsfeed: '',
    address: '',
    
  });

  const categoryOptions = [
    'student',
    'government sector',
    'retailer',
    'distributor',
    'private sector',
  ];
  const newsfeedOptions = [
    'email',
    'facebook',
    'whatsapp',
    'newspaper',
    'telecalling',
    'outdoor advertising',
    'website',
  ];
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean, message?: string} | null>(null);
  // const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const [showSuccessModal, setShowSuccessModal] = useState(false);

  
  const menuItems = [
    "Home",
    "About UPVTS",
    "Exhibitors",
    "Visitors",
    
    "Contact",
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/visitors', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Registration successful:', response.data);
      setSubmitStatus({
        success: true,
        message: 'Registration successful! Check your email for confirmation.'
      });
      setShowSuccessModal(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        companyName: '',
        email: '',
        designation: '',
        phoneNo: '',
        category: '',
        newsfeed: '',
        address: '',
      });
    } catch (error: any) {
      console.error('Registration failed:', error);
      const errorMessage = error.response?.data?.error || 
                         error.response?.data?.message || 
                         'Registration failed. Please try again.';
      
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  // Add this modal component before the return statement
  const SuccessModal = () => (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className="modal-content">
          <h2>Registration Successful!</h2>
          <p>You have been successfully registered as an Visitor.</p>
          <p>We have sent a confirmation email to {formData.email}, find your attached E-Badge there</p>
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
      {/* Left Half - Fixed Animation */}
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
            <h1>Visitor Registration</h1>
            <p>Fill out the form below to register as a visitor for UPVTS 2025</p>
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
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </div>

              {/* Role Selection */}
              <div className="form-group">
                <label htmlFor="category">Mention Your Role</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select role</option>
                  {categoryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="newsfeed">You heard about us from</label>
                <select
                  id="newsfeed"
                  name="newsfeed"
                  value={formData.newsfeed}
                  onChange={handleChange}
                >
                  <option value="">Select one</option>
                  {newsfeedOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
    {showSuccessModal && <SuccessModal />}
    <Footer/>
  </div>
);
};

export default VisitorRegistration;