import React from 'react';
import './style.scss'

const Pill = ({name, image}) => {
    return (
        <div id='pill'>
            <img src={image} alt='pillImage'/>
            <div>{name}</div>
        </div>
    );
};

export default Pill;
