import React from 'react';
import PropTypes from 'prop-types';
import './css/main.css';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/core';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import styles from './css/layout.module.css';
import LayoutNavLinks from './components/LayoutNavLinks';
import LayoutDrawer from './components/LayoutDrawer';

const Layout = ({ children }) => {
  const { width, bp2 } = useSelector((state) => state.resize);
  const [isOpen, close] = React.useState(false);

  return (
    <div>
      <header id="header">
        <Link className="logo" to="/">
          SMEFund
        </Link>
        {isOpen ? <LayoutDrawer isOpen={isOpen} close={close} /> : ''}
        {width >= bp2 ? (
          <nav>
            <LayoutNavLinks />
          </nav>
        ) : (
          <Box onClick={() => close(!isOpen)} mx="2rem" as={FaBars} />
        )}
      </header>

      {children}

      <footer id="footer">
        <div className="inner">
          <div className="content">
            <section>
              <h3>SMEFund</h3>
              <p>Connecting SMEs to investors.</p>
            </section>
            <section>
              <h4>Quick Links</h4>
              <ul className="alt">
                <li>
                  <a href="#what-we-do">What we do</a>
                </li>
                <li>
                  <a href="./auth/signup">Register Now</a>
                </li>
                <li>
                  <a href="./auth/signup">Login</a>
                </li>
              </ul>
            </section>
            <section>
              <h4>Connect with us</h4>
              <ul className="plain">
                <li>
                  <a className={styles.social_links} href="/">
                    <Box as={FaTwitter} /> <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a className={styles.social_links} href="/">
                    <Box as={FaFacebook} /> <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a className={styles.social_links} href="/">
                    <Box as={FaLinkedin} /> <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a className={styles.social_links} href="/">
                    <Box as={FaInstagram} /> <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="copyright">
            &copy; Photos <a href="https://unsplash.co">Unsplash</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;

// React.useEffect(() => {
//   setTimeout(() => {
//     document.querySelector('body').classList.remove('is-preload');
//   }, 100);
// }, []);

// <div className="is-preload">
