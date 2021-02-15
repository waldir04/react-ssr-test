import React from 'react';
import { useRouter } from 'next/router';

import InputSearch from './../../UI/InputSearch/InputSearch';

const itemSearch = () => {
  const router = useRouter();
  const { search } = router.query;

  const onChanged = (q) => {
    router.push({
      pathname: '/items',
      query: { search: q }
    })
  };

  return (
    <InputSearch search={search} changed={(query) => onChanged(query)} />
  );
};

export default itemSearch;