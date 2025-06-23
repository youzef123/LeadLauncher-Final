import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './SecondContainer.module.css';
import 'swiper/css';

// Import all partner logos from src/assets
import Medicvision from '../../assets/Medicvision-300x95.webp';
import Racca from '../../assets/Racca-removebg-preview-300x233.webp';
import Comp2 from '../../assets/comp2-300x275.webp';
import OKR from '../../assets/OKR-300x101.webp';
import Accumen from '../../assets/accumen.webp';
import TextByChoice from '../../assets/textbychoice_logo.webp';
import Comp5 from '../../assets/comp5-e1694423457602.webp';
import Frendli from '../../assets/frendli.webp';
import OodlesEnergy from '../../assets/oodles-energy-300x286.webp';
import Nextwave from '../../assets/nextwave.webp';
import DataSolutions from '../../assets/Data-solutions.webp';
import Star from '../../assets/star-1.webp';

const SecondContainer = () => {
  // Create a larger array by duplicating the logos for smoother infinite loop
  const partnerLogos = [
    { src: Medicvision, alt: 'Medicvision' },
    { src: Racca, alt: 'Racca' },
    { src: Comp2, alt: 'Company 2' },
    { src: OKR, alt: 'OKR' },
    { src: Accumen, alt: 'Accumen' },
    { src: TextByChoice, alt: 'Text By Choice' },
    { src: Comp5, alt: 'Company 5' },
    { src: Frendli, alt: 'Frendli' },
    { src: OodlesEnergy, alt: 'Oodles Energy' },
    { src: Nextwave, alt: 'Nextwave' },
    { src: DataSolutions, alt: 'Data Solutions' },
    { src: Star, alt: 'Star' }
  ];

  // Duplicate the array to make looping smoother
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className={styles.secondContainer}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>Some of Our Trusted Partners</h2>
      </div>
      <div className={styles.bottomSection}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          loopAdditionalSlides={partnerLogos.length} // Add enough slides for smooth looping
          autoplay={{
            delay: 2000, // More reasonable timing
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={700} // Smoother transition
          className={styles.swiperContainer}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 40,
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img 
                src={logo.src} 
                alt={logo.alt}
                className={styles.logo}
                loading="lazy" // Add lazy loading
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SecondContainer;