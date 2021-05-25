import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const IconButton = ({ icon, iconClass, handleClick }) => {
  return (
    <button type="button" onClick={handleClick} className="icon">
      <Icon icon={icon} className={iconClass} />
    </button>
  );
};

IconButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  iconClass: PropTypes.string,
  icon: PropTypes.any,
};

export default IconButton;
