import React from 'react';
import AboutPageContent from '../components/AboutPageContent/AboutPageContent';
import FooterSection from '../components/FooterSection/FooterSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ProjectSection from '../components/ProjectSection/ProjectSection';

const About = () => {
  return (
    <div>
      <NavigationBar />
      <ProjectSection heading="About." text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print" />
      <AboutPageContent />
      <FooterSection />
    </div>
  )
}

export default About;