import { useState, useRef, useEffect } from 'react';
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SecondContainer from '../../components/Container/SecondContainer';
import ThirdContainer from '../../components/Container/ThirdContainer';
import FourthContainer from '../../components/Container/FourthContainer';
import FifthContainer from '../../components/Container/FifthContainer';
import SixthContainer from '../../components/Container/SixthContainer';
import SeventhContainer from '../../components/Container/SeventhContainer';
import EightContainer from '../../components/Container/EightContainer';
import NinthContainer from '../../components/Container/NinthContainer';
import TenthContainer from '../../components/Container/TenthContainer';
import EleventhContainer from '../../components/Container/EleventhContainer';
import GetQuote from '../../components/modals/GetQoute';
import { useAnimatedCount } from '../../hooks/useAnimatedCount';
import logo1 from "../../assets/Logo-1.webp";
import conversionGif from "../../assets/ConversionRate3DAnimatedIcon-ezgif.com-crop.gif"; 
import profitGif from "../../assets/Profit-3D-Animated-Icon.gif";
import emailGif from "../../assets/Email-Marketing-3D-Animated-Icon-1.gif";
import xMark from "../../assets/x-mark.webp";
import Check from "../../assets/check-mark.webp";
import HeroBanner1 from "../../assets/HeroBanner.png";



export default function Home() {
  

  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false); 
  const dropdownRef = useRef(null);
  const homeRef = useRef(null);

  const handleSelect = (option) => {
    if (option !== 'Please Select') {
      setSelectedOption(option);
    }
    setIsDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <div className={styles.home} ref={homeRef}>
      <div className={styles.heroBackground}>
        <Header />

        <div className={styles.mainContainer}>
          <div className={styles.leftColumn}>
            <img 
              src={HeroBanner1} 
              alt="Lead Generation Services"
              className={styles.heroBannerImage }
            />
          </div>

          <div className={styles.rightColumn}>              
            <h2 className={`${styles.subtitle} ${styles.animateSlideIn}`} style={{ "--delay": "1.5s" }}>
              <img 
                src={xMark} 
                alt="X Mark" 
                className={`${styles.subtitleIcon} ${styles.animateSlideIn}`} 
                style={{ "--delay": "0s" }} 
              />
              No Rocket Science Approach.
            </h2>

           <h1 className={`${styles.LowerCaseSubtitle} ${styles.animateSlideLeft}`} style={{ "--delay": "0.5s" }}>
          We provide
              <br />
              <b>No-Frills Lead Generation and Profiling Services</b>
            <br />
                for major markets in North America
             
            </h1>

            <h2 className={`${styles.subtitle} ${styles.animateSlideIn}`} style={{ "--delay": "1s" }}>
              <img 
                src={Check} 
                alt="Check Mark" 
                className={`${styles.subtitleIcon} ${styles.animateSlideIn}`} 
                style={{ "--delay": "0.6s" }} 
              />
              Just the right leads you need.
            </h2>
          </div>
        </div>
      </div>
     
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer /> 
      <SixthContainer />
      <SeventhContainer />
      <EightContainer />
      <NinthContainer />
      <TenthContainer />
      <EleventhContainer />
      <Footer />

      <GetQuote 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)}
      />

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
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      )}
    </div>
  );
}