import React from 'react';

import Chance from 'chance';
import {expect} from 'code';
import {shallow} from 'enzyme';

import LoadingIndicator from '../../src/views/loading-indicator';

describe('</LoadingIndicator>', () => {
    let chance,
        renderedView,
        testProps;

    beforeEach(() => {
        chance = new Chance();
        testProps = {loadingIndicatorText: chance.string()};

        renderedView = shallow(<LoadingIndicator {...testProps}/>).node;
    });

    it('should display the loading text', () => {
       expect(renderedView.props.children).equals(testProps.loadingIndicatorText);
    });
});
