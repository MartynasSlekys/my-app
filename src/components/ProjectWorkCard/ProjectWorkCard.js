import '../ProjectWorkCard/ProjectWorkCard.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';


const ProjectWorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='project1' />
    <h2 className='project-title'>{props.title}</h2>
    <div className='project-description'>
        <p>{props.text}</p>
        <div className='project-buttons'>
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to={props.viewYt} className="btn">Visit YT</NavLink>
        </div>
    </div>
</div>
  )
}

export default ProjectWorkCard;