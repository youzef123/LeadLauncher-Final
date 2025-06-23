import React from 'react';
import styles from './ContactUsContainer.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactUs from '../Container/EleventhContainer';

export default function ContactUsContainer(){
    return(
          <>
              <Header />
              <ContactUs />
              <Footer />
              </>
    );
}