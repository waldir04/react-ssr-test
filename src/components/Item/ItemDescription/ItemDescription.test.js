import { render, screen } from '@testing-library/react';

import ItemDescription from './ItemDescription';

const item = {
  id: '1',
  title: 'test',
  picture: 'http://testing.com/fake-picture.jpg/',
  price: {
    amount: 100.1,
    decimals: 1
  }
}

describe('ItemDescription Component', () => {
  test('should show the item title', () => {
    render(<ItemDescription item={item} />);

    const title = screen.getByText(item.title);

    expect(title).toBeInTheDocument();
  });

  test('should show the item image', () => {
    render(<ItemDescription item={item} />);

    const image = screen.getByRole('img');

    expect(image.src).toEqual(item.picture);
  });

  test('should show the item amount', () => {
    const expectedAmount = '$100.1';
    render(<ItemDescription item={item} />);

    const amount = screen.getByText(expectedAmount);

    expect(amount).toBeInTheDocument();
  });

});