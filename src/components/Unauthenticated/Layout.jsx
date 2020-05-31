import React from 'react';
import PropTypes from 'prop-types';
import './css/main.css';

const Layout = ({ children }) => {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     document.querySelector('body').classList.remove('is-preload');
  //   }, 100);
  // }, []);

  return (
    // <div className="is-preload">
    <div>
      <header id="header">
        <a className="logo" href="index.html">
          SMEFund
        </a>
        <nav>
          <a href="#what-we-do">What we do</a>
          <a href="./auth/signup">Register</a>
          <a href="./auth/login">Log In</a>
        </nav>
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
                  <a href="/">
                    <i className="icon fa-twitter">&nbsp;</i>Twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon fa-facebook">&nbsp;</i>Facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon fa-instagram">&nbsp;</i>Instagram
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon fa-linkedin">&nbsp;</i>LinkendIn
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
