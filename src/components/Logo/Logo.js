import React from 'react';

import classes from './Logo.module.scss';

const logo = () => (
  <div className={classes.Logo}>
    <img src="/assets/img/logo.png" alt="Mercado Libre" />
  </div>
);

export default logo;