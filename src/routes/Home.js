import React from 'react';
import FooterSection from '../components/FooterSection/FooterSection';
import HeroSection from '../components/HeroSection/HeroSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ProjectWorkCardItem from '../components/ProjectWorkCardItem/ProjectWorkCardItem';

const Home = () => {
  return (
    <div>
        <NavigationBar />
        <HeroSection />
        <ProjectWorkCardItem />
        <FooterSection />
    </div>
  )
}

export default Home;