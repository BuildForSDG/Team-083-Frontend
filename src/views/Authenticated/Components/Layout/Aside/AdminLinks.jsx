import React from 'react';
import { FaUser, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AsideButton from './AsideButton';

const AdminLinks = ({ activeButton, setActiveButton }) => {
  return (
    <>
      <AsideButton
        link="/"
        icon={FaTachometerAlt}
        value="Dashboard"
        isActive={activeButton}
        setActiveButton={setActiveButton}
      />
      <AsideButton
        link="/profile"
        icon={FaUser}
        value="Profile"
        isActive={activeButton}
        setActiveButton={setActiveButton}
      />
      <AsideButton
        link="/smes"
        icon={FaUsers}
        value="SMEs"
        isActive={activeButton}
        setActiveButton={setActiveButton}
      />
      <AsideButton
        link="/funders"
        icon={FaUsers}
        value="Funders"
        isActive={activeButton}
        setActiveButton={setActiveButton}
      />
    </>
  );
};

AdminLinks.propTypes = {
  activeButton: PropTypes.string,
  setActiveButton: PropTypes.func
};

export default AdminLinks;
