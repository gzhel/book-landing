import React from "react";
import { Link } from "react-router-dom";
import LogoBookImg from "../../../shared/images/logo.png";
export const HeaderComponent = () => {
  return (
    <header id="header">
      <div className={"container"}>
        <div
          className={"row align-items-center justify-content-between d-flex"}
        >
          <div id={"logo"}>
            <Link to={"/"}>
              <img src={LogoBookImg} alt="" title="" />
            </Link>
          </div>
          <nav id={"nav-menu-container"}>
            <ul className={"nav-menu sf-arrows sf-with-ul"}>
              <li>
                <a href={"#home-banner"}>Home</a>
              </li>
              <li>
                <a href={"#home-about"}>About</a>
              </li>
              <li>
                <a href={"#home-info"}>Info</a>
              </li>
              <li>
                <Link to={"/"}>See our Workshop</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
