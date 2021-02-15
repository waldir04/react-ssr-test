import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/hoc/Layout/Layout';
import Spinner from '@/components/UI/Spinner/Spinner';

import '@/styles/main.scss';

const app = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  const handleRouteChangeComplete = () => {
    setLoading(false);
  };

  const handleRouteChangeStart = () => {
    setLoading(true);
  };

  return (
    <Layout title="Mercado Libre">
      {
        !loading ?
          <Component {...pageProps} /> :
          (
            <div className="align-center mt8">
              <Spinner />
            </div>
          )
      }
    </Layout>
  )
};

export default app;
