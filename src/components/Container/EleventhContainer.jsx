import React from 'react';
import styles from './EleventhContainer.module.css';
import PointerImg from '../../assets/Pointer.png';


const EleventhContainer = () => {

    return (
        <div className={styles.EleventhContainer}>
                <div className={styles.contactContainer}>
                {/* Left Column - Empty/Decorative */}
                <div className={styles.contactLeftColumn}></div>
                
                {/* Middle Column - Image */}
                {/* <div className={styles.contactMiddleColumn}>
                    <img 
                    src={PointerImg}
                    alt="Contact Us" 
                    className={styles.contactImage}
                    />
                </div> */}
                
                {/* Right Column - Form */}
  <div className={styles.contactFormContainer}>
                <h2 className={styles.contactTitle}>Contact Us</h2>
                <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                    type="text" 
                    id="fullName" 
                    className={styles.formInput}
                    placeholder="Enter your full name"
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    className={styles.formInput}
                    placeholder="Enter your email"
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Contact Number</label>
                    <input 
                    type="tel" 
                    id="phone" 
                    className={styles.formInput}
                    placeholder="Enter your phone number"
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="company">Company</label>
                    <input 
                    type="text" 
                    id="company" 
                    className={styles.formInput}
                    placeholder="Enter your company name"
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                    id="message" 
                    className={styles.formTextarea}
                    rows="4"
                    placeholder="Your message here..."
                    ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
                </form>
            </div>
            </div>
        </div>
      );
};

export default EleventhContainer;