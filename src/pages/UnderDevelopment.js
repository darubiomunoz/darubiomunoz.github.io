import React from "react";
import "./styles/UnderDevelopment.css";

import backgroundLarge from "../assets/images/homepage-background-large.jpg";
import backgroundMedium from "../assets/images/homepage-background-medium.jpg";
import backgroundSmall from "../assets/images/homepage-background-small.jpg";
import DevelopmentIcon from "../components/DevelopmentIcon";
import DevelopmentInfo from "../components/DevelopmentInfo";

const UnderDevelopment = () => {
  return (
    <main className="development">
      <picture className="development__container">
        <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
        <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
        <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
        <img
          className="development__background"
          src={backgroundSmall}
          loading="lazy"
          aria-hidden="true"
          alt="background images"
        />
      </picture>
      <DevelopmentIcon />
      <DevelopmentInfo />
    </main>
  );
};

export default UnderDevelopment;
