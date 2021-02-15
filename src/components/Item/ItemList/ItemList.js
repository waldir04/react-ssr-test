import React from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard/ItemCard';
import ItemPropType from '@/constants/prop-types/itemPropType';

import classes from './ItemList.module.scss';

const itemList = ({ items }) => {
  return (
    <ol className={classes.ProductList}>
      {items.map((item) => (
        <li key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ol>
  );
};

itemList.propTypes = {
  items: PropTypes.arrayOf(ItemPropType).isRequired
};

itemList.defaultProps = {
  items: []
};

export default itemList;