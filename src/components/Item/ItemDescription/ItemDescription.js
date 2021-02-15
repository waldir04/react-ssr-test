import React from 'react';
import NumberFormat from 'react-number-format';
import useTranslation from 'next-translate/useTranslation';

import ItemPropType from '@/constants/prop-types/itemPropType';
import Button from '@/components/UI/Button/Button';
import * as ButtonType from '@/components/UI/Button/constants/ButtonType';

import classes from './ItemDescription.module.scss';

const itemDescription = ({ item }) => {
  const { t } = useTranslation();

  return (
    <section className={classes.Container}>
      <div className={[classes.InfoContainer, 'p4'].join(' ')}>
        <figure className={classes.ProductImage}>
          <img src={item.picture} />
        </figure>
        <div>
          <h2 className="mb3">{t('items:description-title')}</h2>
          <p>
            {item.description}
          </p>
        </div>
      </div>
      <div className={[classes.ActionContainer, 'p4'].join(' ')}>
        <h3 className="mb3">{item.title}</h3>
        <h1 className="mb8">
          <NumberFormat
            value={item.price.amount}
            decimalScale={item.price.decimals}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} />
        </h1>
        <Button btnType={ButtonType.Primary}>
          {t('common:buy')}
        </Button>
      </div>
    </section>
  )
};

itemDescription.propTypes = {
  item: ItemPropType.isRequired
};

export default itemDescription;
