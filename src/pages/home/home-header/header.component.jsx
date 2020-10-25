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
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>Fact</Link>
              </li>
              <li>
                <Link to={"/"}>Price</Link>
              </li>
              <li>
                <Link to={"/"}>Course</Link>
              </li>
              <li>
                <Link to={"/"}>Workshop</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
