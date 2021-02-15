import axios from '@/config/axios-api';

const getItemHandler = (req, res) => {
  const { iid } = req.query;

  return Promise.all([
    axios.get(`/items/${iid}`),
    axios.get(`/items/${iid}/description`)
  ])
    .then(
      (responses) => {
        res.json(mapItem(responses));
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

export default getItemHandler;