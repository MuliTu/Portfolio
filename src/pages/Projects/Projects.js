import React from 'react';
import { getImage } from './utilis';
import './style.scss'

const Projects = ({projects, framework, stateMangment}) => {
    const list = [...framework.list, ...stateMangment.list];
    return (
        <div id={'Projects'}>
            <h2>Projects</h2>
            {

                projects.map((x, index) => (
                    <div key={index} className='project'>
                        <div className='title-wrapper'>
                            <p>{x.name}</p>
                            <br/>
                            <div className='tags'>{x.tags.map((tag, index) =>
                                <div key={index}><img src={getImage(tag, list)}/></div>)}

                            </div>
                        </div>
                        <div className='project-content'>{x.description}</div>
                        <a href={x.link}>Visit me</a>
                        <br/>
                        <a href={x.git}>See Code</a>
                    </div>))
            }
        </div>
    );
};

export default Projects;
