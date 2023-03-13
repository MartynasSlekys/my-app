import '../FooterSection/FooterSection.scss';
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='left-side-content'>
                <div className='footer-location-wrapper'>
                    <FaHome 
                    size={20} 
                    style={{ color: "#fff", marginRight: "2rem" }} 
                    />
                    <div>
                        <p>123 React.</p>
                        <p>React App.</p>
                    </div>
                </div>
                <div className='footer-phone-wrapper'>
                    <FaPhone 
                    size={20} 
                    style={{ color: "#fff", marginRight: "2rem" }} 
                    />
                    <div className='footer-contact-info'>
                        <a href='tel:+44 777-777-222'>+44 777-777-222</a>
                    </div>
                </div>
                <div className='footer-email-wrapper'>
                    <FaMailBulk
                    size={20} 
                    style={{ color: "#fff", marginRight: "2rem" }} 
                    />
                    <div className='footer-email-info'>
                        <a href='mailto:react@gmail.com'>react@gmail.com</a>
                    </div>
                </div>

            </div>
            <div className='right-side-content'>
                <h4 className='company-title'>About the company</h4>
                <p className='company-description'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum.</p>
                <div className='footer-social-media'>
                <FaFacebook 
                size={30} 
                style={{ color: "#fff", marginRight: "1rem" }} 
                />

                <FaTwitter 
                size={30} 
                style={{ color: "#fff", marginRight: "1rem" }} 
                />

                <FaLinkedin
                size={30} 
                style={{ color: "#fff", marginRight: "1rem" }} 
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection