import { render, screen } from '@testing-library/react';

import ItemCard from './ItemCard';

const item = {
  id: '1',
  title: 'test',
  picture: 'http://testing.com/fake-picture.jpg/',
  price: {
    amount: 100.1,
    decimals: 1
  }
}

describe('ItemCard Component', () => {
  test('should show the item title', () => {
    render(<ItemCard item={item} />);

    const title = screen.getByText(item.title);

    expect(title).toBeInTheDocument();
  });

  test('should show the item image', () => {
    render(<ItemCard item={item} />);

    const image = screen.getByRole('img');

    expect(image.src).toEqual(item.picture);
  });

  test('should show the item amount', () => {
    const expectedAmount = '$100.1';
    render(<ItemCard item={item} />);

    const amount = screen.getByText(expectedAmount);

    expect(amount).toBeInTheDocument();
  });

  test('should be available the link to item description', () => {
    const expectedLink = `/items/${item.id}`;

    render(<ItemCard item={item} />);

    const links = screen.getAllByRole('link');

    expect(links[0].href).toContain(expectedLink);
  });
});