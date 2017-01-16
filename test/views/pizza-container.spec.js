import React from 'react';

import Chance from 'chance';
import {expect} from 'code';
import {shallow} from 'enzyme';

import PizzaContainer from '../../src/views/pizza-container';

describe('<PizzaContainer/>', () => {
    let chance,
        renderedView,
        testProps;

    beforeEach(() => {
        chance = new Chance();

        testProps = {pizzaList: chance.unique(chance.string, 5)};

        renderedView = shallow(<PizzaContainer {...testProps}/>).node;
    });

    it('should have div type', () => {
        expect(renderedView.type).equals('div');
    });

    it('should have panel', () => {
        expect(renderedView.props.className).equals('panel-body');
    });

    describe('and container is rendered', () => {
        let childElement;

        beforeEach(() => {
            childElement = renderedView.props.children;
        });

       it('should have list', () => {
           expect(childElement.type).equals('ul');
       });

       it('should display child elements', () => {
          expect(childElement.props.children).to.have.length(5);
       });
    });
});
