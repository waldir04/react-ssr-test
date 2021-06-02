const addSignatureResponse = (response) => {
  return {
    author: {
      name: 'Waldir',
      lastname: 'Martinez'
    },
    ...response
  };
};

export default addSignatureResponse;
