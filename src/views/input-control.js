import React, {PropTypes} from 'react';

const InputControl = (props) => {
    return (
        <div className="row panel-body">
            <div className="col-sm-8">
                <input
                    type="text"
                    className="form-control"
                    onKeyUp={props.filter}
                />
            </div>
            <div className="col-sm-4">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.sort}>
                    sort
                </button>
            </div>
        </div>
    );
};

InputControl.displayName = 'InputControl';
InputControl.propTypes = {
    filter:  PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired
};

export default InputControl;
