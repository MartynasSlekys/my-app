import React from 'react';
import FooterSection from '../components/FooterSection/FooterSection';
import HeroSection from '../components/HeroSection/HeroSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Home = () => {
  return (
    <div>
        <NavigationBar />
        <HeroSection />
        <FooterSection />
    </div>
  )
}

export default Home;