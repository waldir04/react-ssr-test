import axios from '@/config/axios-client';

const detail = (itemId) => {
  return axios.get(`/api/items/${itemId}`)
    .then(
      (response) => response,
      (error) => Promise.reject(error.data)
    );
};

const search = (q) => {
  return axios.get('/api/items', { params: { q, limit: 4 } })
    .then(
      (items) => items,
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
