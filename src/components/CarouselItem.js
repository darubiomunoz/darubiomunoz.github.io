/* eslint-disable no-lone-blocks */
import React, { useState, useRef } from "react";
import "./styles/CarouselItem.css";

import GithubIcon from "../assets/icons/icon-github.svg";
import SiteIcon from "../assets/icons/site-icon.svg";

const ComponentLogic = () => {
  const [data, setData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const URL = "https://api.jsonbin.io/b/60548436683e7e079c546027/12";

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

  const handleEnterPress = () => {
    setIsFocused(!isFocused);
  };

  return { data, handleEnterPress, isFocused };
};

const CarouselItem = () => {
  let { data, handleEnterPress, isFocused } = ComponentLogic();

  {
    return data.map((data) => {
      return (
        <div
          key={data.id}
          className={`carousel-item ${isFocused ? "" : ""}`}
          onKeyPress={handleEnterPress}
        >
          <img
            className="carousel-item__img"
            src={data.cover}
            tabIndex="0"
            loading="lazy"
            alt={data.alt}
          />
          <div
            className="carousel-item__details"
            tabIndex={`${isFocused ? "0" : "-1"}`}
            aria-hidden={`${isFocused ? "false" : "true"}`}
          >
            <div>
              <a
                href={data.code}
                tabIndex={`${isFocused ? "0" : "-1"}`}
                aria-live={`${isFocused ? "polite" : "off"}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="carousel-item__details--img"
                  aria-live={`${isFocused ? "polite" : "off"}`}
                  src={GithubIcon}
                  loading="lazy"
                  alt="Github icon. Press enter to go to the project repository in github."
                />
              </a>
              <a
                href={data.link}
                tabIndex={`${isFocused ? "0" : "-1"}`}
                aria-live={`${isFocused ? "polite" : "off"}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="carousel-item__details--img"
                  aria-live={`${isFocused ? "polite" : "off"}`}
                  src={SiteIcon}
                  loading="lazy"
                  alt="Website icon. Press enter to go to the project page."
                />
              </a>
            </div>
            <p
              className="carousel-item__details--title"
              aria-hidden={`${isFocused ? "false" : "true"}`}
              tabIndex="0"
              aria-live={`${isFocused ? "polite" : "off"}`}
            >
              {data.title}
            </p>
            <p
              className="carousel-item__details--description"
              aria-hidden={`${isFocused ? "false" : "true"}`}
              tabIndex="0"
              aria-live={`${isFocused ? "polite" : "off"}`}
            >
              {data.description}
            </p>
          </div>
        </div>
      );
    });
  }
};

export default CarouselItem;
