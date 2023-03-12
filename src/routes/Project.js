import React from 'react';
import FooterSection from '../components/FooterSection/FooterSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PricingCards from '../components/PricingCards/PricingCards';
import ProjectSection from '../components/ProjectSection/ProjectSection';

const Project = () => {
  return (
    <div>
      <NavigationBar />
      <ProjectSection heading="Welcome to Projects." text="Lorem ipsum, or lipsum as it is sometimes known." />
      <PricingCards />
      <FooterSection />
    </div>
  )
}

export default Project;