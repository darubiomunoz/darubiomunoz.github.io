import React from 'react';
import './styles/HomePage.css';

import backgroundSmall from '../assets/images/homepage-background-small.jpg';
import backgroundMedium from '../assets/images/homepage-background-medium.jpg';
import backgroundLarge from '../assets/images/homepage-background-large.jpg';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DownArrow from '../assets/icons/down-arrow.svg';

const ComponentLogic = () => {
    const screen = window.screen.width;

    return { screen }
}

const HomePage = () => {
    const { screen } = ComponentLogic();
    return(
        <div className="homepage">
            <picture className="homepage__container">
                <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
                <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
                <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
                <img className="homepage__background" src={backgroundSmall} loading="lazy" alt="background images" />
            </picture>
            <Header />
            <Hero />
            {screen >= 992 &&
                <a className="homepage__link--icon" href="#aboutme">
                    <img className="homepage__icon" src={DownArrow} alt="Down Arrow Icon" />
                </a>
            }
        </div>
    );
};

export default HomePage;