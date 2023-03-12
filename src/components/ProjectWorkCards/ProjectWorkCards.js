import '../ProjectWorkCards/ProjectWorkCards.css';
import React from 'react';
import proj1 from '../../images/project1.jpg';
import { NavLink } from 'react-router-dom';


const ProjectWorkCards = () => {
  return (
    <div className='project-wrap'>
        <h1 className='project-heading-title'>Projects</h1>
        <div className='project-wrapper'>
            <div className='project-card'>
                <img src={proj1} alt='project1' />
                <h2 className='project-title'>Project Title</h2>
                <div className='project-description'>
                    <p>This is paragraph</p>
                    <div className='project-buttons'>
                        <NavLink to="https://google.com" className="btn">View</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectWorkCards;