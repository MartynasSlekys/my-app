import '../ProjectSection/ProjectSection.scss';

import React, { Component } from 'react';

class ProjectSection extends Component {
    render() {
        return (
            <div className='hero-project-wrapper'>
                <div className='project-title-wrapper'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          );
    }
}

export default ProjectSection