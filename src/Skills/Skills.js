import React from 'react';
import Pill from '../Pill/Pill';
import './style.scss'



const Skills = ({skills}) => {
    return (
        <div id='Skills'>
            <h2>Skills</h2>
                {
                    skills.map((data,dataIndex) =>
                        (
                            <div key={dataIndex}>
                                <p>{data.category}</p>
                            <div className='skills-wrapper'>
                                {
                                    data.list.map((skill,index) => (
                                        <div key={index}>
                                        <Pill name={skill.name} image={skill.img}/>
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        ))
                }
        </div>
    );
};

export default Skills;
