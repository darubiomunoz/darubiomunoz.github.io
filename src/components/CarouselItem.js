/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "./styles/CarouselItem.css";

import GithubIcon from "../assets/icons/icon-github.svg";
import SiteIcon from "../assets/icons/site-icon.svg";

const ComponentLogic = () => {
  const [data, setData] = useState([]);

  const URL = "https://api.jsonbin.io/b/60548436683e7e079c546027/9";

  const fetchData = async () => {
    const response = await fetch(URL);

    if (!response.ok)
      console.error(`An error has occurred: ${response.status}`);

    const data = await response.json();

    return data;
  };

  document.addEventListener("DOMContentLoaded", async () => {
    try {
      setData(await fetchData());
    } catch (error) {
      console.error(error);
    }
  });

  return { data };
};

const CarouselItem = () => {
  let { data } = ComponentLogic();

  {
    return data.map((data) => {
      return (
        <div key={data.id} className="carousel-item">
          <img className="carousel-item__img" src={data.cover} alt={data.alt} />
          <div className="carousel-item__details">
            <div>
              <a href={data.code} target="_blank" rel="noreferrer">
                <img
                  className="carousel-item__details--img"
                  src={GithubIcon}
                  alt="Github icon. Press enter to go to the project repository in github."
                />
              </a>
              <a href={data.link} target="_blank" rel="noreferrer">
                <img
                  className="carousel-item__details--img"
                  src={SiteIcon}
                  alt="Computer icon. Press enter to go to the project page."
                />
              </a>
            </div>
            <p className="carousel-item__details--title">{data.title}</p>
            <p className="carousel-item__details--description">
              {data.description}
            </p>
          </div>
        </div>
      );
    });
  }
};

export default CarouselItem;
