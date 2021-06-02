import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputSearch from './InputSearch';

describe('InputSearch Component', () => {
  test('should set an initial search value', () => {
    const query = 'test';

    render(<InputSearch search={query} />);

    const input = screen.getByRole('textbox');

    expect(input.value).toEqual(query);
  });

  test('should call the changed function with the correct value when user hit enter key', () => {
    const query = 'test';
    const onChangedMock = jest.fn((q) => q);

    render(<InputSearch changed={onChangedMock} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, `${query}{enter}`);

    expect(onChangedMock).toHaveBeenCalledWith(query);
  });

  test('should call the changed function with the correct value when user clicks search button', () => {
    const query = 'test';
    const onChangedMock = jest.fn((q) => q);

    render(<InputSearch changed={onChangedMock} />);

    const input = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');

    userEvent.type(input, query);
    userEvent.click(searchButton);

    expect(onChangedMock).toHaveBeenCalledWith(query);
  });
});
