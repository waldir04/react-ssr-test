import React from 'react';
import Head from 'next/head';

import ItemList from '@/components/Item/ItemList/ItemList';
import ItemService from '@/services/ItemService';
import withErrorHandler from '@/hoc/withErrorHandler/withErrorHandler';
import NotFoundError from '@/components/Error/NotFoundError/NotFoundError';
import * as ErrorType from '@/components/Error/constants/ErrorType';

const items = ({ items, search }) => {

  const hasResults = () => {
    return !!search && Array.isArray(items) && items.length > 0;
  };

  return (
    <>
      <Head>
        <title>{search} | Mercado Libre</title>
      </Head>
      {
        hasResults() ?
          <ItemList items={items} /> :
          <NotFoundError type={ErrorType.ITEM_LIST} search={search} />
      }
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const search = query.search || null;

  try {
    const items = await ItemService.search(search);

    return { props: { items, search } };
  } catch (error) {
    return { props: { error, search } };
  }
}

export default withErrorHandler(items, ErrorType.ITEM_LIST);
