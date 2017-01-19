import React, {Component} from 'react';

import LoadingIndicator from './views/loading-indicator';
import Header from './views/header';
import Footer from './views/footer';
import InputControl from './views/input-control';
import PizzaContainer from './views/pizza-container';

import fetchData from './services/fetch';
import getFilteredList from './services/filter';
import getSortedList from './services/sort';

export class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            dirtyPizzaList: [],
            pizzaList: []
        };
    }

    filterData(event) {
        this.state.pizzaList = this.state.dirtyPizzaList;
        const filterValue = event.target.value.toLowerCase();
        const filteredData = getFilteredList(filterValue, this.state.pizzaList);

        this.setState({pizzaList: filteredData});
    }

    sortData(event) {
        const sortedData = getSortedList(this.state.pizzaList);

        this.setState({pizzaList: sortedData});
    }

    componentDidMount() {
      fetchData()
          .then((response) => {
              this.setState({pizzaList: response.pizzas});
              this.setState({dirtyPizzaList: response.pizzas});
              this.setState({isLoading: false});
          }).bind(this);
    }

    render() {
        const footerText = 'This app is developed in react.';
        const headerText = 'Pizza Corner';
        const loadingIndicatorText = 'Loading... Please Wait';

        return (
            <div>
                <Header headerText={headerText}/>
                {this.state.isLoading ?
                    <LoadingIndicator loadingIndicatorText={loadingIndicatorText}/> :
                    <div>
                      <InputControl filter={this.filterData.bind(this)} sort={this.sortData.bind(this)}/>
                      <PizzaContainer pizzaList={this.state.pizzaList}/>
                    </div>
                }
                <Footer footerText={footerText}/>
            </div>
        )
    }
}

export default AppContainer;
