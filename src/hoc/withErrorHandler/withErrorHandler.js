import React from 'react';

import NotFoundError from '@/components/Error/NotFoundError/NotFoundError';
import UnknownError from '@/components/Error/UnknownError/UnknownError';
import * as HttpCode from '@/constants/commons/httpStatus';

const withErrorHandler = (Component, errorType) => {

  return (props) => {

    const getComponentByErrorStatus = (error) => {
      const status = error.status;

      switch (status) {
        case HttpCode.NOT_FOUND:
          return <NotFoundError type={errorType} search={props.search} />
        default:
          return <UnknownError />;
      }
    };

    return (
      !!props.error ?
        getComponentByErrorStatus(props.error) :
        <Component {...props} />
    );
  };
};

export default withErrorHandler;