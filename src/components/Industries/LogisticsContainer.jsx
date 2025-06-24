import { useAnimatedCount } from '../../hooks/useAnimatedCount';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './LogisticsContainer.module.css';


export default function LogisticsContainer() {
  const targetValues = [51, 6120, 91]; // Clients, Leads, Retention %
  
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
        <h2 className={styles.sectionHeader}>Logistics</h2>
        <div className={styles.firstSection}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Left content here */}
          </div>
          {/* Right Column */}
          <div className={styles.rightColumn} >
            <h2>Our IT & Software Expertise</h2>
            <p>One of the most successful industries that we've partnered with. Over and over, we've proven how effective our lead generation and appointment setting solutions are, since most of our clients in this industry have extended their engagements with OnPoint Prospecting Inc way longer than what the contracts require.</p>
            <p>Key areas we’ve worked with :

</p>
            <div className={styles.servicesList}>
              {/* Left Column */}
              <div className={styles.servicesColumn} style={getAnimationStyleRight(0)}>
                <ul>
                  <li>General Logistics</li>
                  <li>Fleet management</li>
                  <li>Consulting</li>
                  <li>Tracking software</li>
                </ul>
              </div>
              
              {/* Right Column */}
              <div className={styles.servicesColumn} style={getAnimationStyleRight(0)}>
                <ul>
                  <li>Supply Chain</li>
                  <li>Transportation and Distribution</li>
                  <li>3PL</li>
                  <li>Staffing and recruiting
</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Animated Stats */}
        <div className={styles.secondSection} ref={sectionRef}>
          <h2 className={styles.sectionTitle} style={getAnimationStyleBottom(0)}>Logistics:</h2>
          
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