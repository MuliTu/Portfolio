import React from 'react';
import Title from '../../components/Title/Title';
import './style.scss'

const Education = () => {
    return (
        <div id='Education'>
            <Title text={'Eduction'}/>
            <div>
                <img className='symbol'
                     src={'https://www.portnox.com/wp-content/uploads/2014/06/collegeofmanagement.png'}
                     width={40}
                     height={40}/>
                <div className='education-context'>

                    <div className='title'>BACHELOR OF SCIENCE (B.SC.), COMPUTER SCIENCE.</div>
                    <div>College of Academic Management Studies, Rishon Le Zion</div>
                </div>

                <div className='years'>2014 - 2018</div>
            </div>
        </div>
    );
};

export default Education;
