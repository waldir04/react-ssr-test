import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Button from '@/components/UI/Button/Button';

const unknownError = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleTryAgain = () => {
    router.reload();
  };

  return (
    <div className="message-container align-center">
      <h1>{t('error:something-went-wrong')}</h1>
      <div className="mt6">
        <Button btnType="Primary" clicked={handleTryAgain}>
          {t('common:try-again')}
        </Button>
      </div>
    </div>
  );
};

export default unknownError;