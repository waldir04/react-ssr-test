import axios from '@/config/axios-client';

const detail = (itemId) => {
  return axios.get(`/api/items/${itemId}`)
    .then(
      (response) => response.item,
      (error) => Promise.reject(error.data)
    );
};

const search = (q, limit = 4) => {
  return axios.get('/api/items', { params: { q, limit } })
    .then(
      (response) => response.items,
      (error) => {
        return Promise.reject(error.data);
      }
    );
};

const itemService = {
  detail,
  search
};

export default itemService;
