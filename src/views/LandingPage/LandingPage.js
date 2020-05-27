import React from 'react';

// nodejs library that concatenates classes

import classNames from 'classnames';

// @material-ui/core components

import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';

import GridItem from 'components/Grid/GridItem';

import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';
import styles from 'assets/jss/material-kit-react/views/landingPage';

// Sections for this page

import ProductSection from './Sections/ProductSection';
import WorkSection from './Sections/WorkSection';
import RegisterNow from './Sections/RegisterNow';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const LandingPage = props => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="SMEFund"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,

          color: 'white'
        }}
        {...rest}
      />

      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>We connect SMEs to Investors.</h1>

              <h4>
                SMEs get to meet their dream investors. <br /> Investors get to invest in the most promising SMEs
              </h4>

              <br />

              <Button color="danger" size="lg" href="#productSection" rel="noopener noreferrer">
                Learn more
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <p id="productSection"></p>
          <ProductSection />
          <RegisterNow />
          <WorkSection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
