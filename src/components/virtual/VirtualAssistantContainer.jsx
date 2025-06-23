import { useState, useRef, useEffect } from 'react';
import styles from './VirtualAssistantContainer.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import logo1 from "../../assets/virtual-assistant.webp";
import conversionGif from "../../assets/ConversionRate3DAnimatedIcon-ezgif.com-crop.gif";
import profitGif from "../../assets/Profit-3D-Animated-Icon.gif";
import emailGif from "../../assets/Email-Marketing-3D-Animated-Icon-1.gif";
import VirtualSecondContainer from './VirtualSecondContainer';
import VirtualThirdContainer from './VirtualThirdContainer';
import VirtualFourthContainer from './VirtualFourthContainer';


export default function VirtualAssistantContainer() {
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
                        <h1 className={styles.title}>
                            Appointment Setting
                        </h1>
                        <h1>Targeted Calling</h1>
                        <p className={styles.description}>
                            That’s how we brand our phone initiative. Calling the right prospects at the most perfect time is a more effective, less intrusive kind of approach. The goal of every call is not to sell but to accentuate the value of the services/products that we represent.
                        </p>
                           <h1>Email Marketing</h1>
                         <p className={styles.description}>
A well managed email marketing campaign with the objective of connecting with your target audience by highlighting the services/products that you provide. We do away with the usual marketing contents which often than not end up on your prospects’ junk folder instead on their Inbox. Contents and Subject lines are well-thought of and are reviewed to fit your service/product offering and targets whithout the need to be spammy or lackluster in thoughts.                        </p>
                        

                                                   <h1>Social Media Marketing
</h1>

                             <p className={styles.description}>
With Linkedin as the primary platform of choice, reaching out to your target decision makers has never been this easy. From targeting C-suite decision makers of some of the largest companies in the world to connecting to local business owners, this social media marketing approach complemented well with other marketing initiatives that we use.
                     </p>
                    </div>

                    <div className={styles.rightColumn}>
           
                        <img src={logo1} alt="Launchpad" className={styles.mainLogo} />
                    </div>
                </div>
            </div>
            {/* You can add additional sections/components here similar to Home page */}
            
            <VirtualSecondContainer />
  
            <Footer />

            {/* Scroll to top arrow */}
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