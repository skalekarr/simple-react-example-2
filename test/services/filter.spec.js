import {expect} from 'code';

import getFilteredList from './../../src/services/filter';

describe('service: filter', () => {
    let expectedFilteredItems,
        filterValue,
        filteredItems,
        items;

    beforeEach(() => {
       items = ['a', 'b', 'c', 'd'];
    });

    function verifyFilter (value, expectedList) {
        filteredItems = getFilteredList(value, items);

        expect(filteredItems).equals(expectedList)
    }

    it('should filter the items', () => {
        filterValue = 'a';
        expectedFilteredItems = ['a'];

        verifyFilter(filterValue, expectedFilteredItems);
    });

    it('should filter the items', () => {
        filterValue = 'z';
        expectedFilteredItems = [];

        verifyFilter(filterValue, expectedFilteredItems);
    });
});
