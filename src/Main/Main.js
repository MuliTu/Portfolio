import React from 'react';
import './style.scss'

const Main = () => {
    return (
        <div id='main'>
            <h2>About Me</h2>
            <div className='image'>
                <img
                    src={'https://media.licdn.com/dms/image/C5603AQGxdxGlBif_jg/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=flF1s14VIP4sxWtCDcuYWWCO9gN21VVRAqTlLQAA-uk'}/>
            </div>
            <div>
                <p>
                    During my studies, I developed a passion for Front End Web development. Coding became my hobby as I was striving to learn more. I strongly believe passion for the subject is the basis to achieve excellence.

                    I would welcome opportunity to bring my skills to real projects. Ideally I wish to become valuable asset for busy web agency. I am open to discuss my potential candidacy for both permanent and temporary role. So get in touch now and see what I can bring to your projects.
                </p>
            </div>
        </div>
    );
};

export default Main;
