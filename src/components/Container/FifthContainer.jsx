import React from "react";
import styles from "./FifthContainer.module.css";
import LeadGeneration from "../../assets/Lead-Gen.webp";


const FifthContainer = () => {

  return (
    <div className={styles.fifthContainer}>
      <div className={styles.splitContainer}>
          <div className={styles.leftContainer}>
              <div className={styles.headingContainer}>
                  <h2 className={styles.sectionTitle}>Lead Generation</h2>
                  <div className={styles.underline}></div>
              </div>
              <p className={styles.dataParagraph}>
                  Targeted – that's how we simply describe our lead generation solution. We painstakingly dive into your parameters to sift just the right prospects to your sale pipeline. Combining voice and non-voice components, we expertly handle this rigorous task on your behalf.
              </p>
              <button className={styles.readMoreBtn}>
                  Read More
                  <span className={styles.hoverEffect}></span>
              </button>
          </div>
          <div className={styles.rightContainer}>
              <img 
                  src={LeadGeneration} 
                  alt="Lead Generation Illustration" 
                  className={styles.bannerImage}
              />
          </div>
      </div>
  </div>
  );
};

export default FifthContainer;