import React from 'react';
import { Box } from '@chakra-ui/core';
import { FaSearch, FaTasks, FaConnectdevelop } from 'react-icons/fa';

const Highlights = () => {
  return (
    <section id="what-we-do" className="wrapper">
      <div className="inner">
        <header className="special">
          <h2>What we do</h2>
          <p>We connect SMEs to investors all over the world.</p>
        </header>
        <div className="highlights">
          <section>
            <div className="content">
              <header>
                <Box className="icon" as={FaConnectdevelop}></Box>
                <h3>Connect</h3>
              </header>
              <p>Connect SMEs to investors.</p>
            </div>
          </section>
          <section>
            <div className="content">
              <header>
                <Box className="icon" as={FaSearch}></Box>
                <h3>SEO First</h3>
              </header>
              <p>We ensure your business is discoverable on the internet.</p>
            </div>
          </section>
          <section>
            <div className="content">
              <header>
                <Box className="icon" as={FaTasks}></Box>
                <h3>Business management</h3>
              </header>
              <p>We provide a means for SMEs to manage their businesses</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
