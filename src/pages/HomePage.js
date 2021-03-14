import React from 'react';
import './styles/HomePage.css';

import backgroundSmall from '../assets/images/homepage-background-small.jpg';
import backgroundMedium from '../assets/images/homepage-background-medium.jpg';
import backgroundLarge from '../assets/images/homepage-background-large.jpg';

const HomePage = () => {
    return(
        <div className="homepage">
            <picture className="homepage__container">
                <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
                <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
                <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
                <img className="homepage__background" src={backgroundSmall} alt="background images" />
            </picture>
            <h1>Homepage</h1>
        </div>
    )
};

export default HomePage;