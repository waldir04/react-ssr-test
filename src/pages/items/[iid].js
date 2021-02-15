import React from 'react';
import Head from 'next/head';

import ItemDescription from '@/components/Item/ItemDescription/ItemDescription';
import ItemService from '@/services/ItemService';
import withErrorHandler from '@/hoc/withErrorHandler/withErrorHandler';
import * as ErrorType from '@/components/Error/constants/ErrorType';

const item = ({ item }) => (
  <>
    <Head>
      <title>{item.title}</title>
      <meta name="description" content={item.description} />
    </Head>
    <ItemDescription item={item} />
  </>
);

export const getServerSideProps = async ({ params }) => {
  const itemId = params.iid;

  try {
    const item = await ItemService.detail(itemId);
    
    return { props: { item } };
  } catch (error) {
    return { props: { error } };
  }
}

export default withErrorHandler(item, ErrorType.ITEM_DESCRIPTION);