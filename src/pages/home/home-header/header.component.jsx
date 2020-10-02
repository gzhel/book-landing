import React, { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isPagesListHidden, setPagesListHidden] = useState(true);

  return (
    <header className={`${isScrolled && "header-scrolled"}`}>
      <div className={"container"}>
        <div>
          <div className={"logo"}>
            <Link to={"/"}>
              <img src="" alt="" />
            </Link>
          </div>
          <nav>
            <ul>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
