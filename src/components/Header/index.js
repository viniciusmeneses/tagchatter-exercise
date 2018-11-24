import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = (props) => {
  const { parrots } = props;

  return (
    <header className="header">
      <h1 className="header__title">#tagchatter</h1>

      <div className="header__parrots-count">
        <span className="header__title">{parrots}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  parrots: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Header;
