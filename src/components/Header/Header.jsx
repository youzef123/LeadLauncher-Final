import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/LL-logo.png';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import GetQuote from '../modals/GetQoute'; // Import the modal component

export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false); // State for modal visibility
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const isActive = (path) => {
    return activePath === path ||
      (path === '/solutions' && (
        activePath.includes('/lead-generation') ||
        activePath.includes('/data-profiling') ||
        activePath.includes('/appointment-setting') ||
        activePath.includes('/customer-service')
      ));
  };

  const isDropdownItemActive = (path) => {
    return activePath === path;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div className={styles.logoContainer}>
            <img src={logo} alt="Company Logo" className={styles.logo} />
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.menu}>
              <li>
                <a
                  href="/"
                  className={`${styles.menuItem} ${isActive('/') ? styles.active : ''}`}
                >
                  Home
                </a>
              </li>
              <li
                className={styles.dropdown}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <a
                  href="#solutions"
                  className={`${styles.menuItem} ${isActive('#solutions') ? styles.active : ''}`}
                >
                  Solutions <FaChevronDown className={styles.dropdownIcon} />
                </a>
                {isSolutionsOpen && (
                  <div className={styles.dropdownContent}>
                    <Link
                      to="/data-profiling"
                      className={isDropdownItemActive('/data-profiling') ? styles.activeDropdownItem : ''}
                    >
                      Data Profiling
                    </Link>
                    <Link
                      to="/lead-generation"
                      className={isDropdownItemActive('/lead-generation') ? styles.activeDropdownItem : ''}
                    >
                      Lead Generation
                    </Link>
                    <Link
                      to="/appointment-setting"
                      className={isDropdownItemActive('/appointment-setting') ? styles.activeDropdownItem : ''}
                    >
                      Appointment Setting
                    </Link>
                 
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/industries"
                  className={`${styles.menuItem} ${isActive('/industries') ? styles.active : ''}`}
                >
                  Industries
                </Link>
              </li>
              <li>
                <a
                  href="/leadlauncher"
                  className={`${styles.menuItem} ${isActive('/leadlauncher') ? styles.active : ''}`}
                >
                  Why Lead Launchers?
                </a>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`${styles.menuItem} ${isActive('/about-us') ? styles.active : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={`${styles.menuItem} ${isActive('/contact-us') ? styles.active : ''}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>


        </div>
      </header>

      {/* GetQuote Modal */}
      <GetQuote
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
      />
    </>
  );
}