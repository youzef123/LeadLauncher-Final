import React from 'react';
import styles from './SecondContainer.module.css';

const SecondContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textItem}>
          <h2 className={styles.heading}>In need of accurate data for your sales team?</h2>
          <p className={styles.subText}>Try our data profiling campaign</p>
        </div>
        
        <div className={styles.textItem}>
          <h2 className={styles.heading}>Want warm leads that you can follow up for future opportunities?</h2>
          <p className={styles.subText}>Consider our proven lead generation service</p>
        </div>
        
        <div className={styles.textItem}>
          <h2 className={styles.heading}>Looking for sales-ready leads that you can speak with at a scheduled day and time?</h2>
          <p className={styles.subText}>Our effective appointment setting program is the answer</p>
        </div>
        
        <div className={styles.textItem}>
          <h2 className={styles.heading}>In search of attendees/signees for an event or web demo?</h2>
          <p className={styles.subText}>We got you covered with our call-to-invite campaign</p>
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;