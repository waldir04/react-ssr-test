import axios from '@/config/axios-api';

import addSignatureResponse from './../helpers/add-signature';

const searchItemHandler = (req, res) => {
  let { q, limit } = req.query;
  limit = limit || 4;

  return axios.get('/sites/MLA/search', { params: { q, limit } })
  .then(
    (response) => { 
      res.json(mapResponse(mapItems(response)));
    },
    (error) => {
      const status = error.status;
      res.status(status).json(error.data);
    }
  );
};

const mapItems = (response) => {
  return response.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      picture: item.thumbnail,
      free_shipping: item.shipping.free_shipping,
      price: {
        amount: item.price,
        currency: item.currency_id,
        decimals: 2
      }
    }
  });
};

const mapResponse = (items) => {
  return addSignatureResponse({ items })
};

export default searchItemHandler;
