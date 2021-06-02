import axios from '@/config/axios-client';

import ItemService from './ItemService';
import * as HttpCode from '@/constants/commons/httpStatus';

jest.mock('axios', () => {
  return {
    create: () => ({
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() }
      },
      get: jest.fn()
    })
  };
});

describe('ItemService', () => {

  describe('when the detail method is invoked', () => {
    test('should call the correct API service to get the item detail', async () => {
      const item = { id: '1', title: 'test', description: 'testing' };
      const expectedUrl = `/api/items/${item.id}`;

      axios.get.mockImplementationOnce(() => Promise.resolve({ item }));

      await expect(ItemService.detail(item.id)).resolves.toEqual(item);

      expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    });

    test('should return an error when the service fails', async () => {
      const item = { id: '1' };
      const error = { status: HttpCode.INTERNAL_SERVER_ERROR };

      axios.get.mockImplementationOnce(() => Promise.reject({ data: error }));

      await expect(ItemService.detail(item.id)).rejects.toEqual(error);
    });
  });

  describe('when the search method is invoked', () => {
    test('should call the correct API service to find items', async () => {
      const q = 'test';
      const limit = 4;
      const items = [{ id: '1', title: 'test' }, { id: '2', title: 'test2' }];
      const expectedUrl = `/api/items`;

      axios.get.mockImplementationOnce(() => Promise.resolve({ items }));

      await expect(ItemService.search(q, limit)).resolves.toEqual(items);

      expect(axios.get).toHaveBeenCalledWith(expectedUrl, { params: { q, limit }});
    });

    test('should return an error when the service fails', async () => {
      const q = 'test';
      const error = { status: HttpCode.INTERNAL_SERVER_ERROR };

      axios.get.mockImplementationOnce(() => Promise.reject({ data: error }));

      await expect(ItemService.search(q)).rejects.toEqual(error);
    });
  });
});
