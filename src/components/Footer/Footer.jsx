import styles from "./Footer.module.css";
import logos from "../../assets/LL-logo-filled-white.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Company Info with Logo and Socials */}
        <div className={styles.footerSection}>
          <Link to="/">
            <img src={logos} alt="Lead Launcher Logo" className={styles.footerLogo} />
          </Link>
          <p className={styles.companyDescription}>
            Lead Launcher is a fast-growing BPO firm based in the Philippines that offers no-frills B2B Data, lead generation, and appointment setting solutions to clients across major industries in North America and other English speaking countries around the world.
          </p>
        </div>

        {/* Services */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Who we are</h3>
          <ul className={styles.footerList}>
            <li><Link to="/lead-generation" className={styles.footerLink}>About The Company</Link></li>
            <li><Link to="/lead-generation" className={styles.footerLink}>Our Mantra</Link></li>
            <li><Link to="/data-profiling" className={styles.footerLink}>Our Process</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Solutions</h3>
          <ul className={styles.footerList}>
            <li><Link to="/data-profiling" className={styles.footerLink}>Data Profiling</Link></li>
            <li><Link to="/lead-generation" className={styles.footerLink}>Lead Generation</Link></li>
            <li><Link to="/appointment-setting" className={styles.footerLink}>Appointment Setting</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Industries</h3>
          <ul className={styles.footerList}>
            <li><Link to="/it-software" className={styles.footerLink}>IT and Software</Link></li>
            <li><Link to="/logistics" className={styles.footerLink}>Logistics</Link></li>
            <li><Link to="/healthcare" className={styles.footerLink}>Healthcare</Link></li>
            <li><Link to="/ecommerce" className={styles.footerLink}>eCommerce</Link></li>
            <li><Link to="/marketing" className={styles.footerLink}>Marketing and Advertising</Link></li>
            <li><Link to="/staffing" className={styles.footerLink}>Staffing and Consulting</Link></li>
             <li><Link to="/energy" className={styles.footerLink}>Energy</Link></li>
            <li><Link to="/realestate" className={styles.footerLink}>Real Estate</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        {/* Headquarters */}
        <div className={styles.footerSection}>
          <div className={styles.headquarters}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
              <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/the-leadlauncher" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
            <ul className={styles.footerList}>
              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+1 978 693 7878</span>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>sales@leadlauncher.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} Lead Launcher. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}