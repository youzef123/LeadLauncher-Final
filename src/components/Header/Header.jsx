import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/LL-logo.png';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import GetQuote from '../modals/GetQoute'; // Import the modal component

export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
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
        activePath.includes('/appointment-setting') 

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

              {/* Industries */}
               <li
                className={styles.dropdown}
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              >
                <a
                  href="#industries"
                  className={`${styles.menuItem} ${isActive('#industries') ? styles.active : ''}`}
                >
                  Industries <FaChevronDown className={styles.dropdownIcon} />
                </a>
                {isIndustriesOpen && (
                  <div className={styles.dropdownContent}>
                    <Link
                      to="/it-software"
                      className={isDropdownItemActive('/it-software') ? styles.activeDropdownItem : ''}
                    >
                      IT and Software
                    </Link>
                    <Link
                      to="/logistics"
                      className={isDropdownItemActive('/logistics') ? styles.activeDropdownItem : ''}
                    >
                      Logistics
                    </Link>
                    <Link
                      to="/healthcare"
                      className={isDropdownItemActive('/healthcare') ? styles.activeDropdownItem : ''}
                    >
                      Healthcare
                    </Link>
                    <Link
                      to="/finance"
                      className={isDropdownItemActive('/finance') ? styles.activeDropdownItem : ''}
                    >
                      Finance
                    </Link>
                    <Link
                      to="/ecommerce"
                      className={isDropdownItemActive('/ecommerce') ? styles.activeDropdownItem : ''}
                    >
                      eCommerce
                    </Link>
                    <Link
                      to="/commercial"
                      className={isDropdownItemActive('/commercial') ? styles.activeDropdownItem : ''}
                    >
                      Commercial Service
                    </Link>
                    <Link
                      to="/marketing"
                      className={isDropdownItemActive('/marketing') ? styles.activeDropdownItem : ''}
                    >
                      Marketing and Advertising
                    </Link>
                    <Link
                      to="/staffing"
                      className={isDropdownItemActive('/staffing') ? styles.activeDropdownItem : ''}
                    >
                      Staffing and Consulting
                    </Link>
                    <Link
                      to="/energy"
                      className={isDropdownItemActive('/energy') ? styles.activeDropdownItem : ''}
                    >
                      Energy
                    </Link>
                    <Link
                      to="/realestate"
                      className={isDropdownItemActive('/realestate') ? styles.activeDropdownItem : ''}
                    >
                      Real Estate
                    </Link>

                  </div>
                )}
              </li>
              {/* End */}
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