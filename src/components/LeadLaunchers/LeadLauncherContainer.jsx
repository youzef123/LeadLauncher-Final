import { useState, useRef, useEffect } from 'react';
import styles from './LeadLauncherContainer.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SecondContainer from './SecondContainer';
import Logo from '../../assets/Single-logo.png';


export default function LeadLauncherContainer() {
    
 
    
  
    const [showScrollArrow, setShowScrollArrow] = useState(false);
    const homeRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollArrow(true);
            } else {
                setShowScrollArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
       <>
      <Header />
      <div className={styles.LeadLauncherContainer}>
        <h1 className={styles.sectionTitle} >WHY LEAD LAUNCHERS?</h1>
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
              <p>
                We truly live by our name so you can only expect leads and data that are healthy to your sales funnel and in turn enables you to shorten your sales cycle and return on investment. The key to a well profiled leads has always been based on how you laid your parameters and how well profilers know your industry. Utilizing the right approach accustomed to your target industry can exponentially increase conversion in return.
              </p>
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
              <p>
                Ensuring higher contact rate, better conversion and as much as possible, sales-ready prospects, our multi-solution marketing approach has opened up so much opportunties for our clients. Marketing solutions have to move with times to be relevant and effective that is why Lead Launcher Prospecting has devised this blended approach towards contacting potential customers.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardLogo}>
                <img src={Logo} alt="Logo 3" width={107} height={107} />
              </div>
              <h2 className={styles.cardTitle}>Proven Process</h2>
            </div>
            <div className={styles.cardContent}>
              <p>
                We can only attribute our high client retention rate to the quality of service we provide to clients in major industry across the globe – be it profiled data, pure leads or prequalified meetings. Our mantra revolves around partnering with clients to develop business for them first and nothing is more apparent than the commitment that we get from our clients to continuously use our high-yield marketing and prospecting solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
        <SecondContainer />
      <Footer />
    </>
    );
}

