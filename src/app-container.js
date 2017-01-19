import React, {Component} from 'react';
import LoadingIndicator from './views/loading-indicator';
import Header from './views/header';
import Footer from './views/footer';
import InputControl from './views/input-control';
import PizzaContainer from './views/pizza-container';

import fetchData from './services/fetch';
import getFilteredList from './services/filter';
import getSortedList from './services/sort';

function fetchPizzaList() {
    return fetchData()
        .then(function (response) {
            self.setState({pizzaList: response.pizzas, dirtyPizzaList: response.pizzas, isLoading: false});
        });
}

export class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            dirtyPizzaList: [],
            pizzaList: [],
            isLoading: true
        };
    }

    componentDidMount() {
        self = this;
        fetchPizzaList();
    }

    filterData(event) {
        const filterValue = event.target.value.toLowerCase();
        const filteredData = filterValue !== '' ? getFilteredList(filterValue, this.state.pizzaList) : this.state.dirtyPizzaList;
        this.setState({pizzaList: filteredData});
    }

    sortData(event) {
        const sortedData = getSortedList(this.state.pizzaList);
        this.setState({pizzaList: sortedData});
    }

    render() {
        const loadingIndicatorText = 'Loading... Please Wait';
        const headerText = 'Pizza Corner';
        const footerText = 'This app is developed in react for Deere & Co.';

        return (
            <div>
                <Header headerText={headerText}/>
                <InputControl filter={this.filterData.bind(this)} sort={this.sortData.bind(this)}/>
                <div>
                    {this.state.isLoading ?
                        <LoadingIndicator loadingIndicatorText={loadingIndicatorText}/> :
                        <PizzaContainer pizzaList={this.state.pizzaList}/>
                    }
                </div>
                <Footer footerText={footerText}/>
            </div>
        )
    }
}

export default AppContainer;
