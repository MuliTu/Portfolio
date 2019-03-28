import React from 'react';
import './style.scss'

const Pill = ({name, image}) => {
    return (
        <div id='pill'>
            <img src={image}/>
            <div>{name}</div>
        </div>
    );
};

export default Pill;
