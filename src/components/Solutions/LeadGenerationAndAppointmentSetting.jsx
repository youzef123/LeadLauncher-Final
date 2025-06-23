import { useState, useRef, useEffect } from 'react';
import styles from './LeadGenerationAndAppointmentSetting.module.css';
import Header from '../Header/Header';
import SecondLeadGen from './SecondLeadGen';
import Footer from '../Footer/Footer';
import logo1 from "../../assets/Lead-Gen.png";
import conversionGif from "../../assets/ConversionRate3DAnimatedIcon-ezgif.com-crop.gif";
import profitGif from "../../assets/Profit-3D-Animated-Icon.gif";
import emailGif from "../../assets/Email-Marketing-3D-Animated-Icon-1.gif";
import ThirdLeadGen from './ThirdLeadGen';

export default function LeadGenerationAndAppointmentSettings() {
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
                        <h2 className={styles.title}>Lead Generation</h2>
                        {/* <h1 className={styles.subtitle}>
                            Boost Your Business: Elevate
                            Pre-Qualified Appointments
                            Sales with The Launchpad's
                            Focused Lead Generation Solutions!
                        </h1> */}
                        <p className={styles.description}>
                            The fuel to every business operation. Regardless of the methodology, looking for potential prospects plays a crucial role in the overall growth of a company.
                        </p>
                         <p className={styles.description}>
                            OnPoint Prospecting understands the need to move from the conventional way of generating leads; that is why we devise a solution that fits the environment business owners are in nowadays.
                        </p>
                        <p className={styles.description}>
                        Our lead generation process involves meticulous selection of contacts to prospect, essential qualifiers to follow and accuracy in information gathering. With these in place, clients are assured that no bad leads are going through their pipeline.
                        </p>
                    </div>

                    <div className={styles.rightColumn}>
                        <img src={logo1} alt="Launchpad" className={styles.mainLogo} />
                    </div>
                </div>
            </div>
            {/* You can add additional sections/components here similar to Home page */}
            <SecondLeadGen />
            <ThirdLeadGen />
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