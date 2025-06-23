import { useState } from 'react';
import { FaChartLine, FaUserTie, FaMoneyBillAlt, FaGlobeAmericas } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './VirtualFourthContainer.module.css';
import RemakeImg from '../../assets/remake.png';
import ScalabilityLogoImg from '../../assets/ScalabilityLogo.png';
import ExpertLogoImg from '../../assets/ExpertiseLogo.png';
import LowPriceLogoImg from '../../assets/LowPriceLogo.png';
import AmericaLogoImg from '../../assets/AmericaLogo.png';



const cardsData = [
  {
    title: "Scalability",
    icon: (
        <img 
        src={ScalabilityLogoImg} 
        alt="Scalability Icon" 
        className={`${styles.cardIcon} ${styles.customIcon}`} 
        />
    ),
    description: "As your business grows, so do the number of administrative tasks an assistant needs to perform. Outsourcing to The Launchpad Team gives you the agility to scale the responsibilities of your virtual assistant up or down."
  },
  {
    title: "Dedication and Professionalism",
    icon: (
        <img 
        src={ExpertLogoImg} 
        alt="Expert  Icon" 
        className={`${styles.cardIcon} ${styles.customIcon}`} 
        />
    ),
    description: "Our virtual assistants undergo rigorous training. Possessing superb communication and organizational skills, their support has proven invaluable to our clients."
  },
  {
    title: "Low Cost",
    icon: (
        <img 
        src={LowPriceLogoImg} 
        alt="LowPrice Icon" 
        className={`${styles.cardIcon} ${styles.customIcon}`} 
        />
    ),
    description: "Even if you have enough work for a full-time assistant, outsourcing this function to The Launchpad Team is a more affordable option."
  },
  {
    title: "No Geographical Limitations",
    icon: (
        <img 
        src={AmericaLogoImg} 
        alt="America Icon" 
        className={`${styles.cardIcon} ${styles.customIcon}`} 
        />
    ),
    description: "Outsourcing the function of an assistant removes language and time zone barriers. If your suppliers or clients are based in a different time zone, finding an in-house assistant to perform relevant tasks is a challenge. The Launchpad Team is the answer."
  }
];

export default function VirtualFourthContainer() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h2>What You Can Outsource To A Virtual Assistant</h2>
        <img
          src={RemakeImg}
          alt="What You Can Outsource To A Virtual Assistant"
          className={styles.headerImage}
        />
      </div>

      <div className={styles.rightSection}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          width={454}
          height={527}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.swiperPagination}`,
          }}
          onSliderFirstMove={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className={`${styles.mySwiper} ${isDragging ? styles.grabbing : ''}`}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={`${styles.card} ${isDragging ? styles.cardDragging : ''}`}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  {card.icon}
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperPagination}></div>
      </div>
    </section>
  );
}