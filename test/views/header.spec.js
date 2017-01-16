import React from 'react';

import Chance from 'chance';
import {expect} from 'code';
import {shallow} from 'enzyme';

import Header from '../../src/views/header';

describe('</Header>', () => {
    let chance,
        renderedView,
        testProps;

    beforeEach(() => {
        chance = new Chance();
        testProps = {headerText: chance.string()};

        renderedView = shallow(<Header {...testProps}/>).node;
    });

    it('should render header', () => {
        expect(renderedView.type).equals('div');
    });

    it('should have panel-heading class', () => {
        expect(renderedView.props.className).equals('panel-heading');
    });

    describe('given children are rendered', () => {
        let childElement;
        beforeEach(() => {
            childElement = renderedView.props.children;
        });

        it('should render the children', () => {
           expect(childElement.type).equals('div');
        });

        it('should render the children', () => {
            expect(childElement.props.className).equals('panel-title');
        });

        it('should have panel-title class', () => {
           expect(childElement.props.children).equals(testProps.headerText);
        });
    });
});
