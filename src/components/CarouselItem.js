import React from 'react';
import './styles/CarouselItem.css';

import playIcon from '../assets/icons/icon-github.svg';
import plusIcon from '../assets/icons/icon-linkedin.svg';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={`Image of ${title}`} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
                    <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration} minutos`}
                </p>
            </div>
        </div> 
    );
}

export default CarouselItem;