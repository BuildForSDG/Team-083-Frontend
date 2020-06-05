import React from 'react';
import bg from '../images/cta01.jpg';

const ABetterWorld = () => {
  return (
    <section style={{ backgroundImage: `linear-gradient(rgba(206, 27, 40, 0.25), rgba(206, 27, 40, 0.25)), url(${bg})` }} id="cta" className="wrapper">
      <div className="inner">
        <h2>A better world for SMEs</h2>
        <p>
          With sensible funding policy, SMEs can get funds to do business. This greatly increases their business output
          and makes the world a better place.
        </p>
      </div>
    </section>
  );
};

export default ABetterWorld;
