import React from 'react';
import './styles/HomePage.css';

import backgroundSmall from '../assets/images/homepage-background-small.jpg';
import backgroundMedium from '../assets/images/homepage-background-medium.jpg';
import backgroundLarge from '../assets/images/homepage-background-large.jpg';
import Header from '../components/Header';

const HomePage = () => {
    return(
        <div className="homepage">
            <picture className="homepage__container">
                <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
                <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
                <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
                <img className="homepage__background" src={backgroundSmall} alt="background images" />
            </picture>
            <Header />
            <div className="homepage__hero">
                <p className="homepage__title">Welcome,</p>
                <p className="homepage__title color-option4">I'm Diego Rubio</p>
                <p className="homepage__title margin-bottom">A Front-end Developer.</p>
            </div>
        </div>
    );
};

export default HomePage;