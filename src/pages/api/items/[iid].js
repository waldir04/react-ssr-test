import axios from '@/config/axios-api';

import addSignatureResponse from './../helpers/add-signature';

const getItemHandler = (req, res) => {
  const { iid } = req.query;

  return Promise.all([
    axios.get(`/items/${iid}`),
    axios.get(`/items/${iid}/description`)
  ])
    .then(
      (responses) => {
        const response = mapResponse(mapItem(responses));
        res.json(response);
      },
      (error) => {
        const status = error.status;
        res.status(status).json(error.data);
      }
    );
};

const mapItem = (responses) => {
  const [detail, description] = responses;

  return {
    id: detail.id,
    title: detail.title,
    picture: detail.thumbnail,
    description: description.plain_text,
    free_shipping: detail.shipping.free_shipping,
    sold_quantity: detail.sold_quantity,
    price: {
      amount: detail.price,
      currency: detail.currency_id,
      decimals: 2
    },
  };
};

const mapResponse = (item) => {
  return addSignatureResponse({ item });
};

export default getItemHandler;