import React from 'react';
import Pill from '../../UI/Pill/Pill';
import './style.scss'
import Title from '../../components/Title/Title';



const Skills = ({skills}) => {
    return (
        <div id='Skills'>
            <Title text={'Skills'}/>
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
