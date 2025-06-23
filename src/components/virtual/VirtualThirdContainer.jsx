import styles from './VirtualThirdContainer.module.css';

// First Row
import Calendar1 from '../../assets/Calendar1.png';
import Tracking1 from '../../assets/Tracking1.png';
import Event1 from '../../assets/Event1.png';

// Second Row
import Chat1 from '../../assets/Chat1.png';
import Travel1 from '../../assets/Travel1.png';
import Phone1 from '../../assets/Phone1.png';

// Third Row
import Social1 from '../../assets/Social1.png';
import Progress1 from '../../assets/Progress1.png';
import Research1 from '../../assets/Research1.png';

// Fourth Row
import Contact1 from '../../assets/Contact1.png';
import Website1 from '../../assets/Website1.png';
import Logistics1 from '../../assets/Logistics1.png';

export default function VirtualThirdContainer() {
  const services = [
    // First Row
    [
      { icon: Calendar1, title: "Calendar Management" },
      { icon: Tracking1, title: "Deliveries Tracking" },
      { icon: Event1, title: "Event Management" }
    ],
    // Second Row
    [
      { icon: Chat1, title: "Follow-up Communication" },
      { icon: Travel1, title: "Travel Planning" },
      { icon: Phone1, title: "Phone Answering" }
    ],
    // Third Row
    [
      { icon: Social1, title: "Social Media Management" },
      { icon: Progress1, title: "Progress Tracking & Reports" },
      { icon: Research1, title: "Research" }
    ],
    // Fourth Row
    [
      { icon: Contact1, title: "Contact List Management" },
      { icon: Website1, title: "Website Management" },
      { icon: Logistics1, title: "Logistics Coordination" }
    ]
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Stay ahead with a reliable healthcare BPO partner.</h2>
      
      <div className={styles.gridContainer}>
        {services.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.iconContainer}>
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className={styles.icon}
                  />
                </div>
                <p className={styles.serviceTitle}>{service.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}