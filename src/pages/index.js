import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const search = () => {
  const { t } = useTranslation();

  return (
    <h1 className="align-center mt8">{t('common:welcome')}</h1>
  );
};

export default search;
