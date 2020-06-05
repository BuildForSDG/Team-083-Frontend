import React from 'react';
import { Link } from '@reach/router';
import bg from '../images/banner.jpg';

const Banner = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})` }} id="banner">
      <div className="inner">
        <h1>SMEFund</h1>
        <p>The modern way of connecting SMEs to investors</p>
        <Link to="/register">
          <button>Register Now!</button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
