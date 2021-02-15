import React from 'react';
import Link from 'next/link';

import ItemSearch from '@/components/Item/ItemSearch/ItemSearch';
import Logo from '@/components/Logo/Logo';

import classes from './Toolbar.module.scss';

const toolbar = () => {

  return (
    <header className={classes.Header}>
      <div className={[classes.Nav, 'container'].join(' ')}>
        <div className={[classes.LogoContainer, 'mr4'].join(' ')}>
          <Link href={'/'}>
            <a><Logo /></a>
          </Link>
        </div>
        <div className={classes.Search}>
          <ItemSearch />
        </div>
      </div>
    </header>
  );
};

export default toolbar;