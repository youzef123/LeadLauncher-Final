import { useAnimatedCount } from '../../hooks/useAnimatedCount';
import styles from './FinanceContainer.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function ITContainer() {
  const targetValues = [76, 10090, 94]; // Clients, Leads, Retention %
  
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
        <h2 className={styles.sectionHeader}>IT and Software</h2>
        <div className={styles.firstSection}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Left content here */}
          </div>
          {/* Right Column */}
          <div className={styles.rightColumn} >
            <h2>Our IT & Software Expertise</h2>
            <p>Majority of our marketing experiences are in the IT and Software space. From start up and mobile application firms to large IT and software companies, we've successfully run several marketing campaigns that have resulted to substantial new clients and increase in overall revenue.</p>
            <p>Our marketing experts are highly skilled in generating qualified leads in these verticals:</p>
            <div className={styles.servicesList}>
              {/* Left Column */}
              <div className={styles.servicesColumn} style={getAnimationStyleRight(0)}>
                <ul>
                  <li>Software development</li>
                  <li>Software Testing</li>
                  <li>CRM/ ERP/ EHR/ EMR/ CMS</li>
                  <li>Web and mobile application development</li>
                  <li>Software as a service (SaaS) solutions</li>
                  <li>Ecommerce Platform</li>
                  <li>Data integration</li>
                  <li>Business Intelligence</li>
                  <li>Scheduling and time management software</li>
                </ul>
              </div>
              
              {/* Right Column */}
              <div className={styles.servicesColumn} style={getAnimationStyleRight(0)}>
                <ul>
                  <li>IT Staffing</li>
                  <li>Managed IT Services</li>
                  <li>IT Infrastructure</li>
                  <li>Disaster and Back up Recovery Solutions</li>
                  <li>Data and Analytics</li>
                  <li>Telecom/ Mobile Solutions</li>
                  <li>Internet of Things</li>
                  <li>Cyber Security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Animated Stats */}
        <div className={styles.secondSection} ref={sectionRef}>
          <h2 className={styles.sectionTitle} style={getAnimationStyleBottom(0)}>IT and Software:</h2>
          
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