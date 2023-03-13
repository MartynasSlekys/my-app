import React from 'react';
import '../HeroSection/HeroSection.scss';
import HeroBoxImg from '../../images/hero-bg.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-box'>
        <div className='hero-image-wrapper'>
            <img className='hero-box-image' src={HeroBoxImg} alt='HeroBoxImg' />
        </div>
        <div className='hero-box-content'>
            <p>Welcome, to my page.</p>
            <h1>Created Using React.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;