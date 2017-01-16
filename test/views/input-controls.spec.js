import React from 'react';

import Chance from 'chance';
import sinon from 'sinon';
import {expect} from 'code';
import {shallow} from 'enzyme';

import InputControl from '../../src/views/input-control';

describe('</InputControl>', () => {
    let chance,
        filterStub,
        renderedView,
        sandbox,
        sortStub,
        testProps;

    beforeEach(() => {
        chance = new Chance();
        sandbox = sinon.sandbox.create();
        filterStub = sandbox.stub();
        sortStub = sandbox.stub();

        testProps = {filter: filterStub, sort: sortStub};

        renderedView = shallow(<InputControl {...testProps}/>).node;
    });

    it('should have div type', () => {
        expect(renderedView.type).equals('div');
    });

    it('should have row class', () => {
        expect(renderedView.props.className).equals('row');
    });

    describe('given children are rendered', () => {
        let childElement;
        beforeEach(() => {
            childElement = renderedView.props.children;
        });

        describe('and input element is rendered', () => {
            let inputElement;

            beforeEach(() => {
                inputElement = childElement[0];
            });

            it('should render div ', () => {
                expect(inputElement.type).equals('div');
            });

            it('should have input', () => {
                expect(inputElement.props.children.type).equals('input');
            });

            it('should filter', () => {
                inputElement.props.children.props.onKeyUp();

                sinon.assert.calledOnce(filterStub);
            });
        });

        describe('and button element is rendered', () => {
            let buttonElement;

            beforeEach(() => {
                buttonElement = childElement[1];
            });

            it('should render div ', () => {
                expect(buttonElement.type).equals('div');
            });

            it('should have button', () => {
                expect(buttonElement.props.children.type).equals('button');
            });

            it('should sort', () => {
                buttonElement.props.children.props.onClick();

                sinon.assert.calledOnce(sortStub);
            });
        });
    });
});
