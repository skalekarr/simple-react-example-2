import React, {PropTypes} from 'react';

const LoadingIndicator = (props) => {
    return (
        <h3>{props.loadingIndicatorText}</h3>
    );
};

LoadingIndicator.displayName = 'LoadingIndicator';
LoadingIndicator.propTypes = {
    loadingIndicatorText:  PropTypes.string.isRequired
};

export default LoadingIndicator;
