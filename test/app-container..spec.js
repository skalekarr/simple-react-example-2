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

      it('should contain <InputControl/>', () => {
        const filterStub = sandbox.stub();
        const sortStub = sandbox.stub();
        const InputControlProps = {filter: filterStub , sort: sortStub};

        expect(childElement[1].type).equals(InputControl);
        //expect(childElement[1].props).equals(InputControlProps);
      });

      it('should contain <Footer/>', () => {
        const footerProps = {footerText: 'This app is developed in react for Deere & Co.'};
        expect(childElement[3].type).equals(Footer);
        expect(childElement[3].props).equals(footerProps);
      });

      describe('and page is loading', () => {
        it('should contain <LoadingIndicator/>', () => {
          expect(childElement[2].props.children.type).equals(LoadingIndicator);
        });
      });

      describe('and page is loaded', () => {
        it('should contain <PizzaContainer/>', () => {
          const pizzaList = chance.unique(chance.string, 5);

          renderedContainer = shallow(<AppContainer/>);
          renderedContainer.setState({isLoading: false});
          renderedContainer.setState({pizzaList: pizzaList});

          childElement = renderedContainer.props().children;

          expect(childElement[2].props.children.type).equals(PizzaContainer);
          expect(childElement[2].props.children.props).equals({pizzaList: pizzaList});
        });
      });
    });
});
