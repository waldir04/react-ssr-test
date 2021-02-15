import React from 'react';
import PropTypes from 'prop-types';

import * as ButtonType from './constants/ButtonType';

import classes from './Button.module.scss';

const button = ({ btnType, children, clicked, type }) => (
  <button type={type} className={[classes.Button, classes[btnType]].join(' ')} onClick={clicked}>
    {children}
  </button>
);

button.propTypes = {
  btnType: PropTypes.oneOf(Object.values(ButtonType)),
  clicked: PropTypes.func,
  type: PropTypes.string
};

export default button;