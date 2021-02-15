import React from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/UI/Button/Button';

const unknownError = () => {
  const router = useRouter();

  const handleTryAgain = () => {
    router.reload();
  };

  return (
    <div className="message-container align-center">
      <h1>Algo salió mal!</h1>
      <div className="mt6">
        <Button btnType="Primary" clicked={handleTryAgain}>
          Volvel a intentarlo
        </Button>
      </div>
    </div>
  );
};

export default unknownError;