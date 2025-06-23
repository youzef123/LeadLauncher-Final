import React from "react";
import styles from './SixthContainer.module.css';
import Appointment from "../../assets/Appointment.webp";


 const SixthContainer = () => {
   return (
     <div className={styles.sixthContainer}>
         <div className={styles.splitContainer}>
                     <div className={styles.leftContainer}>
                         <img 
                             src={Appointment} 
                             alt="Appointment Banner" 
                             className={styles.bannerImage}
                         />
                     </div>
                     <div className={styles.rightContainer}>
                     <div className={styles.headingContainer}>
                         <h2 className={styles.sectionTitle}>Appointment Setting
                         </h2>
                         <div className={styles.underline}></div>
                     </div>
                     <p className={styles.dataParagraph}>
                     Let Lead Launcher Prospecting Inc fill your calendar with solid and highly qualified meetings, be it phone, in person, or via web demo. We truly value your time so we only focus on setting up meetings with prospects that have higher chances of conversion.
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

 export default SixthContainer;