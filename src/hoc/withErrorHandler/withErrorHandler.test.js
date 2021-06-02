import { render, screen } from '@testing-library/react';

import withErrorHandler from './withErrorHandler';
import * as ErrorType from '@/components/Error/constants/ErrorType';
import * as HttpCode from '@/constants/commons/httpStatus';

const NotFoundErrorMock = 'NotFoundError';
const UnknownErrorMock = 'UnknownError';

jest.mock('./../../components/Error/NotFoundError/NotFoundError', () => () => NotFoundErrorMock);
jest.mock('./../../components/Error/UnknownError/UnknownError', () => () => UnknownErrorMock);

describe('withErrorHandler Component', () => {
  let WithErrorHandler;

  beforeEach(() => {
    const mockComponent = jest.fn(() => null);
    WithErrorHandler = withErrorHandler(mockComponent, ErrorType.ITEM_DESCRIPTION);
  });

  test('should show a not found error', () => {
    const error = { status: HttpCode.NOT_FOUND };

    render(<WithErrorHandler error={error} />);

    expect(screen.getByText(NotFoundErrorMock)).toBeInTheDocument();
  });

  test('should show a unknown error', () => {
    const error = { status: HttpCode.INTERNAL_SERVER_ERROR };

    render(<WithErrorHandler error={error} />);

    expect(screen.getByText(UnknownErrorMock)).toBeInTheDocument();
  });
});
