import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';
import classes from './Spinner.module.scss';

describe('Spinner Component', () => {
  test('should show a spinner', () => {
    const { container } = render(<Spinner />);

    const spinner = container.querySelector(`.${classes.Spinner}`)

    expect(spinner).toBeInTheDocument();
  });
});
