import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemSearch from './ItemSearch';

jest.mock('./../../UI/InputSearch/InputSearch', () => ({ changed, search }) => {
  const handleOnClick = () => {
    changed(search);
  };

  return <button onClick={handleOnClick} />;
});

describe('ItemSearch Component', () => {
  test('should redirect to correct URL when user search for something', () => {
    const query = 'testing';
    const useRouterMock = {
      push: jest.fn(),
      query: {
        search: query
      }
    };

    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => useRouterMock);
    render(<ItemSearch />);

    const searchButton = screen.getByRole('button');

    userEvent.click(searchButton);

    expect(useRouterMock.push).toHaveBeenCalledWith({
      pathname: '/items',
      query: { search: query }
    });
  });
});
