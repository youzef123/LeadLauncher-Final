import styles from './ThirdMedicalContainer.module.css';
import medicalBillingImage from '../../assets/Data Analyst.png';

export default function ThirdMedicalContainer() {
    return (
        <section className={styles.container}>
            <div className={styles.leftSection}>
                <p className={styles.description}>
                    Contact one of our data analysts now and know how we can Build a marketing the list that means leads to your sales and marketing team.

                </p>
            </div>
            
            <div className={styles.rightSection}>
                {/* <img 
                    src={medicalBillingImage} 
                    alt="Medical Billing Services" 
                    className={styles.medicalBillingImage} 
                /> */}
            </div>
        </section>
    );
}