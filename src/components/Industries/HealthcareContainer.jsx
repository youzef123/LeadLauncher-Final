import { useAnimatedCount } from '../../hooks/useAnimatedCount';
import styles from './HealthcareContainer.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function HealthcareContainer() {
  const targetValues = [36, 4309, 82]; // Clients, Leads, Retention %
  
  const {
    counts: [clientCount, leadCount, retentionCount],
    sectionRef,
    getAnimationStyleBottom, 
    getAnimationStyleLeft,
    getAnimationStyleRight
  } = useAnimatedCount(targetValues, {
    startDelay: 300,
    staggerDelay: 400,
    animationDuration: 1500,
    direction: 'up', // Can be changed to 'down', 'left', or 'right'
    initialOffset: 50,
    fade: true
  });

  return (   
    <>
      <Header />
      <div className={styles.container}>
        {/* First Section */}
        <h2 className={styles.sectionHeader}>Healthcare
</h2>
        <div className={styles.firstSection}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Left content here */}
          </div>
          {/* Right Column */}
          <div className={styles.rightColumn} >
          
            <p>Whether you provide medical services/products or other related healthcare solutions, Onpoint Prospecting Inc has the right marketing tools to get those sales-ready leads for you. We fully understand how meticulous your industry can be, so we devised a strategy where we get to deliver on our goal of filling up your pipeline and at the same time keeps the integrity and quality of leads being submitted.
</p>
            <p>We already helped a lot of clients who specialize in:</p>
            <div className={styles.servicesList}>
              {/* Left Column */}
              <div className={styles.servicesColumn} style={getAnimationStyleRight(0)}>
                <ul>
                  <li>EMR/EHR Software</li>
                  <li>Consulting Services</li>
                  <li>Medical Supplies (Masks/PPEs)</li>
                  <li>Online Drugstores/Delivery</li>
                  <li>Dental Software</li>
                  <li>Back Brace</li>
                </ul>
              </div>
              
              {/* Right Column */}
              <div className={styles.servicesColumn} style={getAnimationStyleRight(0)}>
                <ul>
                   <li>Outpatient Services</li>
                    <li>Medical Insurance</li>
                    <li>Personal Insurance</li>
                    <li>Medical Records</li>
                    <li>Collections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Animated Stats */}
        <div className={styles.secondSection} ref={sectionRef}>
          <h2 className={styles.sectionTitle} style={getAnimationStyleBottom(0)}>Healthcare:</h2>
          
          <div className={styles.threeColumnContainer}>
            <div className={styles.column} style={getAnimationStyleBottom(0)}>
              <h3 className={styles.columnTitle}>{clientCount}</h3>
              <p className={styles.columnText}>Total Clients</p>
            </div>
            
            <div className={styles.column} style={getAnimationStyleBottom(1)}>
              <h3 className={styles.columnTitle}>{leadCount.toLocaleString()}</h3>
              <p className={styles.columnText}>Total Leads Submitted</p>
            </div>
            
            <div className={styles.column} style={getAnimationStyleBottom(2)}>
              <h3 className={styles.columnTitle}>{retentionCount}%</h3>
              <p className={styles.columnText}>Retention Rate</p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className={styles.thirdSection} style={getAnimationStyleBottom(0)}>
          <h2>Get in touch with our sales team now so we can talk about your requirements and how we can implement a lead generation campaign unique to your business.</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}