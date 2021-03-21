import React from "react";
import "./styles/Footer.css";

import backgroundSmall from "../assets/images/homepage-background-small.jpg";
import backgroundMedium from "../assets/images/homepage-background-medium.jpg";
import backgroundLarge from "../assets/images/homepage-background-large.jpg";
import DownArrow from "../assets/icons/down-arrow.svg";

const ComponentLogic = () => {
  const screen = window.screen.width;

  return { screen };
};

const Footer = () => {
  const { screen } = ComponentLogic();
  return (
    <div id="footer" className="footer">
      <picture className="footer__container">
        <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
        <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
        <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
        <img
          className="footer__background"
          src={backgroundSmall}
          loading="lazy"
          aria-hidden="true"
          alt="background images"
        />
      </picture>

      <div className="footer__info">
        <h3 className="footer__title" tabIndex="0">
          Made with &#128151; by Diego Rubio
        </h3>
        <p className="footer__subtitle mt-3" tabIndex="0">
          &#169; 2021 Diego Rubio
        </p>
      </div>

      {screen >= 992 && (
        <a className="footer__link--icon" href="#aboutme">
          <img
            className="footer__icon"
            src={DownArrow}
            alt="Down Arrow. Press enter to know more about me. "
          />
        </a>
      )}
    </div>
  );
};

export default Footer;
