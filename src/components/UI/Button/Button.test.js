import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';
import * as ButtonType from './constants/ButtonType';

describe('Button Component', () => {
  test('should render a button element', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('should render the content button', () => {
    const textButton = 'Test Button';

    render(<Button>{textButton}</Button>);

    const button = screen.getByText(textButton);

    expect(button).toBeInTheDocument();
  });

  test('should call the clicked function', () => {
    const onClickMock = jest.fn(() => 'test');

    render(<Button clicked={onClickMock} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  test('should render the correct button type', () => {
    render(<Button btnType={ButtonType.Primary} />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(ButtonType.Primary);
  });
});
