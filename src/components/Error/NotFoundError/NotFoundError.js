import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';

import * as ErrorType from './../constants/ErrorType';

const notFoundError = ({ type, search }) => {
  const { t } = useTranslation();

  const getErrorMessage = (type) => {
    switch (type) {
      case ErrorType.ITEM_LIST:
        return t('error:search-item-not-found', { search });
      case ErrorType.ITEM_DESCRIPTION:
        return t('error:item-not-found');
      default:
        return t('error:not-found');
    }
  };

  return (
    <div className="align-center mt8">
      <h1>
        {getErrorMessage(type)}
      </h1>
    </div>
  );
};

notFoundError.propTypes = {
  type: PropTypes.string,
  search: PropTypes.string
};

export default notFoundError;