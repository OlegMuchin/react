import React from 'react';
import "./EllipseButton.css"

function EllipseButton({id, text, ...props}) {
    return (
        <div className='EllipseButton' id = {id}>
            <div id='ellipse'/>
            <label className='btnText'>{text}</label>
            <div id='arrow'/>
        </div>
    );
}

export default EllipseButton;