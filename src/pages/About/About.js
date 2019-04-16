import React from 'react';
import './style.scss'
import Title from '../../components/Title/Title';

const imagePath = 'https://media.licdn.com/dms/image/C5603AQGxdxGlBif_jg/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=flF1s14VIP4sxWtCDcuYWWCO9gN21VVRAqTlLQAA-uk';
const About = () => {
    return (
        <div id='About'>
            <Title text={'About me'}/>
            <div className='image'>
                <img
                    src={imagePath}
                    alt='myPicture'/>
            </div>
            <div>
                <p>
                    During my BSc studies, I have developed a vast passion for Front End Web development. Coding became
                    my hobby as I was striving to learn more. I strongly believe in passion for the subject to achieve
                    excellence. Ideally, I wish to become a valuable asset and bring my skills to great projects in a
                    top web agency.
                    I am open to discuss my potential candidacy for both permanent and temporary role. So get in touch
                    with me and see what I can contribute to your projects.
                </p>
            </div>
        </div>
    );
};

export default About;
