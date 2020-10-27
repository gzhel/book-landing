import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoBookImg from "../../../shared/images/logo.png";
export const HeaderComponent = () => {
  const [pagesOpened, setPagesOpened] = useState(false);

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
              <li
                className={"menu-has-children"}
                onClick={() => setPagesOpened(!pagesOpened)}
              >
                <a href={"#workshop"} className={"menu-ul-w-arrow"}>
                  See our Workshop
                </a>
                {pagesOpened && (
                  <ul>
                    <li>
                      <a href={"#workshop-ex-1"}>Example 1</a>
                    </li>
                    <li>
                      <a href={"#workshop-ex2"}>Example 2</a>
                    </li>
                    <li>
                      <a href={"#workshop-ex3"}>Example 3</a>
                    </li>
                    <li>
                      <a href={"#workshop-ex4"}>Example 4</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
