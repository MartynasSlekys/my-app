import '../AboutPageContent/AboutPageContent.scss';
import react1 from '../../images/react1.jpg';
import React from 'react';
import { Link } from 'react-router-dom';


const AboutPageContent = () => {
  return (
    <div className='about-page-wrap'>
        <div className='about-page-left-content'>
            <h1>React</h1>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='about-page-right-content'>
            <div className='about-img-wrapper'>
                <img src={react1} className="react-img" alt='react' />
            </div>
        </div>
    </div>
  )
}

export default AboutPageContent;