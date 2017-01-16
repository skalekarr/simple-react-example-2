import {expect} from 'code';

import getSortedList from './../../src/services/sort';

describe('service: sort', () => {
    let expectedSortedItems,
        sortItems,
        items;

    it('should sort the items', () => {
        items = ['z', 'b', 'e', 'd'];
        expectedSortedItems = ['z', 'e', 'd', 'b'];

        sortItems = getSortedList(items);

        expect(sortItems).equals(expectedSortedItems);
    });
});
