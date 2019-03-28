import React from 'react';
import Pill from '../Pill/Pill';
import './style.scss'

//TODO change test name

const Skills = ({skills}) => {
    return (
        <div id='skills'>
            <h2>Skills</h2>
                {
                    skills.map(data =>
                        (
                            <div>
                                <p>{data.category}</p>
                            <div className={'test'}>

                                {
                                    data.list.map(skill => (
                                        <Pill name={skill.name} image={skill.img}/>
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
