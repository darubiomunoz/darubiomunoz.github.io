import React from 'react';
import './styles/AboutMe.css';

import backgroundSmall from '../assets/images/aboutme-background-small.jpg';
import backgroundMedium from '../assets/images/aboutme-background-medium.jpg';
import backgroundLarge from '../assets/images/aboutme-background-large.jpg';
import Header from '../components/Header';

const AboutMe = () => {
    return(
        <div className="homepage">
            <picture className="homepage__container">
                <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
                <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
                <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
                <img className="homepage__background" src={backgroundSmall} loading="lazy" alt="background images" />
            </picture>
            <Header />
            <div className="homepage__hero">
                <p className="homepage__title" tabIndex="0">Welcome,</p>
                <p className="homepage__title color-option4" tabIndex="0">I'm Diego Rubio</p>
                <p className="homepage__title margin-bottom" tabIndex="0">A Front-end Developer.</p>
            </div>
        </div>
    );
};

export default AboutMe;