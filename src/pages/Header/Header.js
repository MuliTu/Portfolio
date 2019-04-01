import React from 'react';
import { Link } from 'react-scroll';

import './style.scss'

export const Header = ({titles}) => {

    const titleEntity = (title, index) => (
        <div key={index}>
            <Link
                activeClass="active"
                to={title.replace(' ', '_')}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <p> {title}</p>
            </Link>
        </div>
    );

    return (
        <div className='header'>
            {
                titles.map(titleEntity)
            }
        </div>
    );

};

export default Header;
