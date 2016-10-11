import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {Filter} from '../src/filter';

describe('<Filter /> Component', () => {
    let renderedFilter;

    beforeEach(() => {
        renderedFilter = shallow(<Filter pizzas={{pizzas: []}}/>);
    });

    it('should ', () => {
        expect();
    });
});
