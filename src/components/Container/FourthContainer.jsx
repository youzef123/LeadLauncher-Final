import React from "react";
import styles from "./FourthContainer.module.css";
import DataprofilingBanner from "../../assets/Data-Profiling.webp";

const FourthContainer = () => {
  return (
    <div className={styles.fourthContainer}>
        <div className={styles.splitContainer}>
            <div className={styles.leftContainer}>
                <img 
                    src={DataprofilingBanner} 
                    alt="Data Profiling Banner" 
                    className={styles.bannerImage}
                />
            </div>
            <div className={styles.rightContainer}>
            <div className={styles.headingContainer}>
                <h2 className={styles.sectionTitle}>Data Profiling</h2>
                <div className={styles.underline}></div>
            </div>
            <p className={styles.dataParagraph}>
                Data and only data that spell business for you. From profiling your target audience, 
                market research and testing your untapped markets to gathering specific information 
                about your prospects.
            </p>

                        <div className={styles.buttonContainer}>
                          <button className={styles.readMoreBtn}>
                              Read More
                              <span className={styles.hoverEffect}></span>
                          </button>
                          </div>
        </div>
        </div>
    </div>
);
};

export default FourthContainer;