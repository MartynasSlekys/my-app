import '../ProjectWorkCard/ProjectWorkCard.scss';
import React from 'react';
import ProjectWorkCard from '../ProjectWorkCard/ProjectWorkCard';
import ProjectCardData from '../ProjectWorkCardData/ProjectWorkCardData';


const ProjectWorkCardItem = () => {
  return (
    <div className='project-wrap'>
        <h1 className='project-heading-title'>Projects</h1>
        <div className='project-container-wrapper'>
            {ProjectCardData.map((value, index) => {
                return (
                    <ProjectWorkCard 
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    viewYt={value.viewYt}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default ProjectWorkCardItem;