import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../NavigationBar/NavigationBar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {

    const [hamburger, setHamburger] = useState(false);
    const [navColorChange, setNavColorChange] = useState(false);

    const clickHamburgerHandler = () => setHamburger(!hamburger);
    const changeNavBarColor = () => {
        if (window.scrollY >= 1) {
            setNavColorChange(true);
        } else {
            setNavColorChange(false);
        }
    }

    window.addEventListener("scroll", changeNavBarColor);


  return (
    <div className={navColorChange ? "header-wrapper header-wrapper-bg" : "header-wrapper"}>
        <Link to="/home">
            <h1>React</h1>
        </Link>
        <ul className={hamburger ? "navbar-menu-list active" : "navbar-menu-list"}>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
        </ul>
        <div className='hamburger-menu' onClick={clickHamburgerHandler}>
            {hamburger ? ( 
            <FaTimes size={20} style={{ color: "#fff"}} />
            ) : (
            <FaBars size={20} style={{ color: "#fff"}} />
            )}
        </div>
    </div>
  )
}

export default NavigationBar