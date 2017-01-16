import React from 'react';

import Chance from 'chance';
import {expect} from 'code';
import {shallow} from 'enzyme';

import Footer from '../../src/views/footer';

describe('</Footer>', () => {
    let chance,
        renderedView,
        testProps;

    beforeEach(() => {
        chance = new Chance();
        testProps = {footerText: chance.string()};

        renderedView = shallow(<Footer {...testProps}/>).node;
    });

    it('should render header', () => {
        expect(renderedView.type).equals('div');
    });

    it('should have panel-heading class', () => {
        expect(renderedView.props.className).equals('panel-footer');
    });

    describe('given children are rendered', () => {
        let childElement;

        beforeEach(() => {
            childElement = renderedView.props.children;
        });

        it('should render the children', () => {
            expect(childElement.type).equals('div');
        });

        it('should have panel-title class', () => {
            expect(childElement.props.children).equals(testProps.footerText);
        });
    });
});
