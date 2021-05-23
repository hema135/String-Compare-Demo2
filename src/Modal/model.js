import React from 'react';
import './style.css';
import CloseIcon from '@material-ui/icons/Close';

function Model(props) {
    return (props.trigger)? (
        <div className="popup">
            <div className="popup-inner">
            <button className="close-btn btn btn-danger" onClick={() => props.setTrigger(false)}><CloseIcon /></button>
            {props.children }
            </div>
        </div>
    ): "";
}

export default Model;