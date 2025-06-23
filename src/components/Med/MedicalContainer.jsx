import { useState, useRef, useEffect } from 'react';
import styles from './MedicalContainer.module.css';
import Header from '../Header/Header';
import SecondMedicalContainer from './SecondMedicalContainer';
import Footer from '../Footer/Footer';
import logo1 from "../../assets/Data Analyst.png";
import conversionGif from "../../assets/ConversionRate3DAnimatedIcon-ezgif.com-crop.gif";
import profitGif from "../../assets/Profit-3D-Animated-Icon.gif";
import emailGif from "../../assets/Email-Marketing-3D-Animated-Icon-1.gif";
import ThirdMedicalContainer from './ThirdMedicalContainer';
import FourthContainer from './FourthContainer';
import FifthContainer from './FifthContainer';
import SixthContainer from './SixthContainer';

export default function MedicalContainer() {
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
        <div className={styles.page} ref={homeRef}>
            <div className={styles.heroBackground}>
                <Header />
                <div className={styles.mainContainer}>
                    <div className={styles.leftColumn}>
                      
                        <div className={styles.persuasiveContainer}>
                       
                              <h1 className={styles.title}>
                            Data Profiling
                        </h1>
                            
                            <p className={styles.description}>       
                                Data is as precious as gold nowadays so we are heavily investing to perfect our database. Our in-house profilers are skilled to check the accuracy of the leads which include details such as:
                            </p>
                            <div className={styles.dataGrid}>
                                <ul className={styles.dataList}>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Company Name
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Direct Email
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Company Address
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Phone Number
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Contact Person
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Website
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Job Title
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Employee Size
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Annual Revenue
  </li>
  <li className={styles.dataItem}>
    <span className={styles.dataIcon}></span>
    Industry
  </li>
</ul>
                            </div>
                        </div>
                    
                    </div>

                    <div className={styles.rightColumn}>
                        <img src={logo1} alt="Data Profiling Visualization" className={styles.mainLogo} />
                    </div>
                </div>
            </div>
            
            <SecondMedicalContainer />
            <ThirdMedicalContainer />
            <FourthContainer /> 
            <FifthContainer />
            {/* <SixthContainer /> */}
            <Footer />

            {showScrollArrow && (
                <div className={styles.scrollToTop} onClick={scrollToTop}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </div>
            )}
        </div>
    );
}