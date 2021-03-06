import React, { useState, useEffect, useRef } from "react";
import "./styles/Header.css";

import Logo from "../assets/images/logo.svg";
import LogoClicked from "../assets/images/logo-clicked.svg";
import HamburgerIcon from "../assets/icons/hamburger-icon.svg";
import CloseIcon from "../assets/icons/close-icon.svg";

const ComponentLogic = () => {
  const [clicked, setClicked] = useState(false);
  let reference = useRef(null);
  const screen = window.screen.width;

  const handleClick = () => {
    if (!clicked) setClicked(true);
    else setClicked(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!reference.current.contains(event.target)) setClicked(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { handleClick, clicked, reference, screen };
};

const Header = () => {
  const { handleClick, clicked, reference, screen } = ComponentLogic();

  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 start-0 end-100">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <img
            className="navbar__logo"
            src={clicked ? LogoClicked : Logo}
            loading="lazy"
            alt="Diego Rubio website's Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleClick()}
        >
          <img
            className="navbar__menuicon"
            src={HamburgerIcon}
            loading="lazy"
            alt="Press to show the website pages"
          />
        </button>
        <div
          id="navbarNav"
          className={`navbar__menutab collapse navbar-collapse ${
            screen >= 992 ? "" : "position-absolute d-flex flex-column"
          } ${screen >= 992 ? "" : clicked ? "" : "invisible"}`}
          ref={reference}
        >
          <img
            className={`navbar__closeicon ${screen >= 992 ? "invisible" : ""}`}
            src={CloseIcon}
            loading="lazy"
            alt="Press to hide the website pages"
            onClick={() => handleClick()}
          />
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#educationskills">
                Education & Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
