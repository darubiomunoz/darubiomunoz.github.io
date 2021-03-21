import React from 'react';
import './styles/Portfolio.css';

import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Portfolio = () => (
  <div id="portfolio" className="portfolio">
    <h3 className="portfolio__title" tabIndex="0">
      Portfolio
    </h3>
    <p className="portfolio__subtitle mt-3" tabIndex="0">
      Hey! Check out some of my personal projects. Click the github icon to go
      to the project's repository or Click the website icon to go to the
      project's site
    </p>
    <Carousel>
      <CarouselItem />
    </Carousel>
  </div>
);

export default Portfolio;