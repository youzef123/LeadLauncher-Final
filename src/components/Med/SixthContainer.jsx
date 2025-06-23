import { useRef } from 'react';
import styles from './SixthContainer.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import all assets
import TransparentImg from '../../assets/Transparent.webp';
import ScalabilityImg from '../../assets/Scalability.webp';
import ReduceImg from '../../assets/Reduce.webp';
import BillingErrorImg from '../../assets/Billing-Error.webp';
import ComplianceImg from '../../assets/Compliance.webp';
import CustomizeImg from '../../assets/Customize.webp';
import ExpertiseImg from '../../assets/Expertise.webp';
import IncreasedImg from '../../assets/Increased.webp';
import EnhanceImg from '../../assets/Enhance.webp';

const cardImages = [
  TransparentImg,
  ScalabilityImg,
  ReduceImg,
  BillingErrorImg,
  ComplianceImg,
  CustomizeImg,
  ExpertiseImg,
  IncreasedImg,
  EnhanceImg
];

export default function SixthContainer() {
  const swiperRef = useRef(null);

  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <h2>Benefits of Our Medical Billing Service</h2>
        <span>
          At The Launchpad, we take pride in offering a medical billing service that's designed to bring significant advantages to your practice. Choosing us means embracing a host of benefits that can transform your revenue cycle and improve the overall efficiency of your healthcare operation.
        </span>
        <div className={styles.underline}></div>
        <span>
          Ready to reap the rewards of our medical billing expertise? Contact us today to learn more about how we can transform your practice's financial health.
        </span>
        <button className={styles.messageButton}>Send us a message</button>
      </div>

      <div className={styles.rightSection}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          className={styles.swiper}
        >
          {cardImages.map((imgSrc, index) => (
            <SwiperSlide key={index} className={styles.card}>
              <img 
                src={imgSrc} 
                alt={`Benefit ${index + 1}`} 
                className={styles.cardImage} 
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.pagination}></div>
      </div>
    </section>
  );
}