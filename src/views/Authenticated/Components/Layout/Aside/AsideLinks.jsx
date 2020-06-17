import React from 'react';
import PropTypes from 'prop-types';

import { get } from '../../../../utils/easy-storage';
import SMELinks from './SMELinks';
import FunderLinks from './FunderLinks';
import AdminLinks from './AdminLinks';

const AsideLinks = ({ activeButton, setActiveButton }) => {
  const { userType } = get('smefund-user');

  switch (userType) {
    case 'SME':
      return <SMELinks activeButton={activeButton} setActiveButton={setActiveButton} />;
    case 'FUNDER':
      return <FunderLinks activeButton={activeButton} setActiveButton={setActiveButton} />;
    case 'ADMIN':
      return <AdminLinks activeButton={activeButton} setActiveButton={setActiveButton} />;
    default:
      return <SMELinks activeButton={activeButton} setActiveButton={setActiveButton} />;
  }
};

AsideLinks.propTypes = {
  activeButton: PropTypes.string,
  setActiveButton: PropTypes.func
};

export default AsideLinks;
