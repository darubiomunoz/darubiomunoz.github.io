import React from 'react';
import './styles/CarouselItem.css';

import GithubIcon from '../assets/icons/icon-github.svg';
import plusIcon from '../assets/icons/icon-linkedin.svg';

const ComponentLogic = () => {
    const URL = 'https://api.jsonbin.io/b/60548436683e7e079c546027';

    const fetchData = async (_URL) => {
        const response = await fetch(_URL);
        const data = await response.json();
        return data;
    }

    const data = fetchData(URL);

    return { data }
}

const CarouselItem = ({ id, cover, title, description, link, code }) => {
    const { data } = ComponentLogic();

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={`Image of ${title}`} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={GithubIcon} alt="Play Icon" /> 
                    <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
{/*                     {`${year} ${contentRating} ${duration} minutos`} */}
                </p>
            </div>
        </div>
    );
}

export default CarouselItem;