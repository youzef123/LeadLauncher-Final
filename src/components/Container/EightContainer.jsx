import React from 'react';
import styles from './EightContainer.module.css';
import Logo from '../../assets/Single-logo.png';


const EightContainer = () => {

    return (
        <div className={styles.EightContainer}>
          <h1 className={styles.sectionTitle}>WHY CHOOSE US</h1>
          <div className={styles.cardsContainer}>
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardLogo}>
                  <img src={Logo} alt="Logo 1" width={107} height={107} />
                </div>
                <h2 className={styles.cardTitle}>Lead Launcher Data And Leads Services</h2>
              </div>
              <div className={styles.cardContent}>
                <p>We truly live by our name so you can only expect leads and data that are healthy to your sales funnel and in turn enables you to shorten your sales cycle and return on investment. The key to a well profiled leads has always been based on how you laid your parameters and how well profilers know your industry. Utilizing the right approach accustomed to your target industry can exponentially increase conversion in return.</p>
              </div>
            </div>
      
            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardLogo}>
                  <img src={Logo} alt="Logo 2" width={107} height={107} />
                </div>
                <h2 className={styles.cardTitle}>Heterogeneous Marketing Approach</h2>
              </div>
              <div className={styles.cardContent}>
                <p>Ensuring higher contact rate, better conversion and as much as possible, sales-ready prospects, our multi-solution marketing approach has opened up so much opportunties for our clients. Marketing solutions have to move with times to be relevant and effective that is why Lead Launcher Prospecting has devised
                this blended approach towards contacting potential customers.</p>
              </div>
            </div>
      
            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardLogo}>
                  <img src={Logo} alt="Logo 3" width={107} height={107} />
                </div>
                <h2 className={styles.cardTitle}>Proven Process
                </h2>
              </div>
              <div className={styles.cardContent}>
                <p>We can only attribute our high client retention rate to the quality of service we provide to clients in major industry across the globe – be it profiled data, pure leads or prequalified meetings. Our mantra revolves around partnering with clients to develop business for them first and nothing is more apparent than the commitment that we get from our clients to continuously use our high-yield marketing and prospecting solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default EightContainer;