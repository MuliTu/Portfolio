import React from 'react';
import './style.scss'


const Icon = ({path, type, children}) => {
    return (
        <a id='icon' href={type === 'mail'
            ? `mailto:${path}`
            : `tel:${path}`}>
            <div>
                <img src={require(`../images/${type}.png`)}/>
            </div>
            <div>{children}</div>
        </a>
    )
};

export default Icon;


