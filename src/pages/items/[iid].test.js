import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';

import { getServerSideProps } from './[iid]';
import ItemService from './../../services/ItemService';
import * as HttpCode from '@/constants/commons/httpStatus';

jest.mock('./../../services/ItemService', () => {
  return {
    detail: jest.fn()
  };
});

jest.mock('@/hoc/withErrorHandler/withErrorHandler', () => (Component) => props => <Component {...props} /> );

describe('Detail Page', () => {

  describe('When the getServerSideProps method is invoked', () => {
    test('should get the item detail', async() => {
      const item = { id: '1', title: 'test', description: 'testing' };

      ItemService.detail.mockImplementationOnce(() => Promise.resolve(item));

      const response = await getServerSideProps({ params: {} });

      expect(response).toEqual({ props: { item } });
    });

    test('should return an error when server fails', async () => {
      const error = { status: HttpCode.INTERNAL_SERVER_ERROR };

      ItemService.detail.mockImplementationOnce(() => Promise.reject(error));

      const response = await getServerSideProps({ params: {} });

      expect(response).toEqual({ props: { error } });
    });
  });

  it('should renders detail page', async () => {
    const item = { id: '1', title: 'test', description: 'testing', price: { amount: 100 } };

    ItemService.detail.mockImplementationOnce(() => Promise.resolve(item));

    const { render } = await getPage({
      route: `/items/${item.id}`
    });

    render();

    expect(screen.getByText(item.description)).toBeInTheDocument();
  });
});
