import { render, screen } from '@testing-library/react';

import NotFoundError from './NotFoundError';
import * as ErrorType from './../constants/ErrorType';

describe('NotFoundError Component', () => {
  test('should show the correct error message when there is an error on the item list page', () => {
    render(<NotFoundError type={ErrorType.ITEM_LIST} />);

    const message = screen.getByText('error:search-item-not-found');

    expect(message).toBeInTheDocument();
  });

  test('should show the correct error message when there is an error on the item description page', () => {
    render(<NotFoundError type={ErrorType.ITEM_DESCRIPTION} />);

    const message = screen.getByText('error:item-not-found');

    expect(message).toBeInTheDocument();
  });

  test('should show a default error message', () => {
    render(<NotFoundError />);

    const message = screen.getByText('error:not-found');

    expect(message).toBeInTheDocument();
  });

});
