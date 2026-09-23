import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { mentorData } from '../data/mentorData';
import { FiMail, FiPhone, FiMapPin, FiUser, FiBriefcase } from 'react-icons/fi';

// Initialize EmailJS with your public key
// Get your free key at https://www.emailjs.com/
emailjs.init('sTNv4omk4vL1gmyMZ');

const Contact = () => {
  const location = useLocation();
  const { personalInfo } = mentorData;
  const queryParams = new URLSearchParams(location.search);
  const isFromEmailLink = queryParams.get('source') === 'email';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: isFromEmailLink ? 'Contact Inquiry' : '',
    message: isFromEmailLink ? `To: ${personalInfo.email}\n\nYour message will be sent to ${personalInfo.email}\n\n` : ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    // Send email using EmailJS
    setFormStatus('sending');
    
    const templateParams = {
      to_email: 'carolcrl23@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
    };

    emailjs.send(
      'service_rxryfr7',  // Replace with your EmailJS service ID
      'template_uk70cld',  // Replace with your EmailJS template ID
      templateParams
    )
    .then(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Get in touch for academic collaborations and inquiries</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="contact-grid">
          
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <FiUser className="contact-icon" />
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Name</h3>
                  <p>{personalInfo.name}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <FiBriefcase className="contact-icon" />
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Designation</h3>
                  <p>{personalInfo.designation}, {personalInfo.department}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Address</h3>
                  <p>{personalInfo.institution}<br/>{personalInfo.location}</p>
                </div>
              </div>
              {personalInfo.email !== "placeholder@example.com" && (
                <div className="contact-info-item">
                  <FiMail className="contact-icon" />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h3>
                    <p><a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--color-accent)' }}>{personalInfo.email}</a></p>
                  </div>
                </div>
              )}
              {personalInfo.phone !== "+91 0000000000" && (
                <div className="contact-info-item">
                  <FiPhone className="contact-icon" />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Phone</h3>
                    <p><a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--color-accent)' }}>{personalInfo.phone}</a></p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send a Message</h2>
            {isFromEmailLink && (
              <div style={{ padding: '1rem', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '0.375rem', marginBottom: '1.5rem', border: '1px solid #06b6d4' }}>
                ✉️ <strong>Email will be sent to:</strong> {personalInfo.email}
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              
              {formStatus === 'success' && (
                <div style={{ padding: '1rem', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '0.375rem', marginBottom: '1.5rem' }}>
                  Your message has been sent successfully!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '0.375rem', marginBottom: '1.5rem' }}>
                  Please fill in all required fields.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
