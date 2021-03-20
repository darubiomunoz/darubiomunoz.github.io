import React from 'react';
import './styles/Portfolio.css';

import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Portfolio = () => (
    <div id="portfolio" className="portfolio">
        <h3 className="portfolio__title">Portfolio</h3>
        <p className="portfolio__subtitle mt-3">Hey! Check out some of my personal projects.</p>
        <Carousel>
            <CarouselItem />
        </Carousel>
    </div>
);

export default Portfolio;