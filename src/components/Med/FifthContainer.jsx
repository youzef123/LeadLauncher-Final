import styles from './FifthContainer.module.css';
import CuttingIcon from '../../assets/Cutting.png';
import SecurityIcon from '../../assets/Security.png';
import AdaptabilityIcon from '../../assets/Adaptability.png';

export default function FifthContainer() {
    return (
        <section className={styles.container}>
            {/* First Layer - Icons */}
            <div className={styles.iconLayer}>
                <div className={styles.iconContainer}>
                    <img src={CuttingIcon} alt="Cutting Edge Technology" className={styles.icon} />
                    <p>Cutting Edge Technology</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={SecurityIcon} alt="Security & Compliance" className={styles.icon} />
                    <p>Security & Compliance</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={AdaptabilityIcon} alt="Adaptability" className={styles.icon} />
                    <p>Adaptability</p>
                </div>
            </div>

            {/* Second Layer - Text */}
            <div className={styles.textLayer}>
                <p className={styles.description}>
                        Contact one of our data analysts now and know how we can Build a marketing the list that means leads to your sales and marketing team.
                </p>
            </div>

        </section>
    );
}