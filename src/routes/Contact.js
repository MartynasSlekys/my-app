import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import FooterSection from '../components/FooterSection/FooterSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ProjectSection from '../components/ProjectSection/ProjectSection';

const Contact = () => {
  return (
    <div>
      <NavigationBar />
      <ProjectSection heading="Contact." text="Lets have a chat" />
      <ContactForm />
      <FooterSection />
    </div>
  )
}

export default Contact;