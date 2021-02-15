import Head from 'next/head';
import React from 'react';

import Toolbar from './../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.scss';

const layout = ({ children, title, item }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <Toolbar />

      <main role="main" className={classes.Main}>
        <section className={[classes.Content, 'container'].join(' ')}>
          {children}
        </section>
      </main>
    </>
  );
};

export default layout;