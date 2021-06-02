import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UnknownError from './UnknownError';

const useRouterMock = {
  reload: jest.fn()
};

describe('UnknownError Component', () => {
  test('should show the correct error message', () => {
    render(<UnknownError />);

    const message = screen.getByText('error:something-went-wrong');

    expect(message).toBeInTheDocument();
  });

  test('should reload the page when the user clicks try again button', () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => useRouterMock);
    render(<UnknownError />);

    const tryAgainButton = screen.getByRole('button');
    userEvent.click(tryAgainButton);

    expect(useRouterMock.reload).toHaveBeenCalled();
  });
});
