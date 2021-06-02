import { render, screen } from '@testing-library/react';

import ItemList from './ItemList';

jest.mock('./ItemCard/ItemCard', () => () => 'ItemCard');

describe('ItemList Component', () => {
  test('should show a list of items', () => {
    const items = [{ id: '1'}, {id: '2'}, {id: '3'}];

    render(<ItemList items={items} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toEqual(items.length);
  });
});
