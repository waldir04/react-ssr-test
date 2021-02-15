import axios from 'axios';

import * as HttpCode from '@/constants/commons/httpStatus';

const instance = axios.create({
  baseURL: process.env.CLIENT_SERVICE_BASEPATH
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ status: HttpCode.INTERNAL_SERVER_ERROR, data: {} });
    }

    return Promise.reject(error.response);
  }
);

export default instance;