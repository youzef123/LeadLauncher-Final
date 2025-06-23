import styles from './ThirdLeadGen.module.css';
import conversationIcon from '../../assets/Conversation.png';
import expertIcon from '../../assets/Expert.png';
import megaphoneIcon from '../../assets/Megaphone2.png';

export default function ThirdLeadGen() {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>WHY THE LEAD LAUNCHERS?</h2>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={conversationIcon} alt="Brand Awareness" className={styles.icon} />
                    </div>
                    <div className={styles.textContent}>
                        <h3 className={styles.title}>
                            BRAND AWARENESS THROUGH THREE-PRONGED MARKETING APPROACH
                        </h3>
                        <p className={styles.description}>
                            In addition to generating well nurtured leads, we also make sure that part of the strategy is to increase brand awareness among your target audience.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={expertIcon} alt="Marketing Experts" className={styles.icon} />
                    </div>
                    <div className={styles.textContent}>
                        <h3 className={styles.title}>
                            HIGH CALIBRE MARKETING EXPERTS
                        </h3>
                        <p className={styles.description}>
                            The secret to a successful outsourced marketing campaign lies on the expertise and experience of the people who implement it. We fully understand that service/product representation is unique to one's target demographics that is why The Launchpad's process is to match every onboarding campaign with the marketing history of our teams.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={megaphoneIcon} alt="Lead Requirements" className={styles.icon} />
                    </div>
                    <div className={styles.textContent}>
                        <h3 className={styles.title}>
                            WE UNDERSTAND YOUR LEAD REQUIREMENTS
                        </h3>
                        <p className={styles.description}>
                            Running a lead generation campaign is easy. Identifying the right leads is not. Hence, we always ensure that clients' lead criteria and parameters have been given enough thought right from the get go from selectively building the right list to implementing the right marketing program.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}