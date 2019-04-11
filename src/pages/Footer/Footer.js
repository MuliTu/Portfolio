import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Icon from '../../UI/Icon/Icon';

import './style.scss'

const Footer = () => {
    return (
        <footer id='Contact'>
            <div className='content'>
                <div className='section'>
                    <p>Social</p>
                    <SocialIcon className='spinning-icon' url={'http://www.linkedin.com/in/muli-turiel'}/>
                    <SocialIcon className='spinning-icon' url={'http://www.facebook.com/muli.turiel'}/>
                    <SocialIcon className='spinning-icon' url={'http://github.com/MuliTu'}/>
                    <SocialIcon className='spinning-icon' url={'http://www.instagram.com/muli4'}/>
                </div>
                <div className='section'>
                    <p>Contact Me</p>
                    <Icon type={'mail'} path={'muli.turiel@gmail.com'}>muli.turiel@gmail.com</Icon>
                    <br/>
                    <Icon type={'phone'} path={'0523668030'}>(+972) 052-3668030</Icon>
                </div>
            </div>
            <hr/>
            <div className='copyrights'>
                <b>Shmuel Turiel</b> ©2019
            </div>
        </footer>
    );
};

export default Footer;
