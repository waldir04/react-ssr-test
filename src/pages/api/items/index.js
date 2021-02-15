import axios from '@/config/axios-api';

const searchItemHandler = (req, res) => {
  let { q, limit } = req.query;
  limit = limit || 4;

  return axios.get('/sites/MLA/search', { params: { q, limit } })
  .then(
    (response) => res.json(mapItems(response)),
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

export default searchItemHandler;
