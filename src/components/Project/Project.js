import React from 'react';
import { getImage } from '../../pages/Projects/utilis';

const Project = ({project,list}) => {
    return (
        <div className='project'>
            <div className='title-wrapper'>
                <p>{project.name}</p>
                <br/>
                <div className='tags'>{project.tags.map(tag =>
                    <img src={getImage(tag, list)}/>)}</div>
            </div>
            <div className='project-content'>{project.description}</div>
            <a href={project.link}>Visit me</a>
            <br/>
            <a href={project.git}>See Code</a>
        </div>
    );
};

export default Project;
