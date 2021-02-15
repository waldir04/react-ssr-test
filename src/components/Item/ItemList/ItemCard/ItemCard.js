import React from 'react';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

import ItemPropType from '@/constants/prop-types/itemPropType';

import classes from './ItemCard.module.scss';

const itemCard = ({ item }) => {
  return (
    <div className={[classes.ProductCard, 'p5'].join(' ')}>
      <div className={classes.ProductCardImage}>
        <Link href={`/items/${item.id}`}>
          <a>
            <img src={item.picture} alt={item.title} />
          </a>
        </Link>
      </div>
      <div className={[classes.ProductCardInfo, 'py2 px3'].join(' ')}>
        <Link href={`/items/${item.id}`}>
          <a>
            <h2 className={[classes.ProductCardInfoName, 'mb2'].join(' ')}>
              {item.title}
            </h2>
          </a>
        </Link>
        <h3>
          <NumberFormat
            value={item.price.amount}
            decimalScale={item.price.decimals}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} />
        </h3>
      </div>
    </div>
  );
};

itemCard.propTypes = {
  item: ItemPropType.isRequired
};

export default itemCard;
