// src/components/Solutions/SecondLeadGen.jsx
import styles from './SecondLeadGen.module.css';
import TelemarketingIcon from '../../assets/Telemarketing.png';
import QualityIcon from '../../assets/Quality.png';
import HybridLeadIcon from '../../assets/Hybrid Lead.png';
import ConferenceEventsIcon from '../../assets/Conference Events.png';
import BuildingBackground from '../../assets/Building.png';

export default function SecondLeadGen() {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${BuildingBackground})` }}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Get in touch with our sales team now so we can talk about your  
                    <br />
                    requirements and how we can implement a lead generation 
                    <br />
                    campaign unique to your business.
                </h2>
                <p className={styles.description}>
                    The combination of calls, email and social media platform provides an ideal approach towards better contact ratio, more qualified leads and higher conversion rate for our clients. Besides, we always want to build a relationship with our business partners with longevity in mind.
                </p>

                <h1 className={styles.servicesTitle}>Services</h1>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <img src={TelemarketingIcon} alt="Telemarketing" className={styles.cardIcon} />
                                <h4 className={styles.cardTitle}>TELEMARKETING</h4>
                            </div>
                            <div className={styles.cardBack}>
                                <h3>Telemarketing</h3>
                                <p className={styles.cardDescription}>
                                    We live in increasingly digital world, where interactions are confined to the text-based format, be it instant messaging or email.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <img src={QualityIcon} alt="Quality" className={styles.cardIcon} />
                                <h4 className={styles.cardTitle}>QUALITY</h4>
                            </div>
                            <div className={styles.cardBack}>
                                <h3>Quality</h3>
                                <p className={styles.cardDescription}>
                                    Our mission is to provide clients with exceptional personalized services implementing practical solutions for our clients' diverse needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <img src={HybridLeadIcon} alt="Hybrid Lead" className={styles.cardIcon} />
                                <h4 className={styles.cardTitle}>HYBRID LEAD GENERATION CAMPAIGN</h4>
                            </div>
                            <div className={styles.cardBack}>
                                <h3>Hybrid Lead Generation Campaign</h3>
                                <p className={styles.cardDescription}>
                                    A healthy sales pipeline depends on a strong lead generation strategy that is regularly reviewed and adjusted for optimal results.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <img src={ConferenceEventsIcon} alt="Conference Events" className={styles.cardIcon} />
                                <h4 className={styles.cardTitle}>CONFERENCE / CALL-TO-INVITE</h4>
                            </div>
                            <div className={styles.cardBack}>
                                <h3>Conference / Events Call-To-Invite</h3>
                                <p className={styles.cardDescription}>
                                    There are a few crucial factors that make an event a success: sufficient revenue, engaging speakers, and happy attendees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}