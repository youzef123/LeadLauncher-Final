import React from 'react';
import styles from './NinthContainer.module.css';
import Process from "../../assets/Our-Process-Full.webp";

const NinthContainer = () => {

  return (
    <div className={styles.NinthContainer}>
      <h1 className={styles.sectionTitle}>OUR PROCESS</h1>  
      <div className={styles.blueRow}>
          <div className={styles.imageContainer}>
            <img 
              src={Process} 
              alt="Our Process" 
              className={styles.processImage}
            />
          </div>
        </div>
  </div>
  );
};

export default NinthContainer;