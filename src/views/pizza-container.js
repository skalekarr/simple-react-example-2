import React, {PropTypes} from 'react';

const PizzaContainer = (props) => {
    return (
        <div className="panel-body">
            <ul className="list-group">
                {
                    props.pizzaList.map(function(item, index) {
                        return (<li className="list-group-item" key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
};

PizzaContainer.displayName = 'PizzaContainer';
PizzaContainer.propTypes = {
    pizzaList:  PropTypes.array.isRequired
};

export default PizzaContainer;
