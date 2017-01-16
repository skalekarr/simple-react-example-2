import React, {PropTypes} from 'react';

const Header = (props) => {
    return (
        <div className="panel-heading">
            <div className="panel-title">{props.headerText}</div>
        </div>
    );
};

Header.displayName = 'Header';
Header.propTypes = {
    headerText:  PropTypes.string.isRequired
};

export default Header;
