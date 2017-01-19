import React from 'react';
import Chance from 'chance';

import sinon from 'sinon';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {AppContainer} from '../src/app-container';

import LoadingIndicator from '../src/views/loading-indicator';
import Header from '../src/views/header';
import Footer from '../src/views/footer';
import InputControl from '../src/views/input-control';
import PizzaContainer from '../src/views/pizza-container';

describe('<AppContainer /> Component', () => {
    let chance,
        renderedContainer,
        sandbox;

    beforeEach(() => {
        chance = new Chance();
        sandbox = sinon.sandbox.create();

        renderedContainer = shallow(<AppContainer/>).node;
    });

    it('should contain a div', () => {
        expect(renderedContainer.type).equals('div');
    });

    describe('when children are rendered', () => {
      let childElement;

      beforeEach(() => {
        childElement = renderedContainer.props.children;
      });

      it('should contain <Header/>', () => {
        const headerProps = {headerText: 'Pizza Corner'};
        expect(childElement[0].type).equals(Header);
        expect(childElement[0].props).equals(headerProps);
      });

      it('should contain <Footer/>', () => {
        const footerProps = {footerText: 'This app is developed in react.'};
        expect(childElement[2].type).equals(Footer);
        expect(childElement[2].props).equals(footerProps);
      });

      describe('and page is loading', () => {
        it('should contain <LoadingIndicator/>', () => {
          const loadingIndicatorText = {loadingIndicatorText: 'Loading... Please Wait'};
          expect(childElement[1].type).equals(LoadingIndicator);
          expect(childElement[1].props).equals(loadingIndicatorText);
        });
      });

      describe('and page is loaded', () => {
        let LoadedContainer, pizzaList;

        beforeEach(() => {
          pizzaList = chance.unique(chance.string, 5);

          renderedContainer = shallow(<AppContainer/>);
          renderedContainer.setState({isLoading: false});
          renderedContainer.setState({pizzaList: pizzaList});

          childElement = renderedContainer.props().children;
          LoadedContainer = childElement[1].props.children;
        });

        it('should contain <InputControl/>', () => {
          expect(LoadedContainer[0].type).equals(InputControl);
        });

        it('should contain <PizzaContainer/>', () => {
          expect(LoadedContainer[1].type).equals(PizzaContainer);
          expect(LoadedContainer[1].props).equals({pizzaList: pizzaList});
        });
      });
    });
});
