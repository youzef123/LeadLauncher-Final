import React from 'react';
import styles from './AboutUsContainer.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import logo from "../../assets/LL-logo-filled.png";
import backgroundImage from "../../assets/onp-about-us-scaled.webp"; 

export default function AboutUsContainer() {
  return (
    <>
      <Header />
      
      <div className={styles.parallaxBackground} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.parallaxContent}>
          <h2 className={styles.companyTitle}>About the company</h2>
          
          <div className={styles.logoContainer}>
            <img src={logo} alt="OnPoint Prospecting Logo" className={styles.logo} />
          </div>

          <div className={styles.aboutText}>
            <p className={styles.paragraph}>
              Conceived out of first hand experience, OnPoint Prospecting Inc embodies the values and goals of what an outsourced data and marketing firm should be. We envision a company that can truly leverage several marketing initiatives for our clients from raw data to refined leads through proper prospecting. Our precision in implementing our process across core services arises from the years of combined experience of our marketing experts.
            </p>
            
            <p className={styles.paragraph}>
              Nowadays, prospecting can mean a lot of things relative to how our clients see their potential customers that's why we ensure to really dive in to the problem and identify the right solution prior to program implementation.
            </p>
            
            <p className={styles.paragraph}>
              Our rigorous way of setting up prospecting campaigns says a lot about the kind of partnership we'd like to build with our clients. We are committed to help you grow your business so we heavily lean on the quality of service our teams can render.
            </p>
            
            <p className={styles.paragraph}>
              For our valued clients, OnPoint Prospecting Inc will always stay sharp. Prospecting always done On point.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}