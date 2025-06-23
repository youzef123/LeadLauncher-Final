import styles from './SeventhContainer.module.css';

export default function SeventhContainer() {
  return (
    <div className={styles.seventhContainer}>
        <div className={styles.sectionHeading}>US in figures</div>
        <div className={styles.metricsContainer}>
            <div className={styles.metricItem}>
        

                <div className={styles.metricValue}>120</div>
                <div className={styles.metricLabel}>OnPointers<br></br>(Profilers and Callers)</div>
            </div>
        <div className={styles.metricItem}>
            <div className={styles.metricValue}>70</div>
            <div className={styles.metricLabel}>active clients</div>
        </div>
        <div className={styles.metricItem}>
            <div className={styles.metricValue}>84%</div>
            <div className={styles.metricLabel}>client retention rate</div>
        </div>
    </div>
</div>
  );
}