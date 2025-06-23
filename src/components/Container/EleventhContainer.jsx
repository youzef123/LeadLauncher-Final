import React, { useState } from 'react';
import styles from './EleventhContainer.module.css';

const EleventhContainer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);



  try {
    // Use x-www-form-urlencoded to avoid preflight
    const formBody = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
        });

        const response = await fetch('https://script.google.com/macros/s/AKfycbzaab_BI76NZeaTStcWFZ5qXABYw1KBR9YvFDlD1Qg56jkf6ImmRKIlY8Zw4fddS9Ky/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
        });

    

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className={styles.EleventhContainer}>
      <div className={styles.contactContainer}>
        <div className={styles.contactLeftColumn}></div>
        
        <div className={styles.contactFormContainer}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          
          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              There was an error submitting your form. Please try again.
            </div>
          )}

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                className={styles.formInput}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.formInput}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Contact Number</label>
              <input 
                type="tel" 
                id="phone" 
                className={styles.formInput}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="company">Company</label>
              <input 
                type="text" 
                id="company" 
                className={styles.formInput}
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className={styles.formTextarea}
                rows="4"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EleventhContainer;