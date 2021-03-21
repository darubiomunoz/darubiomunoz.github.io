import React from "react";
import "./styles/Page404.css";

import backgroundLarge from "../assets/images/homepage-background-large.jpg";
import backgroundMedium from "../assets/images/homepage-background-medium.jpg";
import backgroundSmall from "../assets/images/homepage-background-small.jpg";
import PageNotFoundIcon from "../components/PageNotFoundIcon";
import PageNotFoundInfo from "../components/PageNotFoundInfo";

const Page404 = () => {
  return (
    <main id="pagenotfound" className="pagenotfound">
      <picture className="pagenotfound__container">
        <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
        <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
        <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
        <img
          className="pagenotfound__background"
          src={backgroundSmall}
          loading="lazy"
          aria-hidden="true"
          alt="background images"
        />
      </picture>
      <PageNotFoundIcon />
      <PageNotFoundInfo />
    </main>
  );
};

export default Page404;
