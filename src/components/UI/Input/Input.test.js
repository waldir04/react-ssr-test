import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

describe('Input Component', () => {
  test('should render a input element', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  test('should set a initial value', () => {
    const value = 'test';

    render(<Input value={value} />);

    const input = screen.getByRole('textbox');

    expect(input.value).toEqual(value);
  });

  test('should call the changed function every time the user types', () => {
    const value = 'test';
    const onChangeMock = jest.fn(() => 'test');

    render(<Input changed={onChangeMock} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, value);

    expect(onChangeMock).toHaveBeenCalledTimes(value.length);
  });

  test('should call the changed function with the correct value', () => {
    const value = 'Hi';
    const onChangeMock = jest.fn((v) => v);

    render(<Input changed={onChangeMock} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, value);

    expect(onChangeMock).toHaveBeenCalledWith(value);
  });

});
