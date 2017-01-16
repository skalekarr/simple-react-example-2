import React, {PropTypes} from 'react';

const Footer = (props) => {
    return (
        <div className="panel-footer">
            <div>{props.footerText}</div>
        </div>
    );
};

Footer.displayName = 'Footer';
Footer.propTypes = {
    footerText:  PropTypes.string.isRequired
};

export default Footer;
