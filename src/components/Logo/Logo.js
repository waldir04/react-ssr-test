import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import classes from './Logo.module.scss';

const logo = () => {
  const { t } = useTranslation();
  
  return (
    <div className={classes.Logo}>
      <img src="/assets/img/logo.png" alt={t('common:company-name')} />
    </div>
  );
};

export default logo;